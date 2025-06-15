// stores/themeStore.ts
import { create } from 'zustand';

type ThemeStore = {
  color: string;
  nextColor: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  color: '#ffffff', 
  nextColor: () => set((state) => ({
    color: state.color === '#ffffff' ? '#000000' : '#ffffff'
  })),
}));
