import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path) => location.pathname === path

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 根据页面和滚动状态确定背景色
  const isHomePage = location.pathname === '/'
  const shouldShowBackground = !isHomePage || isScrolled
  const bgColor = shouldShowBackground ? 'bg-[#B2763C] sticky' : 'bg-transparent fixed'

  return (
    <nav className={`${bgColor} py-2 top-0 left-0 w-full z-50 transition-colors duration-300 ${shouldShowBackground ? 'shadow-[0_0_20px_rgba(200,200,200,0.5)] rounded-b-2xl' : ''}`}>
      <div className="mx-auto px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="logo" className=" h-16" />
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 rounded-md font-medium transition-colors ${
                isActive('/')
                  ? 'text-[#FFA44A]'
                  : 'text-white hover:text-[#FFA44A]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`px-3 rounded-md font-medium transition-colors ${
                isActive('/projects')
                  ? 'text-[#FFA44A]'
                  : 'text-white hover:text-[#FFA44A]'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`px-3 rounded-md font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-[#FFA44A]'
                  : 'text-white hover:text-[#FFA44A]'
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

