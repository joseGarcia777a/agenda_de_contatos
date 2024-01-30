const inputNome = document.getElementById('nome');
const mensagem = document.querySelector('.mensagens');
const inputCell = document.getElementById('cell');
const form = document.getElementById('form');
const tLista = document.getElementById('tLista');
const fixo = document.getElementById('fixo');


form.addEventListener('submit', function(e){
    e.preventDefault();


    if(validaNome()&&validaNumero()){
        tLista.innerHTML += `<tr>`;
        tLista.innerHTML += `<td> ${validaNome()} </td> <td> ${validaNumero()} </td> <td> ${fixo.value} </td>`;
        tLista.innerHTML += `</tr>`;
    }else{

    };
    
});

inputNome.addEventListener('keyup', function(e){
    console.log(e.target.value);

    validaNome();
});

inputCell.addEventListener('keyup', function(e){
    console.log(e.target.value);

    validaNumero();
});


function validaNome(){
    const menErro = `Atenção!!! <br> Necessário Nome e Sobrenome.`;
    
    if(inputNome.value.split(' ').length >= 2){
        mensagem.style.display = 'none';
        inputNome.style.border = '';
        // colocar o retorno da funcao.

        return inputNome.value;
    }else{
        if(inputNome.value == ''){
            mensagem.style.display = 'none';
            inputNome.style.border = '';
            return 
        }else{
            mensagem.innerHTML = menErro;
            mensagem.style.display = 'block';
            inputNome.style.border = '3px solid red';
            mensagem.classList.add('mensagens');
        };
    };
};

function validaNumero(){

    let ddd = inputCell.value.slice(0, 2);
    let digitNove = inputCell.value.slice(2, 3);
    let quatroMeio = inputCell.value.slice(3, 7);
    let quatroUltimos = inputCell.value.slice(-4);
    //exibe o numero celular jaconfigurado.
    let celular = `(${ddd}) ${digitNove}${quatroMeio}-${quatroUltimos}`;

    if(isNaN(inputCell.value)){
        console.log(" nao e numero")
        const menErro = `Atenção!!! <br> Somente Numeros.`;

        mensagem.innerHTML = menErro;
        mensagem.style.display = 'block';
        inputCell.style.border = '3px solid red';
        mensagem.classList.add('mensagens');
    }else{
        console.log("E numero: " + celular);
        mensagem.style.display = 'none';
        inputCell.style.border = '';
        return celular;
    }
};