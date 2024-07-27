import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';

function HomeCarousel() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div className='dark:bg-neutral-900 dark:text-white duration-300 transition-all ease-in-out text-black'>
        <div className=' pt-16  mb-8'><h1 className="text-4xl font-bold text-center">Whats New!</h1>
        </div>
        <div className=''>
        <Carousel responsive={responsive} 
        infinite={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            <div><Card title="#Coolers" url="https://www.youtube.com/embed/6xM-3nDiCPg?si=snX5G6RqWARpJp95"/></div>
            <div><Card title="#MonsoonDelghts" url="https://www.youtube.com/embed/6xM-3nDiCPg?si=snX5G6RqWARpJp95"/></div>
            <div><Card title="#Frappe" url="https://www.youtube.com/embed/zCvTRwW-b6s?si=rmQsJukQtqpKXqQy"/></div>
            <div><Card title="#KadakChai" url="https://www.youtube.com/embed/6xM-3nDiCPg?si=snX5G6RqWARpJp95"/></div>
            
        </Carousel>
        </div>
    </div>
  )
}

export default HomeCarousel
