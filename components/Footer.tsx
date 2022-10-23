import React, { ReactNode, useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';
import Content from '../lib/Content';
import { IoTerminal } from 'react-icons/io5';

export const SocialIcons: any = {
  twitter: <FaTwitter/>,
  fb: <FaFacebookF/>,
  insta: <FaInstagram/>
}

export type FooterData = {
  logo?: string,
  desc?: string,
  sociaLinks?: {lable: string, link: string, icon: any}[],
  menuLinks?: {lable: string, link: string}[]
}

function Footer() {
  const [footerData, setFooterData] = useState<FooterData>({} as FooterData);

  useEffect(() => {
    let tempData: FooterData = {
      desc: Content.footer.description,
      logo: Content.kennelInfo.logo,
      menuLinks: Content.menus,
    }

    const sl = Content.kennelInfo.socialLinks.map(val => {
      if(SocialIcons[val.lable]){
        return {
          lable: val.lable,
          link: val.link,
          icon: SocialIcons[val.lable]
        }
      }
    });
    tempData.sociaLinks = sl.filter(f => f !== undefined) as any;
    setFooterData(tempData)
  }, [])

  useEffect(() => {
    console.log("Footer data: ", footerData)
  }, [footerData])
  
  return (
    <div className='bg-secondary text-secondary-content py-10'>
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-center gap-3">
          {footerData.logo && <div className='bg-white inline-block'><Image src={footerData.logo} alt={'Fusion Kennel Logo'} width="150" height={49} /></div>}
          {footerData.desc && <div><p className='text-sm max-w-sm' >{footerData.desc}</p></div>}
        </div>

        <div className='flex items-center justify-center'>
          <div className="flex flex-col gap-1">
          {
            footerData.menuLinks &&
            footerData.menuLinks.map((item, index) => {
              return <div key={index}>
                <Link href={item.link}>
                  <a className='link link-primary'>{item.lable}</a>
                </Link>
              </div>
            })
          }
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          {
            footerData.sociaLinks &&
            footerData.sociaLinks.map((item, index) => {
              return <div key={index} className="inline-flex text-2xl bg-primary/10 text-primary p-3 rounded-full">
                {
                  item.icon
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer