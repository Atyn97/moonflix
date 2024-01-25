import { create } from "zustand";

export interface ModalStoreInterface {
  open: boolean;
  openIt: () => void;
  closeIt: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
  open: false,
  openIt: () => set({ open: true }),
  closeIt: () => set({ open: false }),
}));

export default useInfoModal;
