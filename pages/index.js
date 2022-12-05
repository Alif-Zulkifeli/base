import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageComponent from './../components/ImageComponent';
import { useState, useEffect } from "react";

export default function Home() {
  const [timer, setTimer] = useState(new Date());
	let i = 1;
	useEffect(() => {
		const interval = setInterval(() => {
			let seconds = Math.floor((new Date().getTime() - 1509235200000) / 1000);
			var d = Math.floor(seconds / (3600 * 24));
			var h = Math.floor((seconds % (3600 * 24)) / 3600);
			var m = Math.floor((seconds % 3600) / 60);
			var s = Math.floor(seconds % 60);

			var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
			var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
			var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
			var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
			let so = { dDisplay, hDisplay, mDisplay, sDisplay };
			setTimer(so);
		}, 1000);

		// This is important, you must clear your interval when component unmounts
		return () => clearInterval(interval);
	}, []);

  return (

    <div className=' min-w-screen overflow-hidden ' >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      </Head>

      <div className=" bg-cover bg-center min-h-screen bg-fixed " >
        <div className='text-center font-curve text-6xl pt-16' >

          <p data-aos="fade-right" data-aos-duration="1000"   >Romeo</p>
          <p data-aos="fade-left" data-aos-duration="1000"   >&</p>
          <p data-aos="fade-left" data-aos-duration="1000"   >Juliet</p>
        </div>

<div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
      
      <Image
      className='rounded-xl'
        alt="Vercel logo"
        src="/img/002.jpg"
        width={1000}
        height={1000}
        style={{
          maxWidth: '90%',
          height: 'auto',
        }}
      />
</div>
        

        <div className="text-center font-curve pt-10 text-gray-800 text-xl px-4 "  data-aos="fade-up" data-aos-duration="1000"  >
        I know that I tell you this all the time,
        <br/>
        but you are the most beautiful person
        <br/>
        in the world to me. 💕
        <br/>
        <br/>
        You really are the greatest, most supportive and caring fiancé anyone could ask for, and I am very lucky to have you in my life.💕
        <br/>
        You could’ve chosen anybody to share
        <br/>
        your life with and I am so thankful that
        <br/>
        you chose me! 🥰
        <br/>
        <br/>
        I will do whatever I can to make sure
        <br/>
        that you feel as loved as you possibly could  
        <br/>
        my dear! You mean everything to me!❤️
        <br/>
        I Love You ❤️
        </div>

        <div className='grid grid-cols-2 gap-4' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/003.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/002.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/001.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/007.jpg" />
        </div>
        </div>


        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/005.jpg" />
        </div>

        <h1 className="text-center font-curve  text-gray-800 text-4xl pt-10 font-medium " data-aos="fade-up" data-aos-duration="1500"  >
         Together for,
        </h1>
        <div class="text-center font-curve text-xl " data-aos="fade-up" data-aos-duration="1500" >
							{timer.dDisplay} 
							<span class="">{timer.hDisplay}</span> <br />
							<span class="">
								{timer.mDisplay}

							</span>{" "}
							{timer.sDisplay}
				
						</div>

        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/002.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/006.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/004.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/005.jpg" />
        </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/003.jpg" />
        </div>

    



        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/004.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/005.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/002.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/006.jpg" />
        </div>
        </div>


        <div className="text-center font-curve pt-10 text-gray-800 text-xl px-4 "  data-aos="fade-up" data-aos-duration="1000"  >
        I know that I tell you this all the time,
        <br/>
        but you are the most beautiful person
        <br/>
        in the world to me. 💕
        <br/>
        <br/>
        You really are the greatest, most supportive and caring fiancé anyone could ask for, and I am very lucky to have you in my life.💕
        <br/>
    
        </div>
     


        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/002.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-3' >
        <ImageComponent src="/img/006.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/004.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/005.jpg" />
        </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/003.jpg" />
        </div>

    



        <div className='grid grid-cols-2 gap-4 pb-10' >
        <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/004.jpg" />
        </div>  <div data-aos="fade-left" data-aos-duration="1000"   className=' grid place-items-center pt-10' >
        <ImageComponent src="/img/005.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/002.jpg" />
        </div>  <div data-aos="fade-right" data-aos-duration="1000"   className=' grid place-items-center' >
        <ImageComponent src="/img/006.jpg" />
        </div>
        </div>


        
      </div>
    </div>

  )
}


