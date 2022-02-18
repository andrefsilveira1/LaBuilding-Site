import React, { useState } from 'react'
import '../Form/Form.css'
import imgLogo from '../../Components/imagens/lb-logo-cor 1.png'
import { Button } from '../../Components/Button'


export default function Form () {
    return (
        <>
            <section className='backgroundCentral'>
                <div className='backgroundForm'>
                    <div className='form-space'> 
                        <div className='top-form'>
                            <div className='img-logo'>
                                <img src={imgLogo} alt="" />
                            </div>
                            <div className='text-top-form'>
                                <h2>Conectar pessoas e desenvolver ideias de impacto social através da tecnologia</h2>
                            </div>
                            <hr />
                        </div>
                        <div className='form-bottom'>
                            <div className='form-items'>
                                <h1>Cadastro-online</h1>
                                <div className='form-style'>
                                    <form action="">
                                        <div className='form-style-campos'>
                                            <div className="form-style-text">
                                                <h4>Nome Completo</h4>
                                            </div>
                                            <input type="text" name="" id="" placeholder=" Digite seu nome completo"/>
                                        </div>
                                        <div className='form-style-campos'>
                                            <div className="form-style-text">
                                                <h4>E-mail</h4>
                                            </div>
                                            <input type="text" name="" id="" placeholder=" Digite seu email"/>
                                        </div>
                                        <div className='form-style-campos'>
                                            <div className="form-style-text">
                                                <h4>Linkedin</h4>
                                            </div>
                                            <input type="text" name="" id="" placeholder=" Digite seu link"/>
                                        </div>
                                        <div className='form-style-campos'>
                                            <div className="form-style-text">
                                                <h4>Instagram</h4>
                                            </div>
                                            <input type="text" name="" id="" placeholder=" Digite seu @"/>
                                        </div>
                                        <div className='form-style-campos'>
                                            <div className="form-style-text">
                                                <h4>Celular</h4>
                                            </div>
                                            <input type="text" name="" id="" placeholder=" Número"/>
                                        </div>
                                       
                                                                                                               
                                    </form>
                                </div>   
                            </div>
                            <div className="form-style-campos-button">
                                        <div className='form-style-button' >
                                            <Button size='md' >ENVIAR</Button>
                                           
                                        </div>
                                        <div className="form-style-button" >
                                            <Button size='md' outline = {true} >CANCELAR</Button>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
        </>
    )
}