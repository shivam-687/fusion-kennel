import React from 'react'
import WhatsappBtn from '../../WhatsappBtn'
import Image from 'next/image'
import Features from './Features'

function Hero() {
  const image = '/assets/images/h1.jpg'
  return (
    <header className='min-h-[calc(100vh-60px)] flex flex-col justify-center items-center pt-14'>

      <div className='container px-5 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 mb-10'>
          <div className="flex justify-center items-center mb-10 lg:mb-0">
            <div className='flex flex-col gap-7' >
              <div className="flex flex-col ubuntu text-5xl md:text-7xl gap-3">
                <h1 className='font-[300] ubuntu'>Small Dogs,</h1>
                <h1 className='font-[700] ubuntu'>Big Dogs,</h1>
                <h1 className='font-[700] ubuntu text-primary'>All Happy Dogs!!</h1>
              </div>
              <div className="">
                <p className='leading-relaxed max-w-xl'>
                  If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies.
                </p>
              </div>

              <div className="flex gap-5">
                <button className='btn btn-secondary '>Enquiry</button>
                <WhatsappBtn className=''>Enquiry</WhatsappBtn>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='lg:max-w-lg w-full relative h-min'>
              <div className="dog-image aspect-square relative w-full overflow-hidden">
                <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
              </div>
              <div className="absolute w-full h-full -right-4 top-4 bg-gradient-to-tr from-primary to-accent -z-10 blur-sm"></div>
            </div>
          </div>
        </div>

        <Features />
      </div>


    </header>
  )
}

export default Hero