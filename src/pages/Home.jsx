import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const accordionItems = [
    {
      title: 'YOUR SERVICE HERE',
      image: '/show1.jpg',
      description: 'Our underground mining services encompass a full range of operations including shaft sinking, development, production mining, and rehabilitation. With decades of experience, we provide expert personnel, state-of-the-art equipment, and proven methodologies to ensure safe and productive underground mining operations. Our team specializes in various mining methods including cut-and-fill, long-hole stoping, and mechanized mining systems.'
    },
    {
      title: 'YOUR SERVICE HERE',
      image: '/show2.jpg',
      description: 'We offer comprehensive backfill services designed to maximize mine stability while efficiently managing waste materials. Our backfill solutions include paste backfill, hydraulic backfill, and dry rock backfill systems. Our experienced team works closely with clients to develop customized backfill strategies that optimize both safety and operational efficiency, ensuring long-term mine stability and environmental compliance.'
    },
    {
      title: 'YOUR SERVICE HERE',
      image: '/show3.jpg',
      description: 'Our project management services provide complete oversight of mining projects from initial planning through to successful completion. We combine technical expertise with proven project management methodologies to deliver projects on time and within budget. Our services include feasibility studies, engineering design, procurement, construction management, and commissioning support.'
    },
    {
      title: 'YOUR SERVICE HERE',
      image: '/bannerRight.jpg',
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
            <div className="w-2/3 h-[100vh] rounded-r-3xl overflow-hidden">
              <img src="/homeBack.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-4/5 h-[75vh] bg-[#FFA12A70] rounded-l-3xl absolute top-1/2  -translate-y-1/2 right-0 flex justify-between items-center shadow-[0_0_30px_rgba(200,200,200,0.3)]">
              <div className="w-1/2 h-4/5 border-r-2 border-white px-20 mr-10 rounded-l-3xl">
                <h1 className="text-7xl font-bold text-white mb-5">ABOUT </h1>
                <h1 className="text-7xl font-bold text-white mb-20">US</h1>
                <p className="text-3xl font-light font-outfit text-white w-[90%]">Underground mining professionals for full-service or bespoke contract arrangements.</p>
              </div>
              <div className="w-1/2 h-full bg-[#1A1A1A]">
                <img src="/bannerRight.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who ARE We Section */}
      <section id="about" className="my-20 pt-20">
        <div className="w-[90%] bg-[#B2763C] rounded-r-3xl flex justify-between items-center p-20 shadow-[0_0_20px_rgba(200,200,200,0.3)]">
          <div className="w-2/3 h-full pr-16">
            <h1 className="text-7xl font-bold text-white mb-20 tracking-wider ">WHO ARE WE</h1>
            <p className="  text-2xl font-outfit font-medium text-white mb-10">
              XXX Ltd is part of the XXX Group, a growing consortium of companies offering end-to-end support across the mining sector.
            </p>
            <p className="text-2xl font-outfit font-medium text-white mb-10">
              Founded by industry professionals with decades of experience in engineering design and operational expertise, XXX Ltd has built a strong reputation for providing quality personnel, products, and contract services to mining projects.
            </p>
            <p className="text-2xl font-outfit font-medium text-white">
              Today, XXX Ltd is a leading mining contractor and full-service provider, known for delivering safe, reliable, and professional services to both national and international mining operations.
            </p>
          </div>
          <div className="w-1/3 min-h-[540px] relative">
            <div className="w-[40%] aspect-square rounded-3xl absolute top-0 right-0 overflow-hidden">
              <img src="/show1.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-2/3 aspect-square rounded-3xl absolute top-[17%] left-[10%] overflow-hidden shadow-[10px_-10px_0_#000000]">
              <img src="/show2.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[40%] aspect-square rounded-3xl absolute bottom-0 left-[55%] overflow-hidden">
              <img src="/show3.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY  US Section */}
      <section className="py-20 bg-[#232122]">
        <div className="w-full bg-[#B2763C] p-20">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold text-white mb-8">WHY US</h1>
            <p className="text-4xl font-light text-white">Digging deep to get you results</p>
          </div>
          <div className="flex flex-wrap justify-between items-center ">
            <div className="w-1/2 p-8 flex mb-8">
              <div className="mr-8">
                <FontAwesomeIcon icon={faGear} className="text-white text-5xl" />
              </div>
              <div className="w-[60%]">
                <p className="text-white text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>

            </div>
            <div className="w-1/2 p-8 flex mb-8">
              <div className="mr-8">
                <FontAwesomeIcon icon={faGear} className="text-white text-5xl" />
              </div>
              <div className="w-[60%]">
                <p className="text-white text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>

            </div>
            <div className="w-1/2 p-8 flex mb-8">
              <div className="mr-8">
                <FontAwesomeIcon icon={faGear} className="text-white text-5xl" />
              </div>
              <div className="w-[60%]">
                <p className="text-white text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>

            </div>
            <div className="w-1/2 p-8 flex mb-8">
              <div className="mr-8">
                <FontAwesomeIcon icon={faGear} className="text-white text-5xl" />
              </div>
              <div className="w-[60%]">
                <p className="text-white text-xl">
                  The people, the equipment and the skills to support mining operators as a principal mining contractor, backfill or project provider.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-[#232122]">
        <div className="w-full p-20">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-bold text-[#B2763C] mb-8">Our Service</h1>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="bg-[#B2763C] w-full px-8 py-6 flex justify-between items-center text-left hover:bg-[#2A2A2A] transition-colors"
                >
                  <span className="text-white text-3xl font-medium pr-8 flex-1">
                    {item.title}
                  </span>
                  <span className="text-white text-3xl font-bold flex-shrink-0 w-8 text-center">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="bg-[#B2763C] p-4 mt-4">
                    <div className="flex gap-8 items-start">
                      {/* Left: Image */}
                      <div className="w-1/3 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      {/* Right: Description */}
                      <div className="flex-1 pl-6 pr-20">
                        <p className="text-white text-lg leading-relaxed">
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

