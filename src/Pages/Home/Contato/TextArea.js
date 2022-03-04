import {ErrorMessage, useField } from 'formik'

/* O css não é importado aqui, mas sim no ContatoEmail.js, pois mais de um componente usa as mesmas classes lá */

/* 
=> o label && (...) ali é pra caso não seja passado um label pelos props, ainda seja possível renderizar, deixando mais flexível
=> const id = blablabla é pq como na maioria dos casos o id acaba sendo igual ao name, caso tu só passe o name fica de boa
*/

export function TextArea({label, ...props}){
    const [field, meta] = useField(props);
    const id = props.id || props.name;

    return(
<>

    {label && (
    <label htmlFor={id} className="label-contato"> {label} </label>
)}
    
    <textarea
        id={id}
        className="input-contato"
        {...field} {...props}
        > </textarea>

    {meta.error && meta.touched && (
        <span className="error">{meta.error.toString()}</span>
    )}

        {(!meta.error || !meta.touched) && (
        <div className="sucess"> </div>
    )}


</>

    )
}