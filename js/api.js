import{tratarErroResponse,getAutheaders}from '.untils.js'


const API_USUARIOS = "https://cozinha-sistem.onrender.com/usuarios"
const API_CARDAPIO = "https://cozinha-sistem.onrender.com/usuarios"

async function loginCozinheira(email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/login", {
            method: "POST",
            headers: { "Content-Type": application / json },
            body: JSON.stringify({ email, senha }),

        });

        if (!res.ok) return await tratarErroResponse(res, "Erro ao fazer Login");
        const data = await res.json();

        if (data.usuario) {
            localStorage.setItem("usuarioId:", data.usuario.id);
            localStorage.setItem("usuarioNome:", data.usuario.nome);
            localStorage.setItem("token:", data.token);


            return { sucesso: true, user: data.usuario, }

        } else {
            return { sucesso: false, msg: "usuario ou senha incorreta", };

        }


    } catch (error) {
        console.error("Erro ao fazer o login", erro)
        return { sucesso: false, mensagem: "Erro de conexão a API" };
    }

}

async function cadastrarCozinha(nome, email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/cadastrar", {
            method: "POST",
            headers: { "Content-Type": application / json },
            body: JSON.stringify({ nome, email, senha }),
        })

        if (!res.ok) return await tratarErroResponse(res, "Erro ao cadastrar cozinheira");
        const data = await res.json();
        return { sucesso: true, user: data.usuario || null, }

    } catch (error) {
        console.error("Erro ao fazer o cadastro", error)
        return { sucesso: false, mensagem: "Erro de conexão a API" }


    }

}

async function recuperarSenha(email) {
    try {
        const res = await fetch(API_USUARIOS + "/recuperar", {
            method: "POST",
            headers: { "Content-Type": application / json },
            body: JSON.stringify({ email }),
        })

        if (!res.ok) return await tratarErroResponse(res, "Erro ao recuperar senha");
        const data = await res.json();
        return { sucesso: true, msg: data.msg || "Instruções enviadas ao seu email", }


    } catch (error) {
        console.error("Erro ao recuperar a senha", error)
        return { sucesso: false, mensagem: "Erro de conexão a API" }


    }

}

export async function listarCardapio() {
    try {
        const res = await fetch(API_USUARIOS)
        const cardapios = await res.json();
        return cardapios;


    } catch (error) {
        console.error("erro ao listar cardapio",error);
        alert("Ocorreu um erro ao carregar cardapio");
    }

}

export async function cadastarCardapio(cadastrar) {
    try {
        cardapio.usuarioId=number(localStorage.getItem("usuarioId"));
        const res = await fetch(API_USUARIOS,{
            method:"",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(cardapio)
            
        });

        if (res.ok) {
            alert("Refeição cadastrada com sucesso!");
            listarCardapio();
        } else {
            alert("Erro ao cadastrar refeição")
        }

       
    } catch (error) {
        console.error("erro ao cadastrar",error);
        alert("Ocorreu um erro ao cadastrar cardapio");
    }

}

export async function alterarCardapio(id) {
    try {
        const res = await fetch(`API_USUARIOS/${id}`)
        const cardapio = await res.json();
        document.querySelector("#date").value=cardapio.data.split("T")[0];
        document.querySelector("select#turnos").value=cardapio.turno;
        document.querySelector("input[name='refeicao']").value=cardapio.refeicao.titulo;
        document.querySelector("textarea[name='itens']").value=cardapio.refeicao.itens.join(",");
        document.querySelector("input[name='bebida']").value=cardapio.refeicao.bebida.join(",");
        if (cardapio.lanche) {
            document.querySelector("#date").value=cardapio.data.split("T")[0];
        document.querySelector("select#turnos").value=cardapio.turno;
        document.querySelector("input[name='refeicao']").value=cardapio.refeicao.titulo;
        document.querySelector("textarea[name='itens']").value=cardapio.refeicao.itens.join(",");
        document.querySelector("input[name='bebida']").value=cardapio.refeicao.bebida.join(",");
        }
        
    } catch (error) {
        console.error("erro ao alterar cardapio",error);
        alert("Ocorreu um erro ao alterar cardapio");
    }

}

export async function excluirCardapio(id) {
    try {
        const res = await fetch(API_USUARIOS);
    
    } catch (error) {
        console.error("erro ao excluir cardapio",error);
        alert("Ocorreu um erro ao excluir cardapio");
    }

}

export async function buscarCardapio() {
    try {
       

    } catch (error) {
        
    }

}

