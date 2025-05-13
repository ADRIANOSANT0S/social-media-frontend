'use client'

import { z } from 'zod'
import FloatingInput from './FloatingInput'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12}$/

const createAccountSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Nome muito curto')
    .max(50, 'Nome muito longo'),

  lastName: z
    .string()
    .trim()
    .min(2, 'Sobrenome muito curto')
    .max(80, 'Sobrenome muito longo'),

  email: z
    .string()
    .trim()
    .email('E-mail inválido')
    .min(1, 'E-mail é obrigatório'),

  age: z
    .string()
    .trim()
    .refine((val) => !Number.isNaN(Number(val)) && Number(val) >= 18, {
      message: 'Idade deve ser um número válido e maior ou igual a 18'
    }),

  password: z.string().trim().regex(passwordRegex, {
    message:
      'A senha deve ter 12 caracteres, incluindo maiúscula, minúscula, número e caractere especial'
  })
})

type CreateAccountDate = z.infer<typeof createAccountSchema>

const CreateAccountForm = () => {
  const router = useRouter()
  const locale = useLocale()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAccountDate>({
    resolver: zodResolver(createAccountSchema)
  })

  const handleCreateAccount = (data: CreateAccountDate) => {
    const { name, lastName, email, age, password } = data
    alert(`${name}, ${lastName}, ${email}, ${age}, ${password}`)
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(handleCreateAccount)} className='flex flex-col gap-4'>
      <FloatingInput
        type="text"
        label="Nome"
        registration={register('name', { required: 'nome obrigatório' })}
        error={errors.name}
      />
      <FloatingInput
        type="text"
        label="Sobre nome"
        registration={register('lastName', {
          required: 'LastName obrigatório'
        })}
        error={errors.lastName}
      />
      <FloatingInput
        type="email"
        label="Email"
        registration={register('email', { required: 'Email obrigatório' })}
        error={errors.email}
      />
      <FloatingInput
        type="text"
        label="Idade"
        registration={register('age', { required: 'Idade obrigatório' })}
        error={errors.age}
      />
      <FloatingInput
        type="password"
        label="Senha"
        registration={register('password', {
          required: 'Password obrigatório'
        })}
        error={errors.password}
      />
      <button type="submit" className='button-base text-black bg-slate-100 hover:bg-slate-300'>Criar conta</button>
    </form>
  )
}

export default CreateAccountForm
