import React from 'react'
import AOS from 'aos';  // Correct: with uppercase 'AOS'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
  const handleClick= () =>{
    window.open('https:tyranogame.vercel.app/','_blank')
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize this
      once: false, // Optional: whether animation should happen only once
    });
  }, []); 
  
  return (
    <>
    <div  className="bg-cover bg-center w-full "
    style={{ backgroundImage: `url('./src/assets/bg-sky.jpg')` }} // No need to import
    >
       <img className="w-full h-auto object-cover" src="/src/assets/img1.webp" alt="img" />
    
     <p className='mb-44'>homepage</p> 
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquam voluptates aperiam ad tempora earum soluta nisi magnam consequatur! Delectus accusamus vitae, voluptatibus numquam quasi optio consequuntur fugit voluptatem magnam.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus illum adipisci libero molestias laborum, eius delectus quas porro id cupiditate dicta saepe aut veritatis, explicabo repellat. Dignissimos quos est repudiandae!</p>
     <h1 data-aos="fade-up">This will fade up</h1>
     <p data-aos="fade-right" data-aos-duration="1500">This will fade from the right in 1.5 seconds.</p>
     <img data-aos="fade-right" data-aos-duration="1500" onClick={handleClick} className="transition-transform duration-1000 transform hover:translate-x-6" src="data:image/jpeg;base64,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" alt="cat" />
    </div>
    <div className="bg-cover bg-center w-full"
    style={{ backgroundImage: `url('./src/assets/bg-sky.jpg')` }}>
      <h1 className="pt-36">
        hello

      </h1>
    </div>
    </>
  )
}