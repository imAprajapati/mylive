import Image from 'next/image'
import React from 'react'

export default function Card({img, title, description}:any) {
  return (
      <div className="md:flex bg-gradient-to-r rounded-lg from-blue-500 to-purple-500  items-center justify-center border border-solid w-screen  h-auto py-6">
       <Image src={img} width={200} height={250} alt="my-live"/>
        <div className='flex px-5 pl-6 flex-col gap-4 '>
        <h1 className="text-3xl text-blue-950 font-bold mt-5 mb-1 capitalize">{title}</h1>
        <p className=" text-xl font-semibold text-blue-950 capitalize">{description}</p>
        </div>
      </div>
  )
}
