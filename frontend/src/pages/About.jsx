import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import logo from '../assets/logo.jpg'

function About() {
  return (
    
    <div>
        <Navbar/>
        <div className=' bg-neutral-100 dark:bg-neutral-900 dark:text-white duration-300 transition-all ease-in-out'>
        
        <div className='pt-16'></div>
        
        <div className=' lg:p-12 p-4'>
        <div className="card lg:card-side bg-neutral-200 dark:bg-neutral-800 shadow-2xl lg:mx-14 duration-300 transition-all ease-in-out">
          <figure
          className='max-w-sm'>
            <img
              src={logo}
              alt="Album"
              className='max-w-sm' />
          </figure>
          <div className="card-body lg:ml-12 " >
            <h1 className="card-title text-3xl text-black dark:text-white duration-300 transition-all ease-in-out">Our Values.</h1>
            <div className='ml-3'>
              <div className='my-2 text-black dark:text-white duration-300 transition-all ease-in-out'>
                <h2 className='text-bold'>Quality</h2>
                <p>We use only the finest ingredients to prepare our chai and snacks, ensuring that every sip and bite is full of flavor and freshness.</p>
              </div>
              <div className='my-2 text-black dark:text-white duration-300 transition-all ease-in-out'>
                <h2 className='text-bold'>Community</h2>
                <p>We believe in supporting our local community and creating a space where people can come together to enjoy great chai and good company.</p>
              </div>
              <div className='my-2 text-black dark:text-white duration-300 transition-all ease-in-out'>
                <h2 className='text-bold'>Tradition</h2>
                <p>We honor the rich traditions of chai by staying true to authentic recipes and brewing methods.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <hr></hr>
        
         <div className='bg-neutral-200 dark:bg-neutral-800 p-10 rounded-lg shadow-2xl my-10 lg:mx-24 mx-3 duration-300 transition-all ease-in-out' >
        <h1 className='text-2xl font-bold text-black dark:text-white duration-300 transition-all ease-in-out'>Our Belief</h1>
        <p className='mt-3 mb-5 text-black dark:text-white duration-300 transition-all ease-in-out'>
          At Chai Pot, we believe in the power of chai to create moments of warmth, connection, and
          delight. Our journey began with a simple love for this aromatic, spiced tea that is deeply rooted
          in Indian culture and tradition.
        </p>
        </div> 
        <hr></hr>
        <div className='bg-neutral-200 dark:bg-neutral-800 p-8 rounded-lg shadow-2xl my-10 lg:mx-24 mx-3 duration-300 transition-all ease-in-out'>
        <h1 className='text-2xl font-bold text-black dark:text-white duration-300 transition-all ease-in-out'>Our Inspiration</h1>
        <p className='mt-3 mb-5 text-black dark:text-white duration-300 transition-all ease-in-out'>
          Inspired by the bustling chai stalls found across India, we set out to bring this authentic
          experience to you. Each cup of chai we serve is a tribute to the rich history and flavors that have
          made chai a beloved beverage worldwide.
        </p>
        </div>
        <hr></hr>

        <div className='bg-neutral-200 dark:bg-neutral-800 p-8 rounded-lg shadow-2xl my-10 lg:mx-24 mx-3 duration-300 transition-all ease-in-out'>
        <h1 className='text-2xl font-bold text-black dark:text-white duration-300 transition-all ease-in-out'>Crafting Excellence</h1>
        <p className='mt-3 mb-5 text-black dark:text-white duration-300 transition-all ease-in-out'>
          Every aspect of our chai-making process is meticulously curated to ensure the perfect balance of
          spices and tea. We source the finest ingredients, from premium tea leaves to hand-selected
          spices, to create a blend that captures the essence of chai.
        </p>
        </div>
        <hr></hr>

        <div className='bg-neutral-200 dark:bg-neutral-800 p-8 rounded-lg shadow-2xl my-10 lg:mx-24 mx-3 duration-300 transition-all ease-in-out'>
        <h1 className='text-2xl font-bold text-black dark:text-white duration-300 transition-all ease-in-out'>Community Wellbeing</h1>
        <p className='mt-3 mb-5 text-black dark:text-white duration-300 transition-all ease-in-out'>
          Beyond serving exceptional chai, Chai Pot is a place where friendships are forged and stories are
          shared. Our cozy ambiance and welcoming staff make it the perfect spot to relax, catch up with
          friends, or simply unwind with a good book.
        </p>
        </div>
        <hr></hr>

        <div className='bg-neutral-200 dark:bg-neutral-800 p-8 rounded-lg shadow-2xl my-10 lg:mx-24 mx-3 duration-300 transition-all ease-in-out'>
        <h1 className='text-2xl font-bold text-black dark:text-white duration-300 transition-all ease-in-out'>Our Promise</h1>
        <p className='mt-3 mb-5 text-black dark:text-white duration-300 transition-all ease-in-out'>
          Whether you&#39;re a chai aficionado or new to this delightful brew, we invite you to join us on a
          journey of taste and tradition. Each sip of chai at Chai Pot is a testament to our commitment to
          quality, authenticity, and creating memorable experiences for our cherished guests.
          </p>
          </div>

          <div className=' min-h-full'>
          <div className='hero-content flex-col'>
            <div className=' max-w-5xl  p-8  '>
              <h1 className="text-center text-4xl font-bold text-black dark:text-white duration-300 transition-all ease-in-out">
              Over 100000+ cups of chai sold and counting!
              </h1>
            </div>

          </div>
        </div>
        
  
        </div> 
        <Footer/>
    </div>
  )
}

export default About