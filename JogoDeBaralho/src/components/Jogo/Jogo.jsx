import "./Jogo.css";
import Baralho from "../Baralho/Baralho";

export default function Jogo(props) {
    return (
        <div className="boxJogo">
            <div className="areajogador1">
                <h1>Valor em maos:</h1>
                <h1>0</h1>
            </div>
            <div>
                <Baralho imagem="/imagens/Baralho.png" nomeCarta="baralho Completo"/>
            </div>
            <div className="areaJogador2">
                <h1>Valor em maos:</h1>
                <h1>0</h1>
            </div>
            <h2>Clique no Botao Abaixo para retirar uma Carta ou para nao pegar mais Cartas</h2>
            <div className="areaBotao">
                <button className="botaoRetirarCarta">
                    Retirar uma Carta
                </button>
                <button >
                    Nao pegar mais cartas
                </button>
            </div>
        </div>
    );
}