import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import ContactUsForm from '../components/contact-us-cards/ContactUsForm'
import Content from '../lib/Content'
import { IoLocationSharp, IoPhonePortrait, IoMail } from 'react-icons/io5';

export type ContactUsProps = {
    address: string,
    phone: string,
    email: string,
    whatsapp: string,
    image: string
}

const ContactUs: NextPage<{ contact: ContactUsProps }> = ({ contact }) => {
    return (
        <section className='bg-primary/10 min-h-screen flex items-center'>
            <div  className=' container mx-auto px-5 py-20'>
                <div className='bg-white grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div className="flex md:col-span-2 items-center justify-center bg-center bg-cover h-80 md:h-auto backdrop-filter backdrop-blu relative" style={{ backgroundImage: `url(${contact.image})` }}>
                        <div className=" p-2 absolute w-full h-full bg-black/20 flex  justify-center items-center gap-2 text-white">
                            <div className="flex flex-col gap-2 max-w-md backdrop-blur-sm p-2 bg-white/30 border-white/20 border">
                                <div className="p-2 flex gap-2  items-center">
                                    <span className='inline-flex bg-primary/10 h-min items-center justify-center text-2xl text-primary p-2'><IoLocationSharp /></span>
                                    <h2 className='text-base'>{contact.address}</h2>
                                </div>
                                <div className="p-2 flex gap-2  items-center">
                                    <span className='inline-flex bg-primary/10 h-min items-center justify-center text-2xl text-primary p-2'><IoPhonePortrait /></span>
                                    <h2 className='text-base'>{contact.phone}</h2>
                                </div>
                                <div className="p-2 flex gap-2   items-center">
                                    <span className='inline-flex bg-primary/10 h-min items-center justify-center text-2xl text-primary p-2'><IoMail /></span>
                                    <h2 className='text-base'>{contact.email}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 md:mt-0 flex items-center'>
                        <div className="w-full"><ContactUsForm /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export function getStaticProps() {
    const contact: ContactUsProps = Content.contacts;
    return {
        props: {
            contact,
        },
    }
}

export default ContactUs