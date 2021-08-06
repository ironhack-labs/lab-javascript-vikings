// FABRICA DE POLITICOS - ESCREVER UMA RECEITA DE POLITICOS (RECEITA GENERICA!!)
class Politico {
  constructor(nomePolitico, partidoPolitico, nPolitico, vicePolitico, partidoVicePolitico, fotoPolitico, isCorrupto, isPreso, propostasPolitico, alvoLavaJato) { // funcao que a classe usa para CRIAR o nosso novo Politico
    // declarar as propriedades que este objeto vai possuir
    this.nome = nomePolitico;
    this.partido = partidoPolitico;
    this.numero = nPolitico;
    this.vice = vicePolitico;
    this.partidoVice = partidoVicePolitico;
    this.foto = fotoPolitico;
    this.corrupto = isCorrupto;
    this.preso = isPreso;
    this.propostas = propostasPolitico;
    this.alvoLavaJato = alvoLavaJato;
  }
  // Fora do método construtor, nós podemos declarar os métodos desta nova classe!
  jargao() {
    console.log(`Meu nome é ${this.nome}, ${this.numero}, meu partido é o ${this.partido} e minha principal proposta é a da ${this.propostas[0]}`);
  }
  // Declarando um novo método
  criarNovaProposta(nomeProposta) {
    this.propostas.push(nomeProposta);
  }
  mudarPartido(novoPartido, novoNumero) {
    this.partido = novoPartido;
    this.numero = novoNumero;
  }
}
const eneasNovo = new Politico(null, 'PRONA', '5656', 'Dra Avanir', 'PRONA', 'https://i.pinimg.com/originals/c3/b7/ab/c3b7ab9e3eb7cc691c7f56d8eaca235f.jpg', false, false, ['Monotrilho']); // estamos criando uma nova instância da classe Politico
const florDeLisNovo = new Politico('Flordelis', 'PSOL', '666', 'Jesus', 'CEU', 'https://conteudo.imguol.com.br/c/parceiros/29/2021/03/16/flordelis-chora-e-nega-acusacoes-em-depoimento-no-conselho-de-etica-da-camara-1615928854018_v2_450x450.png', true, false, ['Casar com filho']); // estamos criando uma nova instância da classe Politico
const politicos = [eneasNovo, florDeLisNovo];
console.log(eneasNovo)
eneasNovo.criarNovaProposta('Bomba Atomica');
eneasNovo.mudarPartido('PSDB', 4556);
eneasNovo.preso = true;
florDeLisNovo.mudarPartido('PP', 10666)
console.log(eneasNovo)
// A classe Ministro HERDA tudo o que a classe Politico possui!!!!!!!
class Ministro extends Politico {
  constructor(nomePolitico, partidoPolitico, nPolitico, vicePolitico, partidoVicePolitico, fotoPolitico, isCorrupto, isPreso, propostasPolitico, alvoLavaJato, cargo, indicacao) { // funcao que a classe usa para CRIAR o nosso novo Politico
    // Funcao que vai chamar o CONSTRUTOR da classe PAI (Politico)
    super(nomePolitico, partidoPolitico, nPolitico, vicePolitico, partidoVicePolitico, fotoPolitico, isCorrupto, isPreso, propostasPolitico, alvoLavaJato);
    // declarar as propriedades que este objeto vai possuir
    this.cargo = cargo;
    this.indicacao = indicacao;
  }
  // NAO PRECISO MAIS DECLARAR OS METODOS DE POLITICO, POIS ELE JA ESTA AUTOMATICAMENTE HERDANDO-OS
}
const pauloGuedes = new Ministro('Paulo Guedes', undefined, undefined, undefined, undefined, 'https://conteudo.imguol.com.br/c/parceiros/29/2021/03/16/flordelis-chora-e-nega-acusacoes-em-depoimento-no-conselho-de-etica-da-camara-1615928854018_v2_450x450.png', false, false, ['Reforma Tributaria'], false, 'Ministro da Economia', 'Jair Bolsonaro');
console.log(pauloGuedes);
pauloGuedes.mudarPartido('PSL', 9097);
pauloGuedes.vice = 'Fulano';
pauloGuedes.partidoVice = 'PRONA';
pauloGuedes.jargao();
console.log(pauloGuedes);
