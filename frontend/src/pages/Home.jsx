import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import poha from "../assets/hot coffee.jpg"
import tea from "../assets/chai-kulhad.jpg"
import chkbur from "../assets/Chicken Burger.jpg"
import HomeCarousel from '../components/HomeCarousel'


function Home() {
  return (
    <div className='bg-neutral-100'>
        <Navbar/>
        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:`url(${poha})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-white">Welcome</h1>
                <p className="mb-5 text-2xl text-white">
                Discover the heartwarming flavors of chai at Chai Pot, where every sip tells a story.
                </p>
                <button className="btn btn-primary glass text-white">Whats new?</button>
              </div>
            </div>
        </div>
        <hr></hr>
        <div className="hero min-h-screen dark:bg-neutral-900 duration-300 transition-all ease-in-out">
          <div className="my-8 hero-content flex-col lg:flex-row">
            <img
              src={tea}
              className="max-w-sm rounded-lg shadow-2xl lg:ml-8" 
              />
            <div className=' bg-neutral-200 p-12 shadow-2xl text-black rounded-xl lg:mx-8 dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out'>
              <h1 className="text-3xl font-bold">Discover the soul of Chai</h1>
              <p className="pt-6">
              At Chai Pot, we believe that a cup of chai is more than just a beverage; it's a tradition, a story,
              and a moment of comfort. Chai Pot offers a serene escape where you can unwind and indulge in
              the aromatic delights of authentic Indian chai. At Chai Pot, we celebrate diversity and embrace
              the rich cultural tapestry that chai represents. It's more than a drink; it's a symbol of togetherness
              and shared moments. Join us for events that highlight music, art, and literature, where every visit
              promises a new connection or discovery.
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
            
        <HomeCarousel/>     
        <hr></hr>

        <div className=' min-h-full dark:bg-neutral-900 duration-300 transition-all ease-in-out'>
          <div className='hero-content flex-col'>
            <div>
              <h1 className='text-3xl font-bold my-8 dark:text-white duration-300 transition-all ease-in-out text-black'>Our Chai</h1>
            </div>
            <div className=' max-w-xl bg-neutral-200 p-8 rounded rounded-lg shadow-2xl mb-20 text-black dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out'>
              <p className="text-center">Crafted with care and passion, our chai blends are a fusion of premium tea leaves, aromatic
                spices, and fresh milk. Each sip envelops you in warmth and richness, transporting you to the
                bustling streets of India where chai is a way of life. Whether you prefer the classic Masala Chai
                or crave something adventurous like our Kadak Ginger Chai or Elaichi Chai, our menu is
                designed to cater to every palate.
              </p>
            </div>

          </div>
        </div>
        
        <hr></hr>


        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:`url(${chkbur})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-white">Beyond Chai</h1>
                <p className="mb-5 text-2xl text-white">
                While chai is our specialty, our menu extends beyond to offer a variety of delectable treats. From
                freshly prepared Sandwiches &amp; Burgers to savory snacks inspired by Indian street food, there's
                always something to complement your chai experience.
                
                </p>
              </div>
            </div>
        </div>
        <hr></hr>
        <div className=' min-h-full dark:bg-neutral-900 duration-300 transition-all ease-in-out'>
          <div className='hero-content flex-col'>
            <div className=' max-w-5xl  p-8  '>
              <h1 className="text-center text-black text-4xl font-bold dark:text-white duration-300 transition-all ease-in-out">
              Experience the warmth of chai. Experience Chai Pot.
              </h1>
            </div>

          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Home