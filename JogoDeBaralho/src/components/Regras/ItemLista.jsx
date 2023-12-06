import "./ItemLista.css";

export default function ItemLista(props){
    return(
        <div className="boxCarta"> 
            <div className="nomeCarta">
                {props.Carta}
            </div>
            <img className="imagemCarta" src={props.imagem} alt={props.carta}/>
            <div className="descCarta">
                {props.valorCarta}
            </div>
        </div>
    );
}
