import React from 'react'
import Link  from 'next/navigation'
import Image from 'next/image'

export default function page() {
  return (
    <main className='mt-12'>
      <div className='w-full h-auto'>
        <h6 className='text-center text-blue-950 text-xl mt-2 font-semibold'>Contact Us</h6>
        <h2 className='text-center font-bold text-4xl text-black mt-2'>We're here to help!</h2>
        <div className='px-3 md:flex items-center justify-center mt-7  gap-20'>
          <div className='flex flex-col gap-5 bg-blue-600 p-12 shadow-lg text-white rounded-md'>
            <p className='text-center font-semibold font-serif'>Customer Supports</p>
            <span className='text-center font-medium font-serif tracking-wider'>9999999999</span>
            <span className='text-center font-medium font-mono'>myliveofficals@gmail.com</span>
          </div>
          <div className='flex flex-col gap-5 p-12  rounded-md shadow-lg'>
          <p className='text-center font-semibold'>Customer Supports</p>
            <span className='text-center font-medium font-mono'>9999999999</span>
            <span className='text-center font-medium font-mono'>myliveoffical@gmail.com</span>
          </div>
        </div>
      </div>
      <div className='md:flex items-center justify-center gap-16 p-12'>
        <div  className='md:w-[50%] flex items-center justify-end'>
          <Image src='/images/contact.svg' width={500} height={100} alt='my-live'/>
        </div>
        <div className='md:w-[50%]'>
          <h1 className='font-bold text-3xl text-black'>Let's talk</h1>
          <p className='mt-2'>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly</p>
          <form action="" className='mt-8'>
            <div className='flex flex-col mt-3'>
            <label htmlFor="">Your Name*</label>
            <input className='bg-gray-50 h-10 border border-solid border-gray-300 rounded-md' type="text" />
            </div>
            <div className='flex flex-col mt-5'>
            <label htmlFor="">Your Email*</label>
            <input className='bg-gray-50 h-10 border border-solid border-gray-300 rounded-md' type="email" />
            </div>
            <div className='flex flex-col mt-5'>
            <label htmlFor="">Message*</label>
            <textarea className='bg-gray-50  border border-solid border-gray-300 rounded-md' name="" id="" cols={20} rows={10}></textarea>
            </div>
            <div className='mt-5'>
            <button className='bg-blue-950 text-white px-5 w-full py-2 rounded-md'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
