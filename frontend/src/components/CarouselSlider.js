import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'

const sliders = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/resim1.png',
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
  },
]

const CarouselSlider = () => {
    return (
      <Carousel style={{marginBottom:'80px',marginTop:'40px'}} pause='hover' className='bg-light'>
      {sliders.map((slider) => (
        <Carousel.Item>
          <Link to={`/`}>
            <Image style={{ borderRadius:'0px',height:'400px',width:'800px',padding:'0px',margin:'0px'}} src={slider.image} alt={slider.name} fluid />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    )
}

export default CarouselSlider
