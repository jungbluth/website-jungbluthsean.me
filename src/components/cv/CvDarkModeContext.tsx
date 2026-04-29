import { createContext, useContext } from "react";

export const CvDarkModeContext = createContext(false);

export function useCvDark() {
  return useContext(CvDarkModeContext);
}
