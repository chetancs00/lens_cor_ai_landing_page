import Image from 'next/image'
import { FaInstagram, FaFacebook, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import MaxWidthWrapper from './MaxWidthWrapper'

const SocialButton = ({ children, label, href }) => {
    return (
      <a
        href={href}
        className="bg-blackAlpha-100 dark:bg-whiteAlpha-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
      >
        <span className="sr-only">{label}</span>
        {children}
      </a>
    )
  }
  

const ListHeader = ({ children }) => {
  return <h2 className="font-semibold text-lg mb-2">{children}</h2>
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-10 dark:text-white text-black">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6 flex flex-col text-start mx-auto sm:justify-center sm:flex sm:items-center">
            <img
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
              width={96}
              height={96}
              alt="Logo"
              className='dark:invert sm:m-auto'
            />
            <p className="text-lg">Tomorrow's Vision, Today!</p>
            <div className="flex space-x-3">
              <SocialButton label="Facebook" href="https://www.facebook.com/">
                <FaFacebook className='transition-color duration-300 hover:bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400' size={28} />
              </SocialButton>
              <SocialButton label="Instagram" href="https://www.instagram.com/">
                <FaInstagram className='transition-color duration-300 hover:bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400' size={28}/>
              </SocialButton>
              <SocialButton label="LinkedIn" href="https://www.linkedin.com/">
                <FaLinkedin className='transition-color duration-300 hover:bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400' size={28} />
              </SocialButton>
              <SocialButton label="Discord" href="https://discord.com/">
                <FaDiscord className='transition-color duration-300 hover:bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400'  size={28}/>
              </SocialButton>
              <SocialButton label="Twitter" href="https://twitter.com/">
                <FaTwitter className='transition-color duration-300 hover:bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400' size={28}/>
              </SocialButton>
            </div>
          </div>
          <div className="space-y-2 flex flex-col text-start mx-auto">
            <ListHeader>SITEMAP</ListHeader>
            <a href="#">MakeMyWeb.</a>
            <a href="#">Services</a>
            <a href="#">Products</a>
            <a href="#">Blogs</a>
            <a href="#">Life at LENS</a>
          </div>
          <div className="space-y-2 flex flex-col text-start mx-auto sm:items-center">
            <ListHeader>CONNECT</ListHeader>
            <p>+1-517-9300-792</p>
            <p>+91-9990-736-796</p>
            <p>solutions@lenscorp.ai</p>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className='bg-[#272e5c] dark:bg-[#242424]'>
        <MaxWidthWrapper className='md:ml-32 md:mr-32 bg-[#272e5c] dark:bg-[#242424]'>
      <div className='bg-[#272e5c] dark:bg-[#242424] h-60 w-full justify-between mt-20 flex text-white items-center'>
            <div>
            2023 LENS, Inc. All rights reserved.
            </div>
            <div>
            Code of conduct
                            Sustainability Goals
            </div>
      </div>
      </MaxWidthWrapper>

      </div>
    </footer>
  )
}
