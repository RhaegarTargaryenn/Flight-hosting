import React , {useEffect} from 'react';
import NavBar from './NavBar';
import home from '../Assests/home.jpg';
import FlightPriceForm from '../Components/FlightPriceForm';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {

  useEffect(() => {
    AOS.init();
  }, []);

   return (
    <div className="h-[100vh]" data-aos="fade-up">
      <div className='w-[100vw]'>
        <NavBar />
      </div>

      <div className='flex justify-center bg-center bg-cover h-full pt-32 rounded-md'
       style={{ backgroundImage: `url(${home})` }}>
          <div className='flex flex-col'>
          <p className='lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] font-bold' data-aos="fade-up">Plan Your  <span className='lg:text-[40px] md:text-[30px] sm:text-[25px] text-[23px] font-thin bg-yellow-400 h-fit rounded-sm text-red-500 md:ml-10 sm:ml-4 ml-3  tracking-widest shadow-2xl'>Dream Trip</span></p>
         
         <div className='lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] font-bold ml-32' data-aos="fade-up">
         <p>With the </p>
         </div>

          <div className='lg:text-[40px] md:text-[30px] sm:text-[25px] text-[23px] font-thin bg-yellow-400 w-fit h-fit rounded-lg shadow-2xl text-red-500 ml-16 px-7  mt-6 tracking-widest' data-aos="flip-up">
            <p>Karishma Airlines</p>
         </div>

         </div>
      </div>

      


      <div className='bg-blue-400 rounded-xl py-10'>
        <FlightPriceForm/>
      </div>

      

    </div>
  );
};

export default Main;
