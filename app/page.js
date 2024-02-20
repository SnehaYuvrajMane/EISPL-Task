import Image from "next/image";
import Navbar from '@/app/components/navbar/Navbar'
import Main from '@/app/components/main/Main'
import Faq from "./components/faq/Faq";

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-b from-cyan-100 to-white-300 h-100vh  ">
    <Navbar/>
    <Main/>
    <Faq/>
 

    </div>

 
   
    
    
        
    </>
  );
}
