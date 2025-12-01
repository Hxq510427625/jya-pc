import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里可以添加实际的表单提交逻辑
    alert('Message sent successfully!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }


  return (
    <div>
      {/* Contact Form */}
      <section className="pt-8 pb-12 sm:pb-16 bg-[#222021]">
        <div className="bg-[#1E0C06] w-[95%] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Left Side */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-6 px-0 md:px-4 lg:px-10">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name Here"
                className="w-full py-3 sm:py-4 md:py-5 bg-transparent text-white placeholder-[#D7D7D7] text-sm sm:text-base focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Mail Here"
                className="w-full py-3 sm:py-4 md:py-5 bg-transparent text-white placeholder-[#D7D7D7] text-sm sm:text-base focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="w-full py-3 sm:py-4 md:py-5 bg-transparent text-white placeholder-[#D7D7D7] text-sm sm:text-base focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="What Service You Want"
                className="w-full py-3 sm:py-4 md:py-5 bg-transparent text-white placeholder-[#D7D7D7] text-sm sm:text-base focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                className="w-full md:mx-4 lg:mx-10 mt-0 md:mt-8 lg:mt-16 p-4 sm:p-5 bg-transparent text-white placeholder-[#D7D7D7] text-sm sm:text-base border border-[#FFA44A] focus:outline-none focus:border-[#FFA44A] transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full md:w-[55%] md:mx-4 lg:mx-10 mt-0 md:mt-6 px-6 py-4 sm:py-6 md:py-8 bg-[#FFA44A] text-base sm:text-lg md:text-xl text-white font-semibold hover:bg-[#B2763C] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-12 sm:pb-16 bg-[#222021]">
        <div className="w-[95%] mx-auto px-4 sm:px-6 md:px-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* Left Side */}
            <div className="bg-[#1E0C06] px-6 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 flex-1 flex flex-col sm:flex-row md:justify-between gap-6 sm:gap-4 md:gap-8">
              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4 pb-0 sm:pb-4">
                <div className='border border-[#CCAA60] rounded-full p-3 sm:p-4 flex-shrink-0'>
                  <FontAwesomeIcon icon={faPhone} className="text-[#CCAA60] text-base sm:text-lg mt-1" />
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base md:text-lg flex flex-col justify-center">
                    <span className="text-[#CCAA60] font-outfit">Call Us On: </span>
                    <span className="text-white font-outfit">911-987654321</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 pb-0 sm:pb-4">
                <div className='border border-[#CCAA60] rounded-full p-3 sm:p-4 flex-shrink-0'>
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#CCAA60] text-base sm:text-lg mt-1" />
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base md:text-lg flex flex-col justify-center">
                    <span className="text-[#CCAA60] font-outfit">Email us:</span>
                    <span className="text-white font-outfit">yourmail@mail.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-[#1E0C06] px-6 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 flex-1 flex items-start gap-3 sm:gap-4">
              <div className='border border-[#CCAA60] rounded-full p-3 sm:p-4 flex-shrink-0'>
                <FontAwesomeIcon icon={faLocationDot} className="text-[#CCAA60] text-base sm:text-lg mt-1" />
              </div>
              <div>
                <p className="text-white text-sm sm:text-base md:text-lg flex flex-col justify-center">
                  <span className="text-[#CCAA60] font-outfit">Main Office : </span>
                  <span className="text-white font-outfit">Los Feliz Blvd, Los Angeles, CA 90027, USA</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

