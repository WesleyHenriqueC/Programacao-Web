import "./Jogo.css";
import React, { useState } from 'react';
import Baralho from "../Baralho/Baralho";
import { Naipe, Valor } from "../Carta/Carta";

export default function Jogo(props) {
    const [valorEmMaos1, setValoremMaos1] = useState(0);
    const [valorEmMaos2, setValoremMaos2] = useState(0);
    const [jogador, setJogador] = useState(1);

    let rodada = 0;
    const Baraio = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    Valor.forEach(valor => {
        Naipe.forEach(naipe => {
            let cartas = { cartaValor: valor, cartaNaipe: naipe };
            Baraio.push(cartas);
        });
    });

    const BaraioEmbaralhado = shuffleArray(Baraio);

    function pegarCarta() {
        const cartaAtual = BaraioEmbaralhado[rodada];
        rodada++;

        if (jogador === 1) {
            const novoValor1 = valorEmMaos1 + valorDaCarta(cartaAtual);
            setValoremMaos1(novoValor1);
            setJogador(2);
        } else {
            const novoValor2 = valorEmMaos2 + valorDaCarta(cartaAtual);
            setValoremMaos2(novoValor2);
            setJogador(1);
        }

    }

    function valorDaCarta(carta) {
        switch (carta.cartaValor) {
            case 'As':
                return 1;
            case 'Dois':
                return 2;
            case 'Tres':
                return 3;
            case 'Quatro':
                return 4;
            case 'Cinco':
                return 5;
            case 'Seis':
                return 6;
            case 'Sete':
                return 7;
            case 'Oito':
                return 8;
            case 'Nove':
                return 9;
            case 'Dez':
            case 'Valete':
            case 'Dama':
            case 'Reis':
                return 10;
            default:
                return 0;
        }
    }

    function naoPegarMaisCartas() {
        if (jogador === 1) {
            setJogador(2);
        } else {
            setJogador(1);
        }
    }

    function paradaTotal() {
        if (valorEmMaos1 > 21 && valorEmMaos2 > 21) {
            alert('Ambos os jogadores perderam!');
            return;
        } else if (valorEmMaos1 > 21) {
            alert('Jogador 1 perdeu!');
            return;
        } else if (valorEmMaos2 > 21) {
            alert('Jogador 2 perdeu!');
            return;
        }

        if (valorEmMaos1 < valorEmMaos2) {
            alert('Jogador 2 venceu!');
        } else if (valorEmMaos2 < valorEmMaos1) {
            alert('Jogador 1 venceu!');
        } else {
            alert('Empate!');
        }
    }

    return (
        <div className="boxJogo">
            <div className="areajogador1">
                <h1>Valor em maos:</h1>
                <h1>{valorEmMaos1}</h1>
            </div>
            <div>
                <Baralho imagem="/imagens/Baralho.png" nomeCarta="baralho Completo" />
            </div>
            <div className="areaJogador2">
                <h1>Valor em maos:</h1>
                <h1>{valorEmMaos2}</h1>
            </div>
            <h2>Clique no Botao Abaixo para retirar uma Carta ou para nao pegar mais Cartas</h2>
            <div className="areaBotao">
                <button onClick={pegarCarta}>
                    Retirar uma Carta
                </button>
                <button onClick={naoPegarMaisCartas}>
                    Passar a vez
                </button>
                <button onClick={paradaTotal}>
                    Finalizar Jogo
                </button>
            </div>
        </div>
    );
}