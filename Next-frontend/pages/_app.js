import Navbar from '@/Components/Navbar'
import {StateContext} from '@/Context/StateContext'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (

    <StateContext>
    
         <Navbar/>
  
 
       <Component {...pageProps} />

    </StateContext>

    
  )
  
}

