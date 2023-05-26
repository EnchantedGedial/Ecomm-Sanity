import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import {StateContext} from '@/Context/StateContext'
// import {StateContext} from '@/Context/StateContext'
import '@/styles/globals.css'
// import { ToastContainer, toast } from 'react-toastify';


export default function App({ Component, pageProps }) {
  return (

    <StateContext>
    
         <Navbar/>
  
 
       <Component {...pageProps} />
       <Footer/>

    </StateContext>

    
  )
  
}

