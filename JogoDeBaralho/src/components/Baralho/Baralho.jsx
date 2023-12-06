import "./Baralho.css"

export default function Baralho(props) {

    return (
        <div>
            <img className="cartaRetirada" src={props.imagem} alt={props.nomeCarta} />
        </div>
    );
}