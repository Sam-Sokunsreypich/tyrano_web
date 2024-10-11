import React from 'react'

export default function AboutUs() {
  return (
    <div>
    <section className="bg-gray-900 text-white py-20">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-center text-lg max-w-2xl mx-auto mb-12">
          Welcome to <span className="text-indigo-500 font-bold">Ream Legends</span>, 
          where we believe in the power of teamwork and creativity to build unforgettable game experiences.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-indigo-400 mb-4 text-center">Our Mission</h2>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              Our mission is to create immersive and captivating games that inspire players to think, collaborate, 
              and explore. We aim to push the boundaries of storytelling and gameplay by fostering a culture of innovation and creativity.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/assets/mission.jpg" alt="Mission" className="rounded-lg shadow-lg w-4/5"/>
          </div>
        </div>
      </div>

      {/* Teamwork Section */}
      <div className="bg-indigo-500 text-gray-100 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Teamwork Makes the Dream Work</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Our team thrives on collaboration. Every game we build is a collective effort, bringing together talented individuals from different disciplines—design, programming, writing, and art—to achieve a common vision.
          </p>
          <div className="flex flex-wrap justify-around items-center">
            <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
              <img src="/assets/teamwork.jpg" alt="Teamwork" className="rounded-full w-40 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p>We embrace ideas from every corner of the team to create a unique gaming experience.</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
              <img src="/assets/creativity.jpg" alt="Creativity" className="rounded-full w-40 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold">Creativity</h3>
              <p>Our passion for design and storytelling drives us to create memorable worlds and characters.</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <img src="/assets/innovation.jpg" alt="Innovation" className="rounded-full w-40 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p>We are always looking for new ways to enhance the player experience with cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Design Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-indigo-400 mb-4 text-center">Creative Design</h2>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              At <span className="text-indigo-500 font-bold">Ream Legends</span>, we take pride in our attention to detail and the craftsmanship that goes into every element of our games. From the stunning visuals to the intuitive user interface, every aspect is thoughtfully designed to immerse players in a seamless and engaging experience.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/assets/creative-design.jpg" alt="Creative Design" className="rounded-lg shadow-lg w-4/5"/>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}
