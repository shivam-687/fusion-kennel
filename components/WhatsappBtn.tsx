import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'

function WhatsappBtn(props: {className: string, iconClassName: string, link?: string} & any) {
  return (
    <a href={props.link || '#'} {...props} className={`btn bg-whatsapp hover:bg-whatsapp-focus transition text-whatsapp-content gap-2 ${props.className}`} >
        <span className={`text-3xl`}><FaWhatsapp/></span>
        Send Whatsapp
    </a>
  )
}

export default WhatsappBtn