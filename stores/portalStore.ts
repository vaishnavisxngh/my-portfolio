import { create } from 'zustand';

interface PortalState {
  activePortalId: string | null;
  setActivePortalId: (id: string | null) => void;
}

export const usePortalStore = create<PortalState>((set) => ({
  activePortalId: null,
  setActivePortalId: (id) => set({ activePortalId: id }),
}));
