'use client'

import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import Picture from '../ui/Picture'

interface IPopupBase {
  isPopupOpen: boolean
  onClose: () => void
  children: ReactNode
}

const PopupBase = ({ isPopupOpen, onClose, children }: IPopupBase) => {
  if (!isPopupOpen) return null

  return createPortal(
    <div>
      <div className="overlay bg-slate-500/40 absolute" />

      <div className="popup-wrapper">
        <button
          type="button"
          className="text-white absolute left-3 top-3 text-lg px-3 py-1 duration-300 ease-in-out cursor-pointer rounded-full hover:bg-slate-500/10"
          onClick={onClose}
        >
          X
        </button>

        <div className="relative h-6 w-8 mx-auto mb-8">
          <Picture src="/images/x-logo.svg" alt="logo x" />
        </div>

        <div>{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default PopupBase
