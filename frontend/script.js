const botao = document.querySelector('#entrar')
const input = document.querySelector('#login')

const membros = [
     {id:1, login: "elisson.in", cargo:"Monitor DEV", nome:'Elisson'},
     {id:2, login: "gustavo.in", cargo:"T.I", nome:'Gusta da T.I'},
     {id:3, login: "giovanni.in", cargo:"Monitor MKT", nome:'Giovanni'},
     {id:4, login: "italo.gab.in", cargo:"Monitor DEV", nome:'Italo Gabriel'},
]


input.focus()

function validarMembro(login) {    

    //Reconhece o input e pega seu valor
    const input = document.querySelector('#login')
    const entrada = login.value

    //Reconhece a entrada, e só APÓS isso, conferir o cadastro no banco de dados.

    if (entrada.includes('.in')) {
        let usuarioMatch = membros.filter((membro) => {
            return (membro.login == entrada)
        })
        


        
    } else {
        alert('Usuário não válido, tente novamente!')
        input.value = ''
        input.focus()
    }

}

botao.addEventListener('click', () =>{
    validarMembro(input)
})

input.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter') {
        validarMembro(input)
    }
})