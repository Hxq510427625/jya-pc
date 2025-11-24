import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/Footer'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const cardData = [
    {
      id: 1,
      image: '/show4.jpg',
      date: '18-08-2020',
      title: 'Gas Station Injury',
      description: 'There are of Lorem Ipsum available, but majority have su alteration in some form, by injected oir which don\'t look even slightly believable.',
      details: 'This project involved comprehensive safety improvements at gas station facilities. We implemented advanced monitoring systems and enhanced safety protocols to prevent workplace injuries. The project included staff training, equipment upgrades, and regular safety audits to ensure compliance with industry standards.'
    },
    {
        id: 2,
        image: '/show4.jpg',
        date: '18-08-2020',
        title: 'Gas Station Injury',
        description: 'There are of Lorem Ipsum available, but majority have su alteration in some form, by injected oir which don\'t look even slightly believable.',
        details: 'This project involved comprehensive safety improvements at gas station facilities. We implemented advanced monitoring systems and enhanced safety protocols to prevent workplace injuries. The project included staff training, equipment upgrades, and regular safety audits to ensure compliance with industry standards.'
      },
      {
        id: 3,
        image: '/show4.jpg',
        date: '18-08-2020',
        title: 'Gas Station Injury',
        description: 'There are of Lorem Ipsum available, but majority have su alteration in some form, by injected oir which don\'t look even slightly believable.',
        details: 'This project involved comprehensive safety improvements at gas station facilities. We implemented advanced monitoring systems and enhanced safety protocols to prevent workplace injuries. The project included staff training, equipment upgrades, and regular safety audits to ensure compliance with industry standards.'
      },
      {
        id: 4,
        image: '/show4.jpg',
        date: '18-08-2020',
        title: 'Gas Station Injury',
        description: 'There are of Lorem Ipsum available, but majority have su alteration in some form, by injected oir which don\'t look even slightly believable.',
        details: 'This project involved comprehensive safety improvements at gas station facilities. We implemented advanced monitoring systems and enhanced safety protocols to prevent workplace injuries. The project included staff training, equipment upgrades, and regular safety audits to ensure compliance with industry standards.'
      },    {
        id: 5,
        image: '/show4.jpg',
        date: '18-08-2020',
        title: 'Gas Station Injury',
        description: 'There are of Lorem Ipsum available, but majority have su alteration in some form, by injected oir which don\'t look even slightly believable.',
        details: 'This project involved comprehensive safety improvements at gas station facilities. We implemented advanced monitoring systems and enhanced safety protocols to prevent workplace injuries. The project included staff training, equipment upgrades, and regular safety audits to ensure compliance with industry standards.'
      },
      {
        id: 6,
        image: '/show4.jpg',
        date: '18-08-2020',
        title: 'Gas Station Injury',
        description: 'There are of Lorem Ipsum available, but majority have su alteration in some form, by injected oir which don\'t look even slightly believable.',
        details: 'This project involved comprehensive safety improvements at gas station facilities. We implemented advanced monitoring systems and enhanced safety protocols to prevent workplace injuries. The project included staff training, equipment upgrades, and regular safety audits to ensure compliance with industry standards.'
      },
  ]

  return (
    <div>
      {/* Banner */}
      <section className="bg-[#222021] text-white">
        <div className="relative pt-5 h-[80vh]">
            <img src="/projectsBanner.jpg" alt="" className="w-full h-full object-cover" />
            <div className='w-full absolute bottom-0 left-0 p-8 md:p-12 lg:p-16'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFA44A] mb-8 md:mb-8 lg:mb-8'>OUR SERVICES</h1>
                <p className='w-2/3 text-lg md:text-xl lg:text-2xl font-light text-[#FFA44A]'>Westfill offers a variety of services to execute underground mining projects safely and efficiently.</p>
            </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pt-20 pb-10 bg-[#222021]">
        <div className="max-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around">
            {cardData.map((card) => (
              <div key={card.id} className="bg-[#212b38] flex-1 min-w-[40%] max-w-[45%] overflow-hidden mb-8">
                {/* Image */}
                <div className="w-full h-72 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-10 flex flex-col">
                  {/* Date */}
                  <p className="text-[#FFA44A] text-sm mb-2 font-outfit">{card.date}</p>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  
                  {/* Description */}
                  <p className="text-white mb-6 flex-grow font-outfit">{card.description}</p>
                  
                  {/* Learn More Link */}
                  <button
                    onClick={() => setSelectedProject(card)}
                    className="text-[#FFA44A] underline font-light font-outfit hover:text-[#B2763C] transition-colors text-left"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  ×
                </button>
                
                {/* Image */}
                <div className="w-full h-80 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-500 text-sm mb-2">{selectedProject.date}</p>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Details</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Statistics */}
      <section className="pt-8 pb-16">
        <div className="bg-white w-full mx-auto px-4 pt-10 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl  font-bold text-[#FFA44A] mb-4">
            Our Partners
            </h2>
            
          </div>
          <div className="pb-5 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <FontAwesomeIcon icon={faFortAwesomeAlt} className="text-8xl" />
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faFortAwesomeAlt} className="text-8xl" />
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faFortAwesomeAlt} className="text-8xl" />
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faFortAwesomeAlt} className="text-8xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Projects

