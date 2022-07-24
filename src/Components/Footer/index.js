import BlockFooter from './BlocksFooter'
import BrainFooter from './Brain'
import './index.css'

export default function Footer() {

    return (
        <div className='Footer'>
            <div className='subscription'>
                <div>
                    <h1 className='TitleSub'>
                        PRIORIZE <br/> SUA CARREIRA
                    </h1>
                </div>
                <div>
                    <button className='ButtonSub'> <a href='https://pay.hotmart.com/A66293133V'> INSCREVA-SE  </a></button>
                </div>
            </div>

            <div className='BlocksComparation'>
                 <BlockFooter img={'pizza.png'} text={"COMBO DE PIZZA DOMINO'S"} price={'R$ 61,00'}/>
                 <BlockFooter img={'carne.png'} text={'CHURRASCO PRA ALEGRAR A FAMÍLIA'} price={'R$ 150,00'}/>
                 <BlockFooter img={'chopp.png'} text={'CHOPP DO FIM DE SEMANA'} price={'R$ 100,00'}/>
                 <BrainFooter text={'INVESTIR NO SEU FUTURO'}/>
            </div>
        </div>
    )
}


