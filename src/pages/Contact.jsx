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
      <section className="pt-8 pb-16 bg-[#222021]">
        <div className="bg-[#1E0C06] w-[95%] mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="flex gap-8">
            {/* Left Side */}
            <div className="flex-1 flex flex-col gap-6 px-10 ">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name Here"
                className="w-full mb-6 py-5 bg-transparent text-white placeholder-[#D7D7D7]  focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Mail Here"
                className="w-full mb-6 py-5 bg-transparent text-white placeholder-[#D7D7D7]  focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="w-full mb-6 py-5 bg-transparent text-white placeholder-[#D7D7D7]  focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="What Service You Want"
                className="w-full mb-6 py-5 bg-transparent text-white placeholder-[#D7D7D7]  focus:outline-none border-b border-[#3A4553] transition-colors"
                required
              />
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col gap-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                className="mx-10 mt-16 p-5 bg-transparent text-white placeholder-[#D7D7D7] border border-[#FFA44A] focus:outline-none focus:border-[#FFA44A] transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="mx-10 mt-6 w-[55%] px-6 py-8 bg-[#FFA44A] text-xl text-white font-semibold hover:bg-[#B2763C] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-16 bg-[#222021]">
        <div className="w-[95%] mx-auto">
          <div className="flex gap-12">
            {/* Left Side */}
            <div className="bg-[#1E0C06] px-14 py-10 flex-1 flex justify-between gap-8 px-10">
              {/* Phone */}
              <div className="flex items-start gap-4 pb-4 ">
                <div className='border border-[#CCAA60] rounded-full p-4'>
                  <FontAwesomeIcon icon={faPhone} className="text-[#CCAA60] text-lg mt-1 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-white text-lg flex flex-col justify-center">
                    <span className="text-[#CCAA60] font-outfit">Call Us On: </span>
                    <span className="text-white font-outfit">911-987654321</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pb-4">
                <div className=' border border-[#CCAA60] rounded-full p-4'>
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#CCAA60] text-lg mt-1 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-white text-lg flex flex-col justify-center">
                    <span className="text-[#CCAA60] font-outfit">Email us:</span>
                    <span className="text-white font-outfit">yourmail@mail.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-[#1E0C06] px-14 py-10 flex-1 flex items-start gap-4">
              <div className='border border-[#CCAA60] rounded-full p-4'>
                <FontAwesomeIcon icon={faLocationDot} className="text-[#CCAA60] text-lg mt-1 flex-shrink-0" />
              </div>
              <div>
                <p className="text-white text-lg flex flex-col justify-center">
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

