import React, { Children, PropsWithChildren } from 'react'

export type GalleryGridItemProps = {
    image: string;
    effect?: boolean
}


function GalleryGridItem(props: PropsWithChildren<GalleryGridItemProps>) {
    const child = Children.only(props.children) as React.ReactElement;
    const childClassName = `${child.props.className || ''} bg-cover bg-no-repeat bg-center w-full h-full`;
  return (
    
        <>
        {
            props.children && React.cloneElement(child, {
                className: childClassName,
                style: {backgroundImage: `url(${props.image})`},
            })
        }
        </>
    
  )
}

export default GalleryGridItem