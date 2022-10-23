import React, { useEffect, useState } from 'react'
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
                return <FeatureCard {...f} key={ind} />
            })
        }
    </div>
  )
}

export default Features