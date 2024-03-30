import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useStateContext } from '../context'
import { CustomButton } from './'
import { logo, menu, search, thirdweb } from '../assets'
import { navlinks } from '../constants'

const Navbar = () => {

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard')
  const [toggleDraw, setTogggleDraw] = useState(false)
  const { connect, address } = useStateContext()



  return (
    <div className='flex flex-col-reverse md:flex-row justify-between mb-[35px] gap-6'>
      <div className='flex rounded-[100px] lg:flex-1 flex-row max-w-[450px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24]'>
        <input type='text' placeholder='Search for campaigns' className=' flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none' />
        <div className=' w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
          <img src={search} alt="search" className=' w-[20px] h-[20px] object-contain' />
        </div>
      </div>
      <div className='flex-row justify-end hidden gap-4 sm:flex'>
        <CustomButton btnType="button"
          title={address ? "Create a campaign " : "Connect"}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if (address) navigate('create-campaign')
            else connect();
          }} />

        <Link to="/profile">
          <div className=' w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer '>
            <img src={thirdweb} className=' w-[60%] h-[60%] object-contain' />
          </div>
        </Link>
      </div>


      {/* small screen navigation */}
      <div className='relative flex items-center justify-between sm:hidden'>
        <div className=' w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer '>
          <img src={logo} className=' w-[60%] h-[60%] object-contain' />
        </div>

        <img src={menu} alt='menu'
          className='w-[34px] h-[34px] object-contain cursor-pointer'
          onClick={() => setTogggleDraw(!toggleDraw)} />

        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDraw ? "-translate-y-[100vh]" : "translaye-y-0 transition-all duration-700"}`}>
          <ul className='mb-4'>
            {navlinks.map((link) => (
              <li key={link.name}
                className={`flex cursor-default p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                onClick={() => {
                  setIsActive(link.name)
                  setTogggleDraw(false)
                  navigate(link.link)
                }}>

                <img src={link.imgUrl} alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`} />
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1bc071]' : 'text-[#808191]'}`}>
                  {link.name}</p>
              </li>
            ))}
          </ul>

          <div className='flex mx-4 '>
            <CustomButton btnType="button"
              title={address ? "Create a campaign " : "Connect"}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if (address) navigate('create-campaign')
                else connect();
              }} />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar