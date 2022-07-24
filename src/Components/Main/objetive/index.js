import './index.css'

export default function Objetive() {
    return (
        <div className='Objetive'>      
            <div>
                <img src={require('../../../assests/objetivo.png')}/>
            </div>
            <div>
                <h1 className='TitleObjetive'>OBJETIVO DO CURSO</h1>
            </div>
            <div>
                <p className='TextObjetive'>O principal Objetivo desse curso é ajudar <br/>
                    pessoas que tem dificuldades em matemática <br/>
                    e necessitam da mesma para concluir seus <br/>
                    objetivos acadêmicos na área de exatas.</p>
            </div>
        </div>
    )   
}