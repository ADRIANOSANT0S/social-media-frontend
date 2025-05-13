'use client'

import clsx from 'clsx'
import { useState, type InputHTMLAttributes } from 'react'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface IFloatingInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  registration: UseFormRegisterReturn
  error?: FieldError
}

const FloatingInput = ({
  label,
  registration,
  error,
  ...props
}: IFloatingInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const isActive = isFocused || value.length > 0

  return (
    <div className={`relative w-full ${error ? 'mb-6': ''}`}>
      <input
        type="text"
        {...registration}
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          registration.onChange(e)
        }}
        onFocus={() => {
          setIsFocused(true)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          registration.onBlur?.(e)
        }}
        className={clsx(
          'input',
          error && 'border-red-500'
        )}
      />
      <label
        htmlFor={registration.name}
        className={clsx(
          'absolute left-3 transition-all pointer-events-none',
          isActive
            ? 'top-1 text-xs text-sky-500'
            : 'top-1/2 -translate-y-1/2 text-lg font-normal text-gray-400'
        )}
      >
        {label}
      </label>
      {error && <p className="absolute text-red-500 text-sm -bottom-6">{error.message}</p>}
    </div>
  )
}


export default FloatingInput
