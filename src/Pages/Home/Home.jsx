import React from 'react';
import About from './About/About';
import Abstract from './Abstract/Abstract';
import Contact from './Contact/Contact';
import Home1 from './Home-hero/Home1'

export default function Home(){
    //Aqui deve ser colocado todos os componentes da página Home.
    return(
        <>
            <Home1/>
            <About/>
            <Abstract/>
            <Contact/>
            <h3>Footer</h3>
        </>
    )

}