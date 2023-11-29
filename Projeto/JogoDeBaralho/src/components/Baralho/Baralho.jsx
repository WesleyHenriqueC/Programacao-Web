import "./Baralho.css"
import "./Carta.jsx"

export default function Baralho(props) {
    const Baralho = [];
    Valor.forEach(valor => {
        Naipe.forEach(naipe => {
            let Carta = { CartaValor: valor, cartaNaipe: naipe };
          	Baralho.push(Carta);
        });
    });

    return (
        <div className="Baralho">
            <img src={props.imagem} alt={props.nome} />
        </div>
    );
}