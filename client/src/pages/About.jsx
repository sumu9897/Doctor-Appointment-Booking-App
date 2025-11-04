import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
          ABOUT <span className="text-primary">US</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Learn more about who we are and what drives us at Prescripto.
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={assets.about_image}
            alt="About Prescripto"
            className="w-full max-w-[400px] rounded-xl shadow-md"
          />
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col justify-center gap-6 text-gray-600 text-sm md:text-base">
          <p>
            Welcome to <span className="font-medium text-gray-800">Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p>
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
          WHY <span className="text-primary">CHOOSE US</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Card 1 */}
        <div className="border border-gray-200 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
          <h4 className="text-lg font-semibold mb-3">EFFICIENCY</h4>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
          <h4 className="text-lg font-semibold mb-3">CONVENIENCE</h4>
          <p>Book, manage, and track your appointments anytime, anywhere with ease.</p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
          <h4 className="text-lg font-semibold mb-3">PERSONALIZATION</h4>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </section>
  )
}

export default About
