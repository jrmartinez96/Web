/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #2
    client.js
==========================================
*/

const state = {
  fibos: [[1,1,2,3,5], [1,1,2,3,5,8,13,21]]
};

const render = lState => {
  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // #region input 
  const inputBox = document.createElement('div');
  inputBox.className = "input-box";

  const inputText = document.createElement('input');
  inputText.className = "input-text";

  const buttonGenerate = document.createElement('div');
  buttonGenerate.className = "button-generate";
  buttonGenerate.innerHTML = "Generar"
  buttonGenerate.onclick = () => {
    const numberGenerate = parseInt(inputText.value);
    genFibo(numberGenerate,lState);
  }

  root.appendChild(inputBox);
  inputBox.appendChild(inputText);
  inputBox.appendChild(buttonGenerate);
  // #endregion input 

  // #region  fibonacci


  for (let i = lState.fibos.length - 1; -1 < i ; i = i - 1) {

    const allBox = document.createElement('div');
    allBox.className = 'all-box';
    root.appendChild(allBox);

    const dateBox = document.createElement('div');
    const dat = new Date();
    dateBox.innerHTML = `${i+1}) ${dat.toLocaleDateString()} : ${dat.toLocaleTimeString()}`;
    allBox.appendChild(dateBox);

    const fibo = lState.fibos[i];
    
    const fiboBox = document.createElement('div');
    fiboBox.className = "fibo-box";
    allBox.appendChild(fiboBox);

    for(let j = 0; j < fibo.length; j += 1){
      const barBox = document.createElement('div');
      barBox.className = "bar-box";

      fiboBox.appendChild(barBox);

      const n = fibo[j];
      const bar = document.createElement('div');
      bar.className = "bar";
      bar.innerHTML = `${n}`;

      const barHeight = n * 10;
      bar.style.height = `${barHeight}px`

      barBox.appendChild(bar);
    }

  }

  // #endregion  fibonacci
  
};

const genFibo = (num,lState) => {
  let f = [1,1];

  let i = num - 2;

  while(i>0){
    const newNum = f[f.length - 1] + f[f.length - 2];
    f.push(newNum);

    i = i -1;
  }

  lState.fibos.push(f);

  render(lState);
};

render(state);