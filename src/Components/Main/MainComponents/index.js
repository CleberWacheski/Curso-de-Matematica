import ContentsMath from "../contensMath";
import Diferencial from "../diferencial";
import Objetive from "../objetive";
import Persona from "../persona";
import './index.css'

export default function MainContents () {

    return (
        <div className="MainContents">
            <div className="BlockMainOne">
                <ContentsMath/>
                <Diferencial/>
            </div>
            <div className="BlockMainTwo">
                <Objetive/>
                <Persona/>
            </div>
            
        </div>
    )

}