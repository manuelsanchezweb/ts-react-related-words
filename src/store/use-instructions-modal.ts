import { create } from 'zustand'

type InstructionsModalState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useInstructionsModal = create<InstructionsModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
