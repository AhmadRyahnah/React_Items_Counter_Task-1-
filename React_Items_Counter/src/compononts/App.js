import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Header from './Header'
import Shop from './Shop'
import Footer from './Footer'
import '../style.css';

function App(){
    return(
        <div className="container">
            <Navbar />
            <Home />
            <Header />
            <Shop />
            <Footer />
        </div>
    )
}


export default App