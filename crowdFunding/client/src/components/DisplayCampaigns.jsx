import React from 'react'
import { useNavigate } from 'react-router-dom'

import { loader } from '../assets'

const DisplayCampaigns = ({title, isLoading, campaigns}) => {
const navigate = useNavigate();

  return (
    <div>
        <h1 className=' font-epilogue, text-white font-semibold text-[18px] text-left'>
            {title}({campaigns.length})
        </h1>

        <div className=' flex flex-wrap, mt-[20px] gap-[26px]'>
            {isLoading && (
                <img src={loader} alt="loader" className=' w-[100px] h-[100px] object-contain' />
            )}

            {!isLoading && campaigns.length === 0 && (
                <p className=' font-epilogue font-semibold text-[14px] leadding-[30px] text-[#818183] '>
                    You have not created any campaigns yet
                </p>
            )}
        </div>
    </div>
    
  )
}

export default DisplayCampaigns