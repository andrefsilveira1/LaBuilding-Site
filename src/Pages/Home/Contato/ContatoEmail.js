import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

import { TextArea } from './TextArea'
import { TextInput } from './TextInput'

import './ContatoEmail.css'

function ContatoEmail (){

/*
    => .max(X,'Y')   |  No X insere o valor máximo e no Y você coloca a mensagem que aparece no erro
    =>  Num geral, tudo que tem entre aspas, é o que aparece quando dá erro.
*/

    const validate = Yup.object({
nome: Yup.string() 
    .min(5, 'Deve possuir entre 5 e 100 caracteres!')
    .max(100, 'Deve possuir entre 5 e 100 caracteres!')
    .required('Insira algo'),

email: Yup.string()
    .email('Email inválido')
    .required('Insira algo'),

assunto: Yup.string()
    .min(5, 'Deve possuir entre 5 e 100 caracteres!')
    .max(100, 'Deve possuir entre 5 e 100 caracteres!')
    .required('Insira algo'),

mensagem: Yup.string()
    .min(10, 'Digite 10 ou mais caracteres')
    .required('Insira algo')
})


return(
<div className="caixa-contato">
    <div className="caixa-form">

<Formik
initialValues={{
nome: '',
email:'',
assunto:'',
mensagem:''
}}

validationSchema={validate}
>

<Form className="form-contato">

<TextInput 
label="Nome e Sobrenome"
name="nome"
type="text"
placeholder="Nome e Sobrenome"/>

<TextInput 
label='E-mail' 
name='email' 
type='email' 
placeholder='Digite seu email'/>

<TextInput 
label='Assunto' 
name='assunto' 
type='text' 
placeholder='Digite o assunto'/>

<TextArea
label='Mensagem'
placeholder="Digite a mensagem"
name="mensagem"
/>

<button className="botao-enviar" type="submit"> Enviar </button>

</Form>
</Formik>

</div>
</div>
)

}

export default ContatoEmail;