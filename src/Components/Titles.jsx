import './Titles.css'


function Titles (props){

return(

<section className='geral'>
    <h1 className='title'>{props.title}</h1> 

    <span className='segunda-parte'>
        <h1 className='title-bold'>{props.titlebold}</h1>
        <div className='barrinha'></div>
    </span>

</section>
)
}

export default Titles
        
