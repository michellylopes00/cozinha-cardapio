import{mostrarMSg } from "./util.js";
import{cadastrarCozinha}from"./api.js";
document.getElementById('formCadastrar').addEventListener('submit',async(event)=>{
    event.preventDefault();
    const confirmarSenha=document.getElementById('confirmar').value.trim();
    const nome=document.createElementById('nome').value.trim();
    const email=document.getElementById('email').value.trim();
    const senha=document.getElementById('senha').value.trim();
    if(!nome || !email ||!senha ||confirmarSenha){
        mostrarMSg('Por favor,preencha todos os campos.',red);
        return
    }
    if(senha !== confirmarSenha){
        mostrarMSg(`As senhas não conferem`,"red")
        return;
    }

    const botao=document.getElementById('cadastrar')
    botao.disabled=true;
    botao.textContent='Cadastrando...'
    const{sucesso,mg,}=await cadastrarCozinheira(email,senha,nome);
    botao.disabled=false;
    botao.textContent='Cadastrar-se';


    if (sucesso) {
        mostrarMSg(`Cadastro realizado com sucesso!,`,"green")
        setTimeout(()=>{
            window.location.href='sistema.html'
        },1500);

    } else {
        mostrarMSg(msg,"red");
        
    }
});
