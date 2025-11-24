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
    <footer className="bg-[#B2763C] shadow-[0_0_20px_rgba(200,200,200,0.3)] text-white py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
          {/* Left Side */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-4">
              <img src="/logo.png" alt="logo" className="h-16" />
            </div>
            {/* Social Media Icons */}
            <div className="flex">
              <a 
                href="#" 
                className="text-white mr-1 hover:text-[#B2763C] transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white mr-1 hover:text-[#B2763C] transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white mr-1 hover:text-[#B2763C] transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white mr-1 hover:text-[#B2763C] transition-colors"
                aria-label="Pinterest"
              >
                <FontAwesomeIcon icon={faPinterest} className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col text-right">
            {/* Address */}
            <div className="mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-white text-2xl mt-1 " />
              <p className="text-white text-lg text-left">
                Na Plzeňce 1166/0<br />
                150 00
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-white text-2xl " />
              <p className="text-white text-lg">
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

