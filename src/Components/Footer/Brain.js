import './index.css'

export default function BrainFooter(props) {

    return (
        <div className="BlockFooter">
            <div className='BoxTitleandText'>
                <div>
                    <img className="ImageBlock" src={require(`../../assests/brain.png`)} />
                </div>
                <div>
                    <h2 className="TextBlock">{props.text}</h2>
                </div>
            </div>

            <div>
                <p className="PriceBlock">de <strike>R$ 899,99</strike> por R$ 149,99</p>
            </div>
        </div>
    )
}