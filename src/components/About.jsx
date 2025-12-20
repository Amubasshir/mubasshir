import Link from 'next/link'
import React from 'react'
import AnimatedButton from './AnimatedButton'


const About = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-8 bg-amber-600'>
      <h1 className='text-4xl font-bold text-white'>About Page</h1>

      {/* নেক্সট জেএস লিংক এবং আমাদের কাস্টম বাটন */}
      <Link href="/projects">
        <AnimatedButton text="Projects" width="180px" />
      </Link>
    </div>
  )
}

export default About