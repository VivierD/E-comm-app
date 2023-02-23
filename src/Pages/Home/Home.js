import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
        <h1 className='home-title'>
            Bienvenue au <span>Shop</span>
        </h1>
        <p>
            Sint magna est reprehenderit velit cillum. Elit excepteur eiusmod ut quis aliquip voluptate eu reprehenderit esse nisi proident nostrud proident. Eiusmod 
            ex ea fugiat deserunt. Consequat id excepteur cupidatat enim velit. Sit reprehenderit commodo ullamco proident ullamco exercitation esse. Cillum exercitation 
            consequat sit excepteur cupidatat labore adipisicing et minim ea sunt est.
        </p>
        <img src={imgHomeShop} alt = "accueil" />
    </div>
  )
}
