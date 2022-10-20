import React from 'react'
import FeatureCard from '../../FeatureCard'

function Features() {

    const featureList = [
        {
            title: 'Health Guarantee',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sociis et, sit sapien semper sit cras pretium eget. Aliquet in sed vestibulum elementum magna'
        },
        {
            title: 'Pure Bloodline',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sociis et, sit sapien semper sit cras pretium eget. Aliquet in sed vestibulum elementum magna'
        },
        {
            title: 'Consult Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sociis et, sit sapien semper sit cras pretium eget. Aliquet in sed vestibulum elementum magna'
        },

    ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
            featureList.map((f, ind) => {
                return <FeatureCard {...f} key={ind} />
            })
        }
    </div>
  )
}

export default Features