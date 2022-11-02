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

    //Limpa os capos do formulário para que o usuário possa preencher o próximo estudante
    document.getElementById('input-nome').value = ''
    document.getElementById('input-sobrenome').value = ''
    document.getElementById('input-email').value = ''
    document.getElementById('input-turma').value = ''
    document.getElementById('input-password').value = ''


    estudantes.push(novoCadastro);

    exibirTodosEstudantes();

}

function exibirTodosEstudantes() {
    console.log('exibirTodosEstudantes foi chamada!');

    //difnindo o elemento galeria de estudantes
    const galeriaEstudanntes = document.getElementById('galeria-estudantes');
    //deixa o elemento galeria de estudantes vazio, para que os dados possam ser sobrescritos e não apareçam repetidos
    galeriaEstudanntes.innerHTML = ''

    //Loop For que percorre o Array estudantes.
    for(i=0; i < estudantes.length; i++){
        console.log(estudantes[i]);

        //Cria o elemento estudantes e define uma classe 'estudante' para este elemento. Essa classe pode ser usada no CSS.
        let estudanteParaExibir = document.createElement('div');
        estudanteParaExibir.setAttribute('class', 'estudante');

        //Adicionando o nome
        let nomeCompletoDoEstudante = document.createElement('h3');
        nomeCompletoDoEstudante.innerText = `${estudantes[i].nome} ${estudantes[i].sobrenome}`;
        nomeCompletoDoEstudante.setAttribute('class', 'nome-estudante');
        estudanteParaExibir.append(nomeCompletoDoEstudante);
        //Adicionando a turma
        let turmaDoEstudante = document.createElement('p');
        turmaDoEstudante.innerText = estudantes[i].turma;
        turmaDoEstudante.setAttribute('class', 'turma-estudante');
        estudanteParaExibir.append(turmaDoEstudante);

        //Adicionando o elemento estudante com nome e tura à galeria de estudantes
        galeriaEstudanntes.append(estudanteParaExibir);

    }
}