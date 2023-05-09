Esse método abaixo pega o valor de um input e colocar dentro de uma variável
<html>
<input type="text" id="input_titulo" placeholder="Titulo"></input>
<button onclick="trocaModulo2()" value="salvar">salvar</button>

function trocaModulo2 () {
        var titulo = document.getElementById("input_titulo").value;
        document.getElementById("substituir").innerHTML = titulo;
    }
</html>

Esse código exibe valor de uma variável na tela

<p id="substituir"></p>
<script>
   var modulo1 = "<b><h2>You can have objects in an Array.</h2></b><br> You can have functions in an Array. You can have arrays in an Array:";
   let modulo2 = 
   [titulo="<b><h2> Titulo <br></h2></b>" + 
   " Texto 1 " +
   "Texto 2"];

    function trocaModulo (modulo1, modulo2) {
        if (modulo1) {
            document.getElementById("substituir").innerHTML = modulo1;
        }
        if (modulo2) {
            document.getElementById("substituir").innerHTML = modulo2;
        }
    }
</script>

# Faz elementor oculto aparecer com um clique (através do display none x Block do CSS)
# Não serve caso queira colocar mais de um botão. Nesse caso, use variáveis.

<html>
        <button id="btn_modulo1" onclick="ExibirModulo1('m1')">Módulo 1</button><br>
</html>

<script>
        function ExibirModulo1 (m1) {
            var display = document.getElementById('modulo1').style.display;
            if (display == "none") {
                document.getElementById('modulo1').style.display = block;
            } else {
                document.getElementById('modulo1').style.display = 'inline-block';
            }
}
</script>
<style>
main { 
display:block;
flex-direction: row; /*coloca imagem e texto lado a lado*/
margin-top: 50px;
}
#modulo1 {
display: none;
}
#modulo2 {
display: none;
}
#modulo3 {
display: none;
}
</style>

# Exibe PDF no corpo do HTML
<iframe src="https://techsos.com.br/Darf.pdf" width="600" height="780" style="border: none;"></iframe>

# Incorpora página de outro site dentro do HTML
<embed src="http://www.meudominio.com.br//meu_documento.pdf" width="760" height="500" type='application/pdf'>

# Exibir PDF convertido em HTML no corpo HTML. Colocar apostila já convertida em HTML na hospedagem. 
<embed src="Analise-Técnica-Para-Leigos-Barbara-Rockefeller.html" type='application/pdf' width="960" height="800">

#método que faz a página atualizar. 
<script>
function voltar() {
    location.reload();
}
</script>

# Método pra salvar apostila dentro de variável e exibila na tela
<script> 
function modulo1 () {
  var varmodulo1 = '<h2>Apostila 1</h2> <embed src="Analise-Técnica-Para-Leigos-Barbara-Rockefeller.html" width="960" height="800">';
  document.getElementById('substituir').innerHTML = varmodulo1;
}
</script>

#Botões "video e apostila" dentro do módulo. Video e apostila dentro de cada botão.

<script>
function modulo1() {
    var botao_video = '<button id="btn_modulo2" onclick="botao_video()">Ver Vídeo Aula</button>';
    var botao_apostila = '<button id="btn_modulo2" onclick="botao_apostila()">Ler apostila</button>'
    document.getElementById('substituir').innerHTML = botao_video + botao_apostila;
}

function botao_apostila () {
    var varmodulo1 = '<h2>Apostila 1</h2> <embed src="Analise-Técnica-Para-Leigos-Barbara-Rockefeller.html" width="960" height="800">';
    document.getElementById('substituir').innerHTML = varmodulo1;
}

function botao_video () {
    var varmodulo1 = '<h2>Video aula 1</h2> <iframe src="https://drive.google.com/file/d/13EDcPdiVS64Gc0fcAXJxfbn9VYELSPBq/preview" width="640" height="480" allow="autoplay"></iframe>';
    document.getElementById('substituir').innerHTML = varmodulo1;
}
</script>

# Método que faz abrir página na mesma página
window.open('https://cestsegtrabalho.com.br/index.php/nova-prova-primeiros-socorros/', '_self') 

//COMO FAZER UM MAP() com String dentro
var maps =  {
            'tentativaMap': 
                {
                    nome: 'stanley',
                sobrenome: 'Maria'
                }
        }

//MAP que concatena
var arrayNomes = [
            {nome: 'Maria', sobrenome: 'Souza'}
        ]
        function concatenarNomes(elemento){
            let nome = elemento.nome + " " + elemento.sobrenome;
            return nome;
        }
        var nomeCompleto = arrayNomes.map(concatenarNomes);

//método que arredonda os números
console.log(Math.floor(1.3))
//1

//FACTORY FUNCTION
//como é:
const celular = {
    marcaCelular: 'Iphone',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function() {
        console.log('Fazendo ligação')
    }
}
//como ficou:
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return { //const celular foi substituido por return
        marcaCelular: marcaCelular, 
        tamanhoTela, //quando chave e valor é igual, deixa um só
        capacidadeBateria: capacidadeBateria,
        ligar() { //função fica assim
            console.log('Fazendo ligação')
        }
    }
}
const celular1 = criarCelular('Nokia', 5.5, 5000);
console.log(celular1)

//FACTORY FUNCTION AND CONSTRUCTOR FUNCTION
//FACTORY FUNCTION:
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return { //const celular foi substituido por return
        marcaCelular: marcaCelular, 
        tamanhoTela, //quando chave e valor é igual, deixa um só
        capacidadeBateria: capacidadeBateria,
        ligar() { //função fica assim
            console.log('Fazendo ligação')
        }
    }
}
const celular1 = criarCelular('Nokia', 5.5, 5000);
console.log(celular1)

//CONSTRUCTOR FUNCTION
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular, //this referencia o objeto
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() { //assim que se cria uma function
        console.log('Fazendo Ligação...')
    }
}
const celular = new Celular('asus', 5.5, 4000);
console.log(celular);

//NATUREZA DINAMICA DE OBJETOS
const mouse = { //mouse é o objeto. O que está dentro dele é a propriedade
    cor: 'vermelho',
    marca: 10,
}
//É possível adicionar propriedades ao objeto fora das chaves, desta foram:
mouse.velocidade = 5000; 
mouse.trocarFio = function () {
    console.log('Mudando pra Bluetooth')
}
console.log(mouse);

//CLONAGEM DE OBJETOS
const mouse = { //mouse é o objeto. O que está dentro dele é a propriedade
    cor: 'vermelho',
    marca: 10,
}

//FORMA 1
const novoObjeto = Object.assign({
    bateria: 546
}, mouse);
console.log(novoObjeto);

//FORMA 2
const objeto2 = {...mouse, 
bateria: 562,
};
console.log(objeto2);
