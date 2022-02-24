function adicionarFilmes(codigo,titulo,duracao,atores,anoDeLancamento,emCartaz){
    let novoFilme = {
        Codigo: null,
        Titulo: null,
        Duracao: null,
        Atores: null,
        AnoDeLancamento: null,
        emCartaz: null,
    } 
    novoFilme.Codigo = codigo;
    novoFilme.Titulo = titulo;
    novoFilme.Duracao = duracao;
    novoFilme.Atores = atores;
    novoFilme.AnoDeLancamento = anoDeLancamento;
    novoFilme.emCartaz = emCartaz;
    catalogo.push(novoFilme);
    return catalogo;
    }
    