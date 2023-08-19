import React from 'react'
import Card from './Card'

export default function Features() {
  return (
    <div className='px-32'>
      <h1 className="text-3xl text-center font-bold mt-10 mb-1">Features</h1>
      {/* make under line */}
      <div className="w-20 h-1 bg-black mx-auto mb-10"></div>
      <div className='flex flex-wrap gap-14'>
      <Card img='/images/Donalive@videolive.png' title='Video Party Room'
      description='Invite your friends to join your video party room and enjoy the fun together!'
      />
      <Card img='/images/DonaliveAudioParty.png' title='Audio Party Room'
      description='Invite up to 8 guests to enjoy Voice Chat experience'
      />
      <Card img='/images/DonaliveStreamlive.png' title='New Amazing games'
      description='play list of amazing games and win unlimited diamonds'
      />
      <Card img='/images/Donalive@Profile.png' title='Shine in spotlight star'
      description='Place where you can showcase your talent and win the audience hearts'
      />
      </div>
    </div>
  )
}
