import Image from 'next/image';
import React from 'react'

const CustomIcon = () => {
  return (
    <div>
        <Image alt='IndusAI' src='/logo.png' height={50} width={50} />
    </div>
  )
}

export default CustomIcon;
