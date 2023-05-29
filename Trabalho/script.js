function enviarDados() {
    // Capturar os valores dos campos selecionados e inseridos
    var ingredientes = document.getElementById("autoSizingSelect").value;
    var quantidade = document.getElementById("quantidade").value;
    var preco = document.getElementById("preco").value;

    // Criar um objeto com os dados a serem enviados
    var dados = {
      ingredientes: ingredientes,
      quantidade: quantidade,
      preco: preco
    };

    // Enviar os dados para o servidor via requisição POST
    fetch("url_do_servidor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    })
      .then(function(response) {
        if (response.ok) {
          // Receber os dados do servidor
          return response.json();
        } else {
          throw new Error("Erro na resposta do servidor");
        }
      })
      .then(function(dadosRecebidos) {
        // Manipular os dados recebidos do servidor
        console.log("Dados recebidos do servidor:", dadosRecebidos);
        // Realizar as ações desejadas com os dados recebidos

        // Atualizar os campos de recebimento de dados com os valores recebidos
        document.getElementById("precoVenda").value = dadosRecebidos.precoVenda;
        document.getElementById("custoUnidade").value = dadosRecebidos.custoUnidade;
        document.getElementById("custoReceita").value = dadosRecebidos.custoReceita;
        document.getElementById("lucroReceita").value = dadosRecebidos.lucroReceita;
        document.getElementById("lucroUnidade").value = dadosRecebidos.lucroUnidade;
        document.getElementById("bomBomDe").value = dadosRecebidos.bomBomDe;
      })
      .catch(function(error) {
        // Tratar erros de requisição ou resposta do servidor
        console.log("Erro ao enviar/receber dados:", error);
      });
  }

  // Associar a função ao evento de clique do botão
  var botaoConfirmar = document.getElementById("btnEnviar");
  botaoConfirmar.addEventListener("click", enviarDados);