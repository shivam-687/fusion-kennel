import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

function Layout(props: React.PropsWithChildren<{}>) {
  return (
    <>
    <Navigation/>
    {
        props.children
    }
    <Footer/>
    </>
  )
}

export default Layout