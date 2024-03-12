const produtos = [
    { nome: "Arroz", preco: 5.00 },
    { nome: "Feijão", preco: 6.00 },
    { nome: "Carne", preco: 20.00 },
    { nome: "Leite", preco: 3.50 }
];

function gerarListaProdutos() {
    const listaProdutosElement = document.getElementById("lista-produtos");
    listaProdutosElement.innerHTML = "";
    produtos.forEach(produto => {
        const divProduto = document.createElement("div");
        divProduto.classList.add("produto");

        const label = document.createElement("label");
        label.textContent = produto.nome;
        divProduto.appendChild(label);

        const inputQuantidade = document.createElement("input");
        inputQuantidade.type = "number";
        inputQuantidade.min = "0";
        inputQuantidade.value = "0";
        inputQuantidade.className = "quantidade";
        divProduto.appendChild(inputQuantidade);

        listaProdutosElement.appendChild(divProduto);
    });
}

window.onload = function() {
    gerarListaProdutos();
};

function gerarNotaFiscal() {
    const nome = document.getElementById("nome").value;
    const contato = document.getElementById("contato").value;
    const cpf = document.getElementById("cpf").value;
    const formaPagamento = document.getElementById("forma-pagamento").value;
    
    const produtosSelecionados = [];
    const quantidades = document.querySelectorAll(".quantidade");
    quantidades.forEach((quantidade, index) => {
        const quantidadeValue = parseInt(quantidade.value);
        if (quantidadeValue > 0) {
            produtosSelecionados.push({ 
                nome: produtos[index].nome, 
                preco: produtos[index].preco, 
                quantidade: quantidadeValue 
            });
        }
    });
    
    let notaFiscal = `<p><strong>Cliente:</strong> ${nome}</p>`;
    notaFiscal += `<p><strong>Contato:</strong> ${contato}</p>`;
    notaFiscal += `<p><strong>CPF:</strong> ${cpf}</p>`;
    notaFiscal += "<p><strong>Produtos:</strong></p>";
    notaFiscal += "<ul>";
    let total = 0;
    produtosSelecionados.forEach(produto => {
        const precoTotalProduto = produto.preco * produto.quantidade;
        total += precoTotalProduto;
        notaFiscal += `<li>${produto.nome} - ${produto.quantidade} x R$ ${produto.preco.toFixed(2)} = R$ ${precoTotalProduto.toFixed(2)}</li>`;
    });
    notaFiscal += "</ul>";
    notaFiscal += `<p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>`;
    notaFiscal += `<p><strong>Forma de Pagamento:</strong> ${formaPagamento}</p>`;

    document.getElementById("nota-fiscal").innerHTML = notaFiscal;
}
