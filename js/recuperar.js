import{mostrarMSg } from "./util.js";
import{recuperarSenha}from"./api.js";
document.getElementById('formRecuperar').addEventListener('submit',async(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value.trim();
    
    if(!email){
        mostrarMSg('Porfavor,verifique o email.',red);
        return
    }

    const botao=document.getElementById('recuperar')
    botao.disabled=true;
    botao.textContent='Enviando...'
    const{sucesso,mg}=await recuperarSenha(email);
    botao.disabled=false;
    botao.textContent='Recuperar senha';
    if (sucesso) {
        mostrarMSg(msg ||`Instrucao de recuperacao enviadas para seu email,`,"green")
        
    } else {
        mostrarMSg(msg ||"Nao foi possivel enviar email de recuperar","red")
        
    }
});