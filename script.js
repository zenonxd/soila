

function livros(nome, ano, autor) {
    const nomeM = nome.toUpperCase();
    const totalAno = 2050 - ano;
    const frase = nome + ' por ' + autor

    const objeto = {
        nome: nomeM,
        totalAno,
        frase,
    };
    return objeto
} 

const livroRetorno = livros('O senhor do aneis', 1954, "j. r r. tolkien")