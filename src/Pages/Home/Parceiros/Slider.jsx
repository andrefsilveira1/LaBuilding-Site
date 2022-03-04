
import './Slider.css';
import {SliderImages} from './SliderImages';


function Slider(){
return(
<div className="slider">
<div className="slider-track">
    {SliderImages.map((slide, index) => {
    return (
    <div className='slide'>
        <img src={slide.src} alt={slide.nome} key={index}/>
    </div>
    )
    })}
    
    {/* Esse pedaço do código se repete pra "encher" a tela com os itens, pois no final da primeira logo na animação ainda fica meio coisado */}

    {SliderImages.map((slide, index) => {
    return (
    <div className='slide'>
        <img src={slide.src} alt={slide.nome} key={index}/> 
    </div>
    )
    })}

</div>
</div>
)

}

export default Slider;