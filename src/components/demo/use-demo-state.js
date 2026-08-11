import { useEffect, useRef, useState } from 'react';

const PREFIX = 'we2tech-demo-v1';

function safeJSON(v, fallback) {
  if (v == null) return fallback;
  try {
    return JSON.parse(v);
  } catch {
    return fallback;
  }
}

export function useDemoState(item, key, initial) {
  const storageKey = item && item.id != null ? `${PREFIX}-${item.id}-${key}` : null;
  const [state, setState] = useState(() => {
    if (!storageKey || typeof window === 'undefined') return initial;
    const raw = window.localStorage.getItem(storageKey);
    if (raw == null) return initial;
    return safeJSON(raw, initial);
  });
  const ready = useRef(false);

  useEffect(() => {
    if (!storageKey || typeof window === 'undefined') return;
    ready.current = true;
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  const reset = () => {
    if (storageKey && typeof window !== 'undefined') window.localStorage.removeItem(storageKey);
    setState(initial);
  };

  return [state, setState, reset];
}
