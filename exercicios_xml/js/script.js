//DEFININDO O CAMINHO DO ARQUIVO DE DADOS XML
let url = "dados/dados.xml";

//ULTILIZANDO O JQUERY COM AJAX
$.ajax(url)
    .done(function (xml){
        $(xml)
            .find("contribuente")
            .each(function () {
                $("#cards").append(`
                    <div class="card">
                    <img src="${$(this).find("foto").text()}" class="image-card">
                    <p class="nome">${$(this).find("nome").text()}</p>
                    <p class="data_nasc">${$(this).find("data_nasc").text()}</p>
                    <p class="cpf">CPF: ${$(this).find("cpf").text()}</p>
                    <p class="rg">RG: ${$(this).find("rg").text()}</p>

                    <div class="endereco">
                        <p class="estado">${$(this).find("estado").text()}</p>
                        <p class="cidade">${$(this).find("cidade").text()}</p>
                        <p class="bairro">${$(this).find("bairro").text()}</p>
                        <p class="logradouro">${$(this).find("logradouro").text()}</p>
                        <p class="numero">N°: ${$(this).find("numero").text()}</p>
                        <p class="cep">CEP: ${$(this).find("cep").text()}</p>
                    </div>
                    <div class="contato">
                        <p class="telefone">${$(this).find("telefone").text()}</p>
                        <p class="celular">${$(this).find("celular").text()}</p>
                        <p class="email">${$(this).find("email").text()}</p>
                    </div>
                    <div class="banco">
                        <p class="banco">${$(this).find("banco").text()}</p>
                        <p class="agencia">Agencia: ${$(this).find("ag").text()}</p>
                        <p class="conta_corrente">N° da Conta:${$(this).find("cc").text()}</p>
                        <p class="renda">Renda: ${$(this).find("renda").text()}</p>
                        
                    </div>
                    
                `);
            });
    })
    .fail(function () {
        alert("ocorreu um erro na leitura do arquivo XML");
    
    });
