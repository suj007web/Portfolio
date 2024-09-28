import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Aside({ isMobile, onClose }) {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: 'fa-home', text: 'Home' },
    { href: '/about', icon: 'fa-user', text: 'About' },
    { href: '/services', icon: 'fa-list', text: 'Services' },
    { href: '/portfolio', icon: 'fa-briefcase', text: 'Portfolio' },
    { href: '/contact', icon: 'fa-comments', text: 'Contact' },
  ]

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose()
    }
  }

  return (
    <aside className={`${isMobile ? 'w-full' : 'fixed left-0 top-0 h-full w-[270px]'} bg-[var(--bg-black-100)] border-r border-[var(--bg-black-50)] p-8 flex flex-col justify-center transition-colors duration-300`}>
      <div className={`logo ${isMobile ? 'mb-8' : 'absolute top-12 left-8'}`}>
        <Link href="/" onClick={handleLinkClick}>
          <span className="text-4xl font-bold relative text-[var(--text-black-900)]">
            <span className="font-clicker-script text-5xl text-skin-color">S</span>ujal
          </span>
        </Link>
      </div>
      <nav className={isMobile ? '' : 'mt-16'}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className="mb-5">
              <Link
                href={item.href}
                className={`text-lg font-semibold hover:text-[var(--hover-color)] transition-colors ${
                  pathname === item.href ? 'text-skin-color' : 'text-[var(--text-black-900)]'
                }`}
                onClick={handleLinkClick}
              >
                <i className={`fas ${item.icon} mr-2`}></i>{item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}