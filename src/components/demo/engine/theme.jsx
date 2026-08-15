/** @jsx jsx */
import { jsx } from 'theme-ui';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);

export function useT() {
  return useContext(ThemeContext);
}
