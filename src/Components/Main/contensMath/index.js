import './index.css'

export default function ContentsMath() {

    return (
        <div className="ContentsMath">
            <div>   
                <img className='aprender' src={require('../../../assests/aprender.png')}/>
            </div>
            <div>
                <h1 className='TitleContents'>QUAIS CONTEÚDOS VOCÊ VAI APRENDER</h1>
            </div>
            <div>
                <ul className='listMathContents'>
                    <li>Operações Elementares</li>
                    <li>Equações</li>
                    <li>Inequações</li>
                    <li>Trigonometria</li>
                    <li>Polinômios</li>
                    <li>Geometria Plana</li>
                    <li>Sistemas Lineares</li>
                    <li>Matrizes</li>
                    <li>Geometria Analítica</li>
                    <li>Cônicas</li>
                    <li>Funções</li>
                    <li>Limites</li>
                    <li>Derivadas</li>
                    <li>Integrais</li>
                </ul>
            </div>
        </div>
    )


}