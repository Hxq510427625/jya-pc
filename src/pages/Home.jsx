import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const accordionItems = [
    {
      title: 'YOUR SERVICE HERE',
      image: '/jya-pc/show1.jpg',
      description: 'Our underground mining services encompass a full range of operations including shaft sinking, development, production mining, and rehabilitation. With decades of experience, we provide expert personnel, state-of-the-art equipment, and proven methodologies to ensure safe and productive underground mining operations. Our team specializes in various mining methods including cut-and-fill, long-hole stoping, and mechanized mining systems.'
    },
    {
      title: 'YOUR SERVICE HERE',
      image: '/jya-pc/show2.jpg',
      description: 'We offer comprehensive backfill services designed to maximize mine stability while efficiently managing waste materials. Our backfill solutions include paste backfill, hydraulic backfill, and dry rock backfill systems. Our experienced team works closely with clients to develop customized backfill strategies that optimize both safety and operational efficiency, ensuring long-term mine stability and environmental compliance.'
    },
    {
      title: 'YOUR SERVICE HERE',
      image: '/jya-pc/show3.jpg',
      description: 'Our project management services provide complete oversight of mining projects from initial planning through to successful completion. We combine technical expertise with proven project management methodologies to deliver projects on time and within budget. Our services include feasibility studies, engineering design, procurement, construction management, and commissioning support.'
    },
    {
      title: 'YOUR SERVICE HERE',
      image: '/jya-pc/bannerRight.jpg',
      description: 'We provide access to a wide range of mining equipment including loaders, trucks, drills, and specialized underground machinery. Our maintenance services ensure maximum equipment availability and performance. With certified technicians and well-equipped workshops, we offer preventive maintenance, repairs, and equipment optimization services to keep your operations running smoothly.'
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className="bg-[#232122]">
      {/* Hero Section */}
      <section className="relative from-primary-700 to-primary-900 text-white">
        <div className="">
          <div className="relative">
            <div className="w-full md:w-2/3 h-[50vh] sm:h-[70vh] md:h-[100vh] rounded-r-0 md:rounded-r-3xl overflow-hidden">
              <img src="/jya-pc/homeBack.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-4/5 h-auto md:h-[75vh] bg-[#FFA12A70] rounded-l-0 md:rounded-l-3xl  md:absolute top-[50vh] sm:top-[70vh] md:top-1/2 md:-translate-y-1/2 right-0 flex flex-col md:flex-row justify-between items-center shadow-[0_0_30px_rgba(200,200,200,0.3)] px-4 sm:px-8 md:px-0 py-8 md:py-0">
              <div className="w-full md:w-1/2 h-auto md:h-4/5 border-r-0 md:border-r-2 border-white px-4 sm:px-8 md:px-20 md:mr-10 rounded-l-0 md:rounded-l-3xl mb-6 md:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-5">ABOUT </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-20">US</h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light font-outfit text-white w-full md:w-[90%]">Underground mining professionals for full-service or bespoke contract arrangements.</p>
              </div>
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full bg-[#1A1A1A] rounded-lg md:rounded-none">
                <img src="/jya-pc/bannerRight.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who ARE We Section */}
      <section id="about" className="my-10 sm:my-16 md:my-20 pt-10 sm:pt-16 md:pt-20">
        <div className="w-[95%] sm:w-[90%] bg-[#B2763C] rounded-r-0 sm:rounded-r-2xl md:rounded-r-3xl flex flex-col md:flex-row justify-between items-center p-6 sm:p-10 md:p-20 shadow-[0_0_20px_rgba(200,200,200,0.3)] gap-8 md:gap-0">
          <div className="w-full md:w-2/3 h-full md:pr-8 lg:pr-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 md:mb-20 tracking-wider">WHO ARE WE</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-outfit font-medium text-white mb-6 sm:mb-8 md:mb-10">
              XXX Ltd is part of the XXX Group, a growing consortium of companies offering end-to-end support across the mining sector.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-outfit font-medium text-white mb-6 sm:mb-8 md:mb-10">
              Founded by industry professionals with decades of experience in engineering design and operational expertise, XXX Ltd has built a strong reputation for providing quality personnel, products, and contract services to mining projects.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-outfit font-medium text-white">
              Today, XXX Ltd is a leading mining contractor and full-service provider, known for delivering safe, reliable, and professional services to both national and international mining operations.
            </p>
          </div>
          <div className="w-full md:w-1/3 min-h-[300px] sm:min-h-[400px] md:min-h-[540px] relative">
            <div className="w-[40%] aspect-square rounded-2xl md:rounded-3xl absolute top-0 right-0 overflow-hidden">
              <img src="/jya-pc/show1.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-2/3 aspect-square rounded-2xl md:rounded-3xl absolute top-[17%] left-[10%] overflow-hidden shadow-[10px_-10px_0_#000000]">
              <img src="/jya-pc/show2.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[40%] aspect-square rounded-2xl md:rounded-3xl absolute bottom-0 left-[55%] overflow-hidden">
              <img src="/jya-pc/show3.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY  US Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#232122]">
        <div className="w-full bg-[#B2763C] p-6 sm:p-10 md:p-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8">WHY US</h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white">Digging deep to get you results</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-4 sm:gap-0">
            <div className="w-full sm:w-1/2 p-4 sm:p-6 md:p-8 flex mb-4 sm:mb-6 md:mb-8">
              <div className="mr-4 sm:mr-6 md:mr-8 flex-shrink-0">
                <FontAwesomeIcon icon={faGear} className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="w-full sm:w-[60%]">
                <p className="text-white text-base sm:text-lg md:text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-4 sm:p-6 md:p-8 flex mb-4 sm:mb-6 md:mb-8">
              <div className="mr-4 sm:mr-6 md:mr-8 flex-shrink-0">
                <FontAwesomeIcon icon={faGear} className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="w-full sm:w-[60%]">
                <p className="text-white text-base sm:text-lg md:text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-4 sm:p-6 md:p-8 flex mb-4 sm:mb-6 md:mb-8">
              <div className="mr-4 sm:mr-6 md:mr-8 flex-shrink-0">
                <FontAwesomeIcon icon={faGear} className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="w-full sm:w-[60%]">
                <p className="text-white text-base sm:text-lg md:text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-4 sm:p-6 md:p-8 flex mb-4 sm:mb-6 md:mb-8">
              <div className="mr-4 sm:mr-6 md:mr-8 flex-shrink-0">
                <FontAwesomeIcon icon={faGear} className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="w-full sm:w-[60%]">
                <p className="text-white text-base sm:text-lg md:text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-[#232122]">
        <div className="w-full p-6 sm:p-10 md:p-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#B2763C] mb-4 sm:mb-6 md:mb-8">Our Service</h1>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="bg-[#B2763C] w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex justify-between items-center text-left hover:bg-[#2A2A2A] transition-colors"
                >
                  <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium pr-4 sm:pr-6 md:pr-8 flex-1">
                    {item.title}
                  </span>
                  <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold flex-shrink-0 w-6 sm:w-8 text-center">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="bg-[#B2763C] p-4 sm:p-6 md:p-8 mt-4">
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
                      {/* Left: Image */}
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        />
                      </div>
                      {/* Right: Description */}
                      <div className="flex-1 md:pl-6 md:pr-4 lg:pr-20">
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home

