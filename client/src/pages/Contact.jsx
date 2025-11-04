import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
          CONTACT <span className="text-primary">US</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          We’d love to hear from you! Reach out to us anytime.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-gray-700">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact illustration"
            className="w-full max-w-[380px] rounded-xl shadow-md"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-6 max-w-md">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">OUR OFFICE</h3>
            <p className="text-gray-600 leading-relaxed">
              00000 Willms Station <br />
              Suite 000, Washington, USA
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">CONTACT INFO</h3>
            <p className="text-gray-600 leading-relaxed">
              Tel: (000) 000-0000 <br />
              Email: <a href="mailto:mohammad.sumon9897@gmail.com" className="text-primary hover:underline">
                mohammad.sumon9897@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">CAREERS AT PRESCRIPTO</h3>
            <p className="text-gray-600 mb-3">
              Learn more about our teams and job openings.
            </p>
            <button
            onClick={() => { navigate("/career"); scrollTo(0,0)}}
              className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition duration-300"
            >
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
