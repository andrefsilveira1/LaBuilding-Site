import React, { useState } from 'react'
import './Home1.css'
import GirlImg from '../../../Components/imagens/img-garota.png'
import Fundo from '../../../Components/imagens/fundo.png'
import { Button } from '../../../Components/Button'

export default function Home1() {
    return (
        <>
            <section className="section-hero">
                <div className="container-hero">
                    <div className="hero-text">
                        <h1>Rede de Inovação & Sustentabilidade</h1>
                        <p>Lidere a mudança que você quer
                            no mundo. O futuro é hoje.</p>
                        <Button size="lg" >PARTICIPE DOS EVENTOS</Button>
                    </div>
                    <div className="img-girl">
                        <img src={GirlImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

// export default function Home1() {
//     return (
//         <>
//             <section className='container'>
//                 <img src={Fundo} id='img-home' alt="" />
//                 <div id='elements-home'>
//                     <div id='div-home'>
//                         <h1 id="title-home">Rede de Inovação & Sustentabilidade</h1>
//                         <p>Lidere a mudança que você quer no mundo. O futuro é hoje.</p>
//                         {/* <button class='button-home'>PARTICIPE DOS EVENTOS</button> */}
//                         <Button size="lg">PARTICIPE DOS EVENTOS</Button>
//                     </div>
//                     <div>
//                         <img id="img-girl" src={GirlImg} alt="" />
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }



{/* <div>
                {users.map(({name, image}) => (
                    <div style={{ border: '1px solid red' }}>
                        {name}
                        <img src={image} alt="profile" />
                    </div>
                ))}


            </div> */}