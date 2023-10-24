const colorBox = document.getElementById('colorBox');
const numeroHex = document.getElementById('numeroHex');
const incremento = document.getElementById('incremento');
const intervaloMs = document.getElementById('intervaloMs');
const btn = document.getElementById('btn');
const erro = document.getElementById('erro');

let intervalo;
let cores = "#000000";

btn.addEventListener('click', function(){

    if(intervalo){

        clearInterval(intervalo);
        intervalo = null;
        btn.textContent = "Iniciar";

    }else{//se não tiver um intervalo inicia a mudança de cor e redefine o botão

        intervalo = setInterval(mudacaCores, Number(intervaloMs.value) || 250);
        btn.textContent = "Parar";

    }

});

function validarCorHexadecimal(cor) {
    return /^#[0-9A-Fa-f]{6}$/.test(cor);
}

function mudacaCores(){

    erro.innerHTML = '';

    if (!validarCorHexadecimal(numeroHex.value) || numeroHex === '') {
        erro.innerHTML = 'Digite um código de cor Hexadecimal.';
        return;
    }

    // Atualiza a cor inicial para a inserida pelo usuário
    cores = numeroHex.value;

    // Define a cor de fundo da caixa com a cor atual
    colorBox.style.backgroundColor = cores;

    // Obtém o incremento do input
    const incre = Number(incremento.value) || 0;

    // Obtém os valores RGB atuais
    let r = parseInt(cores.slice(1, 3), 16);
    let g = parseInt(cores.slice(3, 5), 16);
    let b = parseInt(cores.slice(5, 7), 16);

    // Garante que o incremento do RGB esteja entre 0 e 255
    r = Math.min(Math.max(r + incre, 0), 255);
    g = Math.min(Math.max(g + incre, 0), 255);
    b = Math.min(Math.max(b + incre, 0), 255);

    // Atualiza o valor hexadecimal no input após somar o incremento
    colorBox.style.backgroundColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    numeroHex.value = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

}

/*

else if(numeroHex === '#ffffff'){

    }else{//se não tiver um intervalo inicia a mudança de cor e redefine o botão

        intervalo = setInterval(mudacaCores, Number(intervaloMs.value) || 250);
        btn.textContent = "Parar";

    }

*/