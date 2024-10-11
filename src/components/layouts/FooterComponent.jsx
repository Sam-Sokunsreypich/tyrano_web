import React from 'react'

export default function FooterComponent() {
  return (
    
  <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span><img className="w-5 h-5" src="/src/assets/poster.jpg" alt="logo" /></span>
        <h2 className="text-xl font-bold">Ream Legends</h2>
        <p className="text-center">&copy; 2024 Game Name. All rights reserved.</p>
      </div>
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="" className="hover:text-gray-400">Terms of Service</a>
        <a href="" className="hover:text-gray-400">Privacy Policy</a>
      </div>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" className="text-xl hover:text-gray-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="text-xl hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" className="text-xl hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</footer>



  )
}
