// (a|b)+ cc(a|b|c)*
let stringLength;
let listaCaminho = [];

function startAlg() {
  limpavalidacao();
  listaCaminho = [];
  const str = document.getElementById('string').value.toLowerCase();
  stringLength = str.length;
  console.log(str);
  if (str === '') {
    invalidString('É necessário preencher o campo acima!');
  } else {
    q1(str, 0);
  }
}

function limpacaminho() {
  document.getElementById('caminho1').innerHTML = '';
}

const limpavalidacao = (clear) => {
  const result = document.getElementById('res');
  result.innerHTML = '';
};

const invalidString = (err) => {
  const result = document.getElementById('res');
  result.innerHTML = err;
};

const validString = () => {
  for (let index = 0; index < listaCaminho.length; index++) {
    let child = `<p value= ${index}>${listaCaminho[index]} </p>`;
    document.getElementById('caminho1').innerHTML = listaCaminho.join('<br />');
  }
};

const q1 = (str, index) => {
  listaCaminho.push(
    'Estado Q1, lendo caractere: ' + str[index] + ' na posição ' + index,
  );
  validString();

  if (str[index] === '-' || str[index] === '+') {
    q2(str, index + 1);
  } else {
    invalidString("Caractere '" + str[index] + "' é inválido");
  }
};

const q2 = (str, index) => {
  listaCaminho.push(
    'Estado Q2, lendo caractere: ' + str[index] + ' na posição ' + index,
  );
  validString();

  if (index === stringLength) {
    listaCaminho.push('Finalizou em q2');
    validString();
    return false;
  }
  if (str[index].match(/^\d+$/)) {
    q3(str, index + 1);
  } else {
    invalidString("Caractere '" + str[index] + "' é inválido");
  }
};

const q3 = (str, index) => {
  listaCaminho.push(
    'Estado Q3, lendo caractere: ' + str[index] + ' na posição ' + index,
  );
  validString();

  if (index === stringLength) {
    listaCaminho.push('Finalizou em q3');
    validString();
    return false;
  }
  if (str[index].match(/^\d+$/)) {
    q3(str, index + 1);
  } else {
    invalidString("Caractere '" + str[index] + "' é inválido");
  }
};