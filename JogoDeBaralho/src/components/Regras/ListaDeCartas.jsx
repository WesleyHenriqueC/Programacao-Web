import "./ListaDeCartas.css";
import Titulo from "./Titulo";
import Regras from "./Regras";
import voltarInicio from "./voltarInicio";
import ItemLista from "./ItemLista";
import BordaColorida from "../BordaColorida/BordaColorida";

export default function ListaDeCartas(){
    return(
        <div>
            <BordaColorida>
            <Titulo />
            <br/>
            <Regras />
            <br/>
            <voltarInicio/>
            <div className="lista">
                <ItemLista
                    Carta="Dois"
                    valorCarta="Valor em Jogo = 2" imagem="public\baralho\PNG-cards-1.3\2_de_paus.png" />
                <ItemLista
                    Carta="Três"
                    valorCarta="Valor em Jogo = 3" imagem="public\baralho\PNG-cards-1.3\3_de_paus.png" />
                <ItemLista
                    Carta="Quatro"
                    valorCarta="Valor em Jogo = 4" imagem="public\baralho\PNG-cards-1.3\4_de_paus.png" />
                <ItemLista
                    Carta="Cinco" 
                    valorCarta="Valor em Jogo = 5" imagem="public\baralho\PNG-cards-1.3\5_de_paus.png" />
                <ItemLista
                    Carta="Seis" 
                    valorCarta="Valor em Jogo = 6" imagem="public\baralho\PNG-cards-1.3\6_de_paus.png" />
                <ItemLista
                    Carta="Sete" 
                    valorCarta="Valor em Jogo = 7" imagem="public\baralho\PNG-cards-1.3\7_de_paus.png" />
                <ItemLista
                    Carta="Oito" 
                    valorCarta="Valor em Jogo = 8" imagem="public\baralho\PNG-cards-1.3\8_de paus.png" />
                <ItemLista
                    Carta="Nove" 
                    valorCarta="Valor em Jogo = 9" imagem="public\baralho\PNG-cards-1.3\9_de_paus.png" />
                <ItemLista
                    Carta="Dez" 
                    valorCarta="Valor em Jogo = 10" imagem="public\baralho\PNG-cards-1.3\10_de_paus.png" />
                <ItemLista
                    Carta="Ás" 
                    valorCarta="Valor em Jogo = 10" imagem="public\baralho\PNG-cards-1.3\as_de_paus.png" />
                <ItemLista
                    Carta="Rainha"
                    valorCarta="Valor em Jogo = 10" imagem="public\baralho\PNG-cards-1.3\rainha_de_paus.png" />
                <ItemLista
                    Carta="Valete" 
                    valorCarta="Valor em Jogo = 10" imagem="public\baralho\PNG-cards-1.3\valete_de_paus.png" />
                <ItemLista
                    Carta="Rei"
                    valorCarta="Valor em Jogo = 10" imagem="public\baralho\PNG-cards-1.3\rei_de_paus.png" />
            </div>
            </BordaColorida>
        </div>
    );
}