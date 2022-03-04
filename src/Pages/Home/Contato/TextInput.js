import { useField } from 'formik'

/* O css não é importado aqui, mas sim no ContatoEmail.js, pois mais de um componente usa as mesmas classes lá */

/* 
=> o label && (...) ali é pra caso não seja passado um label pelos props, ainda seja possível renderizar, deixando mais flexível
=> const id = blablabla é pq como na maioria dos casos o id acaba sendo igual ao name, caso tu só passe o name fica de boa
*/

export function TextInput({label, ...props}){
    const [field, meta] = useField(props);
    const id = props.id || props.name;

    return(
<>

    {label && (
    <label htmlFor={id} className="label-contato"> {label} </label>
)}

    <input
        id={id}
        className="input-contato"
        {...field} {...props}
    />
        {meta.error && meta.touched && (
        <div className="error">{meta.error.toString()}</div>
    )}
        {(!meta.error || !meta.touched) && (
        <div className="sucess"> </div>
    )}



</>

    )
}