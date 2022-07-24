import './index.css'
export default function BlockFooter(props) {

    return (
        <div className="BlockFooter">
            <div className='BoxTitleandText'>
                <div>
                    <img className="ImageBlock" src={require(`../../../assests/${props.img}`)} />
                </div>
                <div>
                    <h2 className="TextBlock">{props.text}</h2>
                </div>
            </div>

            <div>
                <p className="PriceBlock">{props.price}</p>
            </div>
        </div>
    )
}