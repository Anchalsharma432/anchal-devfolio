// import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
        <a href="https://github.com/anchalsharma432" target='_blank'>
            <div className='social-icon alig-self-center'>
                    <img src="assets/github.svg" alt="github" className='w-1/2 h-1/2' />
            </div>
        </a>
        <a href="https://www.linkedin.com/in/anchal-sharma-vatts" target='_blank'>
            <div className='social-icon alig-self-center'>
                    <img src="assets/linkedin.png" alt="linkedin" className='w-1/2 h-1/2' />
            </div>
        </a>
        <a href="https://www.instagram.com/anchalsharma432" target='_blank'>
            <div className='social-icon alig-self-center'>
                    <img src="assets/instagram.svg" alt="github" className='w-1/2 h-1/2' />
            </div>
        </a>
        </div>
        <p className='text-white-500'>Copyright © 2025 Anchal Sharma</p>
    </section>
  )
}

export default Footer