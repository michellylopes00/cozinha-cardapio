import{mostrarMSg } from "./util.js";
import{loginCozinheira}from"./api.js";
document.getElementById('formLogin').addEventListener('submit',async(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value.trim();
    const senha=document.getElementById('senha').value.trim();
    if(!email || !senha){
        mostrarMSg('Porfavor,verifique email ou senha.',red);
        return
    }

    const botao=document.getElementById('acessar')
    botao.disabled=true;
    botao.textContent='Carregando...'
    const{sucesso,mg,user}=await loginCozinheira(email,senha);
    botao.disabled=false;
    botao.textContent='Acessar';
    if (sucesso) {
        mostrarMSg(`Bem Vindo, ${user.name}`,"green")
        setTimeout(()=>{

            window.location.href='sistema.html'
        },1500);

        
    } else {
        mostrarMSg(msg ||"Falha ao fazer login.Verifique email e senha.","red")
        
    }
});