import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebook, 
  faTwitter, 
  faPinterest,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-[#B2763C] shadow-[0_0_20px_rgba(200,200,200,0.3)] text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8 md:gap-4">
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <img src="/jya-pc/logo.png" alt="logo" className="h-12 sm:h-14 md:h-16" />
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
              <a 
                href="#" 
                className="text-white hover:text-[#FFA12A70] transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl sm:text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#FFA12A70] transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl sm:text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#FFA12A70] transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl sm:text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#FFA12A70] transition-colors"
                aria-label="Pinterest"
              >
                <FontAwesomeIcon icon={faPinterest} className="text-xl sm:text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-4 sm:gap-5">
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-white text-lg sm:text-xl md:text-2xl mt-0.5 flex-shrink-0" />
              <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-right">
                Na Plzeňce 1166/0<br />
                150 00
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3 sm:gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-white text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-right">
                +420 000 000 000
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

