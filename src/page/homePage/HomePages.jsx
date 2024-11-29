import React from 'react';
import ProductCaffeepage from '../productCaffee/ProductCaffeepage';

export default function HomePages() {
  return (
    <div className='bg-coffee-dark'>
        <div className="bg-coffee-dark shadow-md text-coffee-dark">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white bg-coffee-dark">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-[url('https://marketplace.canva.com/EAFyE8Hx1TE/1/0/1600w/canva-brown-modern-coffee-presentation-OaIun8PRu8M.jpg')] opacity-70"
    aria-hidden="true"
  ></div>

  {/* Overlay Content */}
  <div className="relative text-center bg-coffee-light bg-opacity-80 p-8 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold mb-4">Welcome to Aroma Café</h1>
    <p className="text-lg mb-6">Your perfect coffee experience awaits</p>
    <button className="bg-accent hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded">
      View Menu
    </button>
  </div>
</header>


      {/* Menu Preview Section */}
      <section className="py-16 px-4 bg-coffee-light">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-coffee-dark">
      Our Favorites
    </h2>
    <div className="">
      <ProductCaffeepage />
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-coffee-dark text-cream py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Aroma Café. All rights reserved.</p>
          <p className="mt-2">
            Follow us on{' '}
            <a
              href="#"
              className="text-accent hover:underline"
            >
              Instagram
            </a>{' '}
            |{' '}
            <a
              href="#"
              className="text-accent hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      </footer>
    </div>
    </div>
    
  );
}
