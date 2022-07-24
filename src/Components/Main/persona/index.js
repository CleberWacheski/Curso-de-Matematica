import './index.css'

export default function Persona(){

    return (
        <div className='Persona'>      
            <div>
                <img src={require('../../../assests/persona.png')}/>
            </div>
            <div>
                <h1 className='TitlePersona'>OBJETIVO DO CURSO</h1>
            </div>
            <div>
                <p className='TextPersona'>
                Para qualquer pessoa interessada em aprender <br/>
                matemática, seja por necessidade de seu curso,<br/>
                desafio, aprimorar a capacidade cognitiva ou o <br/>
                simples amor a educação.
                </p>
            </div>
        </div>
    )


}