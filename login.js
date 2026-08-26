const emailsalvo = "thiago@gmail.com"
const senhasalva = "12345"
 
const emailDigitado = document.getElementById("email");
const senhaDigitada = document.getElementById("senha");
 
console.log("O email: ", emailDigitado);
console.log("A senha: ", senhaDigitada);
 
const msgLogin = document.getElementById("msg-login");
 
const btnAcessar = document.getElementById("btn-acessar").addEventListener('click',
    () => {
      if ( emailDigitado.value== emailsalvo && senhaDigitada.value== senhasalva){
        msgLogin.textcontent = " login realizado ";
        location.href= "index.html";
       
      }else{
        msgLogin.textcontent = "usuario ou senha foi de F";
        msgLogin.style.color = "red";
      }
 
 
 
});
 
 