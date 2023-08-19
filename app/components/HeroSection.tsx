import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section
    className={`relative md:flex items-center  justify-between w-full  md:h-[110vh]`}>
      <div className='md:w-1/2 md:pl-12 px-12  flex flex-col items-start'>
        <h1 className='font-extrabold from-neutral-800 text-9xl text-orange-400'>My Live</h1>
       <h4 className='mt-7 font-semibold text-5xl'>India's best 24x7 live streaming mobile application</h4>
      <p className='mt-5 bottom-14 text-black text-xl'>Discover talented broadcasters, watch live streams, and interact with people all around the world. Make new friends and video-call or chat with them. We are thriving and striving to create a safe digital platform for all our users and the broadcasting community. Become a part of the StreamKar family and enjoy your time with us!</p>
       
      </div>
      <div
     
      className='md:w-1/2 overflow-hidden relative'>
        <Image className='absolute bottom-10
        hidden md:block
        ' src='/images/Donalive@Profile.png' width={300} height={300}  alt='my live'/>
        <img 
         style={{
          borderRadius: '30% 70% 34% 66% / 30% 18% 82% 70%',
        }}
        className='bg-cover bg-center mix-blend-darken'
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/150d7767840941.5b47bdfa76c00.jpg" alt="" />
      </div>
    </section>
  )
}
