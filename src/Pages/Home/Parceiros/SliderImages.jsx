/* Foi adotado um padrão de 250 por 200 pixels nas logos */
import ECT from '../../../images/logo-ect-250x200.png';
import EJECT from '../../../images/logo-eject-250x200.png';
import SeaHub from '../../../images/logo-seahub-250x200.png';
import UFRN from '../../../images/logo-ufrn-250x200.png';
import Venx from '../../../images/logo-venx-250x200.png';
import Elementos from '../../../images/logo-elementos-250x200.png';

/*
    1) Instituições privadas vem ANTES da logo da UFRN, enquanto 'submarcas' dela como a eject vem DEPOIS;

    2)O 'src' entra como imagem mesmo e o 'nome' entra como texto alternativo. 

    OBS: O slider foi todo feito com CSS, então se adicionar alguma imagem: não esqueça de alterar a var '--qntitens' no arquivo Slider.css, blz? 
*/

export const SliderImages = [
{src: Elementos,
nome: 'Elementos'
},

{src: SeaHub,
nome: 'SeaHub Soluções Digitais'
},

{src: Venx,
nome: 'Venx Tecnologia'
},

{src: UFRN,
nome: 'Universidade Federal do Rio Grande do Norte'
},

{src: ECT,
nome: 'Escola de Ciências e Tecnologia'
},

{src: EJECT,
nome: 'Empresa Júnior da Escola de Ciências e Tecnologia'
}
]


