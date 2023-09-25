'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
      <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => { 
            typewriter
                .typeString("🤖 Supercharged Productivity!! 🤖")
                .pauseFor(2500)
                .start()
          }}
      />
  )
}

export default TypewriterTitle