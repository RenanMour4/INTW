const img = document.getElementById('img');
const botoes = document.getElementById('botoes');
let indiceCor = 0;
let intervaloId = null;

const semaforo = (event) =>{
	console.log(event.target.id);
	pararAutomatico();
	ligar[event.target.id]();
	
};

const proximoIndice = () =>{
	if (indiceCor < 2){
		indiceCor++
	}else{
		indiceCor=0;

	}
};




const mudacor = () =>{
	const cores = ["verde", "amarelo", "vermelho"];
	const cor = cores[indiceCor];
	ligar[cor]();
	proximoIndice();
};
const pararAutomatico = () => {
	clearInterval(intervaloId);
}



const ligar = {
	verde: () => (img.src = "img/verde.png"),
	amarelo: () => (img.src = "img/amarelo.png"),
	vermelho: () => (img.src = "img/vermelho.png"),
	automatico: () => (intervaloId = setInterval(mudacor, 1000)),
};



botoes.addEventListener("click", semaforo);
