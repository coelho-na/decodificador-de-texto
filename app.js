const input = document.querySelector(".input__text-area");
const encryptButton = document.querySelector(".input__button");
const decryptButton = document.querySelector(".input__button--output");
const output = document.querySelector(".output__text-area");
const copyButton = document.querySelector(".output__button");
const messageBox = document.querySelector(".output__message-box");
const imageOutput = document.querySelector(".output__img");

const encrypt = (value) => {
  return value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
}

const decrypt = (value) => {
  return value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
}

const isUpperCase = ( str ) => {
    return (/[A-Zà-úÀ-Ú]/).test(str);
}

function insertHTML(element, message)  {
 return element.innerHTML = `${message}`;
}

const limparCampo = (element) => {
   element.value = "";
}

const changeDisplay = (element, display) => {
   element.style.display = display;
}


encryptButton.addEventListener("click", () => {
  const inputValue = input.value;
  const encryptResult = encrypt(inputValue);
    if(isUpperCase(inputValue)){
      alert("Por favor, digite apenas minúsculas e sem acento");
      limparCampo(input);
    }else if(input.value == ""){
      alert("Por favor, digite um texto");
     
    }else{
        changeDisplay(output, "block");
        changeDisplay(copyButton, "block");
        changeDisplay(messageBox, "none");
        copyButton.textContent= "Copiar";
        changeDisplay(imageOutput, "none");
        insertHTML(output, encryptResult);
        limparCampo(input);
    }

 
} );

copyButton.addEventListener("click", () => {
  let outputText = output;
    if (outputText.value.length > 0) {
        const copiedText = outputText.innerHTML;
        navigator.clipboard.writeText(copiedText).then(() => {
            outputText.innerHTML = "Seu texto foi copiado com sucesso";
        });
    }

 });


decryptButton.addEventListener("click", () => {
  if(input.value == ""){
    alert("Por favor, digite um texto");
  }else{
    const inputValue = input.value;
    const decryptResult = decrypt(inputValue);
    insertHTML(output, decryptResult);
    limparCampo(input);
    copyButton.textContent= "Copiar";
    changeDisplay(imageOutput, "none");
  }
});



