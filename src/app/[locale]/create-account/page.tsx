import CreateAccountForm from '@/components/forms/createAccountForm'
import Picture from '@/components/ui/Picture'
import { Link } from '@/i18n/routing'

const CreateAccount = () => {
  return (
    <main className="content-wrapper py-12 flex items-center">
      <section className="w-[68%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="relative h-[288px] w-[340px] overflow-x-hidden flex-1">
          <Picture src="/images/x-logo.svg" alt="test" />
        </div>

        <div>
          <h1 className="text-6xl text-white font-bold mb-14">Create Account</h1>

          <div className="flex flex-col gap-6 w-[360px]">
            <CreateAccountForm />

            <p className="text-small">
              By signing up, you agree to the{' '}
              <Link href="/" className="highline-link">
                Terms of Service{' '}
              </Link>{' '}
              and{' '}
              <Link href="/" className="highline-link">
                Privacy Policy
              </Link>
              , including{' '}
              <Link href="/" className="highline-link">
                Cookie Use
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreateAccount
