import React, { PropsWithChildren } from 'react'
import { Fade } from 'react-awesome-reveal'

function SectionTitle(props: PropsWithChildren<{}>) {
  return (
    <div className='overflow-hidden'>
      <Fade direction='up' triggerOnce>
        <h2 className='text-3xl md:text-4xl ubuntu font-bold'>{props.children}</h2>
      </Fade>
    </div>
  )
}

export default SectionTitle