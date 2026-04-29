import { createContext, useContext } from "react";

export interface CreatureLogEntry {
  id: string;
  name: string;
  depth: string;
  discoveredAt: number;
}

export interface CreatureLogContextType {
  discovered: Map<string, CreatureLogEntry>;
  totalCreatures: number;
  addDiscovery: (id: string, name: string, depth: string) => void;
}

export const CreatureLogContext = createContext<CreatureLogContextType>({
  discovered: new Map(),
  totalCreatures: 0,
  addDiscovery: () => {},
});

export function useCreatureLog() {
  return useContext(CreatureLogContext);
}
