import "./Titulo.css";
import BotaoRegras from "../botaoRegras/botaoRegras";

export default function Titulo(){
    return(
        <header className="box">
            <h1 className="texto">Jogo de Baralho 21 - </h1>
            <BotaoRegras/>
        </header>
    );
}