import { memo } from 'react'

const currentYear = new Date().getFullYear()

const Footer = memo(() => {
  return (
    <footer className="p-4">
      <nav>
        <ul>
          <li>
            <span className="border-r border-gray-500 pr-2 text-gray-400">
              &copy; {currentYear}
            </span>
          </li>
        </ul>
      </nav>
    </footer>
  )
})

export default Footer
