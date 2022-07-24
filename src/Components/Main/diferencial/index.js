import './index.css'

export default function Diferencial() {

    return (
        <div className="Diferencial">
            <div>   
                 <img className='book' src={require('../../../assests/livro.png')}/> 
            </div>
            <div>
                <h1 className='TitleDiferencial'>QUAL O DIFERENCIAL DESSE CURSO?</h1>
            </div>
            <div>
                <ul className='listDiferencial'>
                    <li>Vídeo aulas sobre o conteúdo direto ao ponto sem enrolação</li>
                    <li>Listas de exercícios elaboradas de forma lógica</li>
                    <li>2 Anos de estudo em apenas 15 Aulas.</li>
                    <li>Preço totalmente simbólico, visto o valor real dele</li>
                </ul>
            </div>
        </div>
    )


}