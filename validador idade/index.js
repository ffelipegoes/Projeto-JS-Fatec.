function calcular(event) {
  event.preventDefault();
  const anoNasc = document.querySelector('#inputIdade').value;
  let genero = document.querySelector('input[name="genero"]:checked').value;
  const foto = document.querySelector('#foto');
  let idade = 2021 - anoNasc;
  let faixaEtaria = ''; 

  if(genero === 'masculino'){
    genero = 'homem';
  }else{
    genero = 'mulher';
  }
   
  if(idade <= 12){
    faixaEtaria = 'criança';
  } else if(idade <= 21){
    faixaEtaria = 'jovem';
  } else{
    faixaEtaria = 'adulto';
  }
  const frase = 'você é  ' + genero + ' de ' + idade + ' anos';
  console.log(frase)

  const nomeFoto = genero + '_' + faixaEtaria + '.jpg'
  foto.src = 'validador idade/img/'+ nomeFoto;
}

const botao = document.querySelector('#botao');
botao.addEventListener('click',calcular);

