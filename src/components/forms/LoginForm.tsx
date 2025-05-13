'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import FloatingInput from './FloatingInput'

const loginSchema = z.object({
  email: z.string().email('Message').min(1, 'message'),
  password: z.string().min(12, 'message')
})

type LoginFormData = z.infer<typeof loginSchema>

const LoginForm = () => {
  const router = useRouter()
  const locale = useLocale()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const handleLogin = (data: LoginFormData) => {
    const { email, password } = data
    alert(`${email} and ${password}`)
    router.push(`${locale}/feed`)
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">
      <FloatingInput
        label="Email"
        type="email"
        registration={register('email', { required: 'Email obrigatório' })}
        error={errors.email}
      />
      <FloatingInput
        label="Password"
        type="password"
        registration={register('password', { required: 'Senha obrigatória' })}
        error={errors.password}
      />
      <button
        type="submit"
        className="button-base text-black bg-slate-100 hover:bg-slate-300"
      >
        login
      </button>
    </form>
  )
}

export default LoginForm
