'use client'

import { useEffect, useRef } from 'react'
import { useInstructionsModal } from '../store/use-instructions-modal'

const InstructionsModal = () => {
  const { isOpen, close } = useInstructionsModal()
  const modalRef = useRef<HTMLDivElement>(null)

  // This useEffect will handle clicks outside the modal element
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        close()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Clean up the event listener when the component is unmounted or the modal is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, close])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed w-full inset-0 z-10">
      <div className="bg-black/25 absolute inset-0 w-full h-full"></div>
      <div
        ref={modalRef}
        id="modal-instructions"
        className="absolute max-h-[80vh] md:max-h-[50vh] scroll-y-auto overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 border-pixel"
      >
        <div className="flex justify-end">
          <button className="text-2xl" onClick={close}>
            X
          </button>
        </div>
        <div>
          <div className="text-center font-bold text-2xl mb-12">
            Instructions
          </div>
          <p className="mb-4">
            There are combinations of{' '}
            <span className="underline">4 combinations of 4 words per day</span>
            . Your goal is to find them all{' '}
            <span className="underline">before you run out of lives</span>.
          </p>
          <div className="mb-4">
            For example, let us say that we have the following words:
            <ul>
              <li>- apple</li>
              <li>- banana</li>
              <li>- orange</li>
              <li>- grape</li>
            </ul>
          </div>
          <p className="mb-4">
            All of them are connected because of the main group{' '}
            <span className="underline">fruit</span>, This case was easy, but
            you will find cases where it will be harder to find the connection
            between the words... Sometimes{' '}
            <span className="underline">
              you will have to think outside the box!
            </span>
          </p>
          <p className="mb-4">
            Good luck, and if you find anything weird, you can let me know{' '}
            <a
              className="underline"
              title="Open Github Issues on new tab"
              rel="nofollow noopener"
              target="_blank"
              href="https://github.com/manuelsanchezweb/ts-react-related-words/issues"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default InstructionsModal
