import { Button } from '@heroui/react';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import useFullscreen from '@/hooks/use-full-screen';

export default function FullScreen() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  return (
    <Button
      variant="light"
      className="text-primary"
      onPress={toggleFullscreen}
      isIconOnly
    >
      {isFullscreen ? (
        <MdFullscreenExit className="text-2xl" />
      ) : (
        <MdFullscreen className="text-2xl" />
      )}
    </Button>
  );
}
