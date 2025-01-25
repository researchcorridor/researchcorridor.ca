'use client';

import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
} from 'react';

export interface RefContextType {
  aboutRef: RefObject<HTMLDivElement | null>;
  collaborationRef: RefObject<HTMLDivElement | null>;
  eventRef: RefObject<HTMLDivElement | null>;
  journalsRef: RefObject<HTMLDivElement | null>;
  researchersRef: RefObject<HTMLDivElement | null>;
}

export const Context = createContext<RefContextType>({
  aboutRef: { current: null },
  collaborationRef: { current: null },
  eventRef: { current: null },
  journalsRef: { current: null },
  researchersRef: { current: null },
});

export function RrfProvider({ children }: PropsWithChildren) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const collaborationRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);
  const journalsRef = useRef<HTMLDivElement>(null);
  const researchersRef = useRef<HTMLDivElement>(null);

  return (
    <Context.Provider
      value={{
        aboutRef,
        collaborationRef,
        eventRef,
        journalsRef,
        researchersRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default function useRefContext() {
  return useContext(Context);
}

export function scrollIntoView(ref: RefObject<HTMLDivElement | null>) {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
}
