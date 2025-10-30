import { create } from "zustand";

interface ServerModalState {
  serverName: string;
  serverImage: File | null;
  setServerName: (name: string) => void;
  setServerImage: (file: File | null) => void;
}

export const useServerModalStore = create<ServerModalState>((set) => ({
  serverName: "",
  serverImage: null,
  setServerName: (name) => set({ serverName: name }),
  setServerImage: (file) => set({ serverImage: file }),
}));
