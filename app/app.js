console.log("sanity check!");

const estudantes = [];

function cadastrarEstudante() {
    console.log('cadastrarEstudantes foi chamada!');

    let novoCadastro = {
        nome : document.getElementById('input-nome').value,
        sobrenome : document.getElementById('input-sobrenome').value,
        email : document.getElementById('input-email').value,
        turma : document.getElementById('input-turma').value,
        senha : document.getElementById('input-password').value
    }

    estudantes.push(novoCadastro);

    console.log(estudantes);
}