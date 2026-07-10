import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { AppController, type AppSnapshot } from './AppController';

const ControllerContext = createContext<AppController | null>(null);

export function AppControllerProvider({ children }: { children: ReactNode }) {
  const controllerRef = useRef<AppController | null>(null);
  if (!controllerRef.current) controllerRef.current = new AppController();

  useEffect(() => {
    const controller = controllerRef.current;
    return () => controller?.dispose();
  }, []);

  return (
    <ControllerContext.Provider value={controllerRef.current}>{children}</ControllerContext.Provider>
  );
}

function useController(): AppController {
  const controller = useContext(ControllerContext);
  if (!controller) throw new Error('useController must be used within AppControllerProvider');
  return controller;
}

/**
 * Subscribes the calling component to the AppController and returns the
 * latest snapshot alongside the controller instance for issuing commands.
 */
export function useAppState(): [AppSnapshot, AppController] {
  const controller = useController();
  const [snapshot, setSnapshot] = useState<AppSnapshot>(() => {
    let initial!: AppSnapshot;
    const unsub = controller.subscribe((s) => {
      initial = s;
    });
    unsub();
    return initial;
  });

  useEffect(() => controller.subscribe(setSnapshot), [controller]);

  return [snapshot, controller];
}
