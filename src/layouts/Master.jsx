import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Master(params) {
  return (
    <>
    <Header />
            {params.children}
            <Footer />
</> 
 )
}
