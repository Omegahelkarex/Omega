import { Instagram } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='dark:bg-dark-gray bg-light-white w-full lg:hidden z-10 fixed bottom-0 left-0 py-5 px-5'>
        <div className='w-full max-w-lg flex mx-auto items-center justify-between px-5'>
        <Link target="_blank" href={"https://github.com/omegahelkarex"}>
          <Github />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/omega.helkarex_"}>
          <Instagram />
        </Link>
        <Link target="_blank" href={"https://x.com/omega_helkarex"}>
          <Twitter />
        </Link>
        </div>
    </div>
  )
}

export default Footer