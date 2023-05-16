import Navbar from '@/Components/Navbar'
import StateContext from '@/Context/StateContext'
import '@/styles/globals.css'
// import {Toaster} from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
    
    
    <Navbar/>
    <StateContext>
      {/* <Toaster/> */}
    <Component {...pageProps} />

    </StateContext>

    </>
  )
  
}
