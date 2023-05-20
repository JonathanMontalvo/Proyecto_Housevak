import Item from "./Item"
import { toCapital } from "../helpers/toCapital";
const ItemList= ({inmuebles,titulo}) => {
    return(
        <div className="container">
            <h2 className="main-title">{titulo}</h2>
            <div className="inmuebles">
                {
                    inmuebles.map((inm)=> <Item   inmueble={inm} key={inm.id} />)
                }
            </div>
        </div>
    )
}

export default ItemList