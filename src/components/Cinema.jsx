import { useState } from 'react'
import '../css/estilo.css'
import imgPele from '../assets/pele.jpg'
import imgHomemAranha from '../assets/Aranha.jpg'
import imgMario from '../assets/mario.jpg'
import imgJiujitsu from '../assets/Jiujitsu.jpg'
import imgPaz from '../assets/paz.jpg'

//Array de objetos contendo o estado inicial do catálogo
const catalogo = [
    { id: 1, nome: "Filme do Pelé", preco: 30.00, disponivel: true, quantidade: 0, imagem: imgPele },
    { id: 2, nome: "Homem aranha em busca de uma casa", preco: 30.00, disponivel: true, quantidade: 0, imagem: imgHomemAranha },
    { id: 3, nome: "Super Mario 7", preco: 30.00, disponivel: true, quantidade: 0, imagem: imgMario },
    { id: 4, nome: "O clube da paz", preco: 30.00, disponivel: true, quantidade: 0, imagem: imgPaz },
    { id: 5, nome: "Jiu Jitsu Kid", preco: 30.00, disponivel: true, quantidade: 0, imagem: imgJiujitsu },
];
const Cinema = () => {

    // HOOK-useState-Manipula o estado da variável
    //Estados para gerenciar a lista de items
    const [items, setItems] = useState(catalogo);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);



    const alterarQuantidade = (id, valor) => {

        setItems(prev =>

            prev.map(item =>

                item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + valor) } : item
            )
        )
    }


const produtosDisponiveis = items.filter(item => item.disponivel);
const carrinho = items.filter(item => item.quantidade > 0);


const subtotal = carrinho.reduce((ac, item) => ac + item.preco * item.quantidade, 0);
const total = subtotal > 0 ? subtotal : 0;

const confirmarCompra = () => {
    setEnviar(true);
    setStatus("Estamos Processando sua compra...");
    setTimeout(() => {
        setStatus("Verificando lugares...")
        setEnviar(false)
    }, 5000);
    setTimeout(() => {
        setStatus("Sua Compra foi registrada com sucesso!")
        setEnviar(false)
    }, 10000)
}

    return (
        <>
            <div className="container">
                <h2>Catálogo de Filmes</h2>
                {produtosDisponiveis.map(produto => (
                    <div key={produto.id} className="item-catalogo">
                        <img src={produto.imagem} alt={produto.nome} className="item-imagem" />
                        <span>{produto.nome}(R$ {produto.preco.toFixed(2)})</span>
                        <div className="item-controles">
                            <button onClick={() => alterarQuantidade(produto.id, -1)} className="btn-qtn">-</button>
                            <span>{produto.quantidade}</span>
                            <button onClick={() => alterarQuantidade(produto.id, +1)} className="btn-qtn">+</button>
                        </div>
                    </div>
                ))}

                <hr className="linha" />
                <h3>Resumo da Compra</h3>
                {carrinho.length === 0 ? (
                    <p>Seu Carrinho está Vazio</p>
                ) : (
                    <>

                        <ul className="resum0-lista">
                            {carrinho.map(item => (
                                <li key={item.id}>
                                    Ingressos {item.quantidade} x {item.nome} R$ {(item.preco * item.quantidade).toFixed(2)}

                                </li>
                            ))}

                        </ul>
                        <p>Subtotal:R${subtotal.toFixed(2)}</p>
                        <strong className="total">Total a pagar: R${total.toFixed(2)}</strong>
                        <button className="btn-confirmar" onClick={confirmarCompra} disabled={enviar}>
                            {enviar ? "Enviando...." : "Confirmar Compra"}

                        </button>
                    </>
                )}
                {status && (
                    <div className="alerta-status">
                        <strong>Alerta:</strong>{status}
                    </div>
                )}

            </div>

        </>
    )
}


export default Cinema



