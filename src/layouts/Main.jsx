import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
// import Navbar2 from '../components/shared/Navbar2'

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar2 /> */}
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main