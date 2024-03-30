import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages"
import { Sidebar, Navbar } from './components';
import { createCampaign } from './assets';

const App = () => {
  return (
    <div className= " text-white relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className='relative hidden mr-10 sm:flex'>
        <Sidebar />
      </div>

      <div className=' flex-1 max-sm:w-full max-w-[1200px] mx-auto sm:pr-5'>
        <Navbar />

        <Routes>
          <Route path ="/" element={<Home />}  />
          <Route path='/create-campaign' element={<CreateCampaign />} />
          <Route path='/profle' element={<Profile />} />
          <Route path='/campaign-detals/:id' element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
 )
}

export default App