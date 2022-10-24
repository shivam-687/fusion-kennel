import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import Content from '../../../lib/Content';
import FeatureCard, { FeatureCardProp } from '../../FeatureCard'

function Features() {

    const [featuresList, setFeaturesList] = useState<FeatureCardProp[]>([]);

    useEffect(() => {
      setFeaturesList(Content.featuresList);
    }, [])
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
            featuresList.map((f, ind) => {
                return <Fade key={ind} direction="up" delay={ind*200}>
                  <FeatureCard {...f} />
                </Fade>
            })
        }
    </div>
  )
}

export default Features