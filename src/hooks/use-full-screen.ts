import { useCallback, useEffect, useState } from 'react';

interface FullscreenAPI {
  requestFullscreen?: () => Promise<void>;
  exitFullscreen?: () => Promise<void>;
}

interface UseFullscreen {
  isFullscreen: boolean;
  enterFullscreen: () => void;
  exitFullscreen: () => void;
  toggleFullscreen: () => void;
}

const useFullscreen = (element?: HTMLElement | null): UseFullscreen => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleChange = () => {
    setIsFullscreen(
      !!(
        document?.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement ||
        false
      ),
    );
  };

  const enterFullscreen = useCallback(() => {
    const el = element || document.documentElement;
    const request: FullscreenAPI = el as FullscreenAPI;
    if (request.requestFullscreen) {
      request.requestFullscreen();
    }
  }, [element]);

  const exitFullscreen = useCallback(() => {
    const exit: FullscreenAPI = document as FullscreenAPI;
    if (exit.exitFullscreen) {
      exit.exitFullscreen();
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleChange);
    document.addEventListener('webkitfullscreenchange', handleChange);
    document.addEventListener('mozfullscreenchange', handleChange);
    document.addEventListener('MSFullscreenChange', handleChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('mozfullscreenchange', handleChange);
      document.removeEventListener('MSFullscreenChange', handleChange);
    };
  }, []);

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
};

export default useFullscreen;
