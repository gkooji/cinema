import { useState } from 'react'
import '../css/estilo.css'

//Array de objetos contendo o estado inicial do catálogo
const catalogo = [
    { id: 1, nome: "Filme do Pelé", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 2, nome: "Homem aranha em busca de uma casa", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Super Mario 7", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 4, nome: "Bob Esponja", preco: 30.00, disponivel: true, quantidade: 0 },
];
const Cinema = () => {}

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



