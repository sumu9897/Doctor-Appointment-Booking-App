import React from 'react'

const Career = () => {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-20 bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center text-center">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
          Careers at <span className="text-primary">Prescripto</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base max-w-2xl">
          Join our mission to revolutionize healthcare through innovation and technology.  
          We're always looking for talented individuals to be part of our growing team.
        </p>
      </div>

      {/* Card Section */}
      <div className="bg-white shadow-md rounded-2xl p-8 md:p-10 max-w-xl w-full">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Job Openings Available</h3>
        <p className="text-gray-500 mb-6">
          Currently, we don’t have any job openings. But don’t worry — our team is always expanding.  
          Stay tuned for upcoming opportunities!
        </p>
        <button
          onClick={() => window.location.href = "mailto:mohammad.sumon9897@gmail.com"}
          className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-primary/90 transition duration-300"
        >
          Contact HR
        </button>
      </div>

      {/* Stay Updated Section */}
      <div className="mt-12 text-gray-600 max-w-lg">
        <p className="text-sm md:text-base">
          Want to stay informed about new job opportunities?  
          Subscribe to our newsletter or follow us on social media for updates.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Career
