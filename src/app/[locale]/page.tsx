import Footer from '@/components/Footer'
import LoginForm from '@/components/forms/LoginForm'
import Picture from '@/components/ui/Picture'
import { Link } from '@/i18n/routing'

const Home = () => {
  return (
    <>
      <main className="content-wrapper py-12 lg:h-[90vh] flex items-center">
        <section className="w-[68%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          <div className="relative h-[288px] w-[340px] overflow-x-hidden flex-1">
            <Picture src="/images/x-logo.svg" alt="test" />
          </div>

          <div>
            <h1 className="text-6xl text-white font-bold mb-14">
              Happening now
            </h1>

            <div className="flex flex-col gap-6 w-[360px]">
              <LoginForm />

              <div>
                <h3 className="small-title mb-4">Don't have an account?</h3>
                <Link
                  href="/create-account"
                  className="button-base  bg-sky-500 hover:bg-sky-600"
                >
                  Create account
                </Link>
              </div>

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

      <Footer />
    </>
  )
}

export default Home
