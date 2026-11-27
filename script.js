
const perguntas = [
  {
    pergunta: "Um entregador realizou 7 entregas em uma tarde, os tempos, em minutos, em que elas foram realizadas são 25, 18, 32, 20, 40, 22 e 28. Qual é a mediana desses tempos de entrega?",
    alternativas: [
      "20 minutos",
      "22 minutos",
      "28 minutos",
      "25 minutos"
    ],
    respostaCorreta: "25 minutos",
    explicacao: "Para fazer uma mediana, é preciso ordenar os termos em ordem crescente: 18, 20, 22, 25, 28, 32 e 40. A mediana é o termo do meio. Nessa questão, o número do meio é 25 minutos."
  },
  {
    pergunta: "Em um mapa rodoviário construído na escala 1 : 250.000, a distância em linha reta entre duas cidades mede 8 cm. Qual é a distância real entre essas duas cidades?",
    alternativas: [
      "2 km",
      "20 km",
      "200 km",
      "2500 km"
    ],
    respostaCorreta: "20 km",
    explicacao: "Temos a escala 1 : 250.000, logo 1 cm equivale a 250.000 cm na vida real. Para descobrir o valor na realidade, multiplicamos o tamanho no mapa pela escala: 8 × 250.000 = 2.000.000 cm. Dividimos por 100.000 para transformar em quilômetros, obtendo 20 km."
  },
  {
    pergunta: "Uma equipe de 6 operários concluiu a reforma de uma sala em 10 dias. Se forem contratados mais 4 operários com o mesmo ritmo de trabalho, em quantos dias a reforma será concluída?",
    alternativas: [
      "4 dias",
      "6 dias",
      "8 dias",
      "16 dias"
    ],
    respostaCorreta: "6 dias",
    explicacao: "Essa questão envolve a Regra de Três. Como o número de operários aumenta, o tempo da reforma diminui. Portanto, são grandezas inversamente proporcionais. Fazemos 10 × x = 6 × 10. Assim, 10x = 60 e x = 6 dias."
  },
  {
    pergunta: "Se 3x - 5 = 16, qual é o valor de x?",
    alternativas: [
      "5",
      "-21",
      "-7",
      "7"
    ],
    respostaCorreta: "7",
    explicacao: "3x = 16 + 5 → 3x = 21 → x = 21 ÷ 3 → x = 7."
  },
  {
    pergunta: "Em uma sala com 40 alunos, 25% usam óculos. Quantos alunos dessa sala usam óculos?",
    alternativas: [
      "8 alunos",
      "10 alunos",
      "15 alunos",
      "25 alunos"
    ],
    respostaCorreta: "10 alunos",
    explicacao: "40 alunos é o total, e 25% corresponde a 25/100. Calculamos 40 × 25 = 1.000. Depois, 1.000 ÷ 100 = 10 alunos."
  },
  {
    pergunta: "Um time de vôlei tem 6 jogadores, cujas idades são: 18, 20, 19, 20, 22 e 20 anos. Qual é a moda dessas idades?",
    alternativas: [
      "18 anos",
      "19 anos",
      "20 anos",
      "22 anos"
    ],
    respostaCorreta: "20 anos",
    explicacao: "A moda é o valor que mais se repete. Organizando os termos, podemos observar que o número 20 se repete 3 vezes."
  },
  {
    pergunta: "Um campo de futebol possui um formato retangular com 30 metros de largura por 50 metros de comprimento. Qual é a área total desse campo?",
    alternativas: [
      "80 m²",
      "160 m²",
      "1.500 m²",
      "3.000 m²"
    ],
    respostaCorreta: "1.500 m²",
    explicacao: "Área do retângulo = largura × comprimento: 30 m × 50 m = 1.500 m²."
  },
  {
    pergunta: "Carlos tem 3 camisetas diferentes e 2 calças diferentes para trabalhar. De quantas maneiras distintas ele pode se vestir escolhendo uma camiseta e uma calça?",
    alternativas: [
      "5",
      "6",
      "8",
      "9"
    ],
    respostaCorreta: "6",
    explicacao: "Basta multiplicar as opções: 3 camisetas × 2 calças = 6 maneiras."
  },
  {
    pergunta: "Dada a função f(x) = x² + 3x - 4, qual é o valor de f(2)?",
    alternativas: [
      "2",
      "4",
      "6",
      "10"
    ],
    respostaCorreta: "6",
    explicacao: "Trocando x por 2: f(2) = 2² + 3(2) - 4 = 4 + 6 - 4 = 6."
  },
  {
    pergunta: "Ao lançar um dado comum de 6 faces (numeradas de 1 a 6), qual é a probabilidade de sair um número par?",
    alternativas: [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    respostaCorreta: "1/2",
    explicacao: "São 3 números pares (2, 4 e 6) em 6 lados: 3/6 = 1/2."
  },
  {
    pergunta: "O salário mensal de um vendedor é composto por uma parte fixa de R$ 1.800,00, mais uma comissão de R$ 25,00 por produto vendido. Em um determinado mês ele vendeu 44 produtos, qual foi seu salário total?",
    alternativas: [
      "R$ 2.700,00",
      "R$ 2.800,00",
      "R$ 2.900,00",
      "R$ 3.100,00"
    ],
    respostaCorreta: "R$ 2.900,00",
    explicacao: "Comissão: 44 × 25 = 1.100. Somando com o salário fixo: 1.800 + 1.100 = R$ 2.900,00."
  },
  {
    pergunta: "Uma caixa retangular possui as medidas de 2 m × 1,5 m × 2 m. Qual é o volume dessa caixa em litros? (1 m³ = 1000 L)",
    alternativas: [
      "600 litros",
      "3.000 litros",
      "6.000 litros",
      "60.000 litros"
    ],
    respostaCorreta: "6.000 litros",
    explicacao: "Volume = 2 × 1,5 × 2 = 6 m³. Multiplicando por 1.000, obtemos 6.000 litros."
  },
  {
    pergunta: "No final do trimestre, um aluno obteve em diferentes matérias as notas: 6, 8, 7, 5 e 9. Qual é a média da nota desse aluno?",
    alternativas: [
      "6,5",
      "7,0",
      "7,5",
      "8,0"
    ],
    respostaCorreta: "7,0",
    explicacao: "Soma das notas: 6 + 8 + 7 + 5 + 9 = 35. Dividindo por 5 matérias, temos 7,0."
  },
  {
    pergunta: "Uma loja anunciou um smartphone por R$ 2.000,00. Na Black Friday, aplicou um desconto de 20% e, sobre o novo valor, concedeu mais 10% de desconto para pagamento via Pix. Qual foi o valor final pago via Pix?",
    alternativas: [
      "R$ 1.400,00",
      "R$ 1.440,00",
      "R$ 1.500,00",
      "R$ 1.600,00"
    ],
    respostaCorreta: "R$ 1.440,00",
    explicacao: "2.000 menos 20% = 1.600. Depois, 1.600 menos 10% = R$ 1.440,00."
  }
];


const telaInicial = document.getElementById("telainicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tresultado");

const btInicio = document.getElementById("bt-inicio");
const btProxima = document.getElementById("bt-proxima");
const btSair = document.getElementById("bt-sair");
const btRefazer = document.getElementById("bt-refazer");

const elementoPergunta = document.getElementById("tpergunta");
const elementoAlternativas = document.getElementById("opcoes");
const contadorQuestao = document.getElementById("contador-questao");

const listaCorrecao = document.getElementById("lista-correcao");
const totalAcertos = document.getElementById("total-acertos");
const totalQuestoes = document.getElementById("total-questoes");
const numeroFinal = document.getElementById("numero-final");
const mensagemResultado = document.getElementById("mensagem-resultado");
const melhorias = document.getElementById("melhorias");
const orientacaoTexto = document.getElementById("orientacao-texto");

let perguntaAtual = 0;
let pontuacao = 0;


function mostrarPergunta() {
  const questao = perguntas[perguntaAtual];

  contadorQuestao.innerText = `Questão ${perguntaAtual + 1} de ${perguntas.length}`;

  elementoPergunta.innerText = questao.pergunta;
  elementoAlternativas.innerHTML = "";

  btProxima.disabled = true;

  questao.alternativas.forEach(alternativa => {
    const botao = document.createElement("button");

    botao.innerText = alternativa;

    elementoAlternativas.appendChild(botao);

    botao.addEventListener("click", () => {
      checarResposta(botao, alternativa);
    });
  });
}


function checarResposta(botaoClicado, respostaSelecionada) {
  const questao = perguntas[perguntaAtual];

  if (respostaSelecionada === questao.respostaCorreta) {
    pontuacao++;

    botaoClicado.className = "correto";
  } else {
    botaoClicado.className = "errado";
  }

  const todosBotoes = elementoAlternativas.querySelectorAll("button");

  todosBotoes.forEach(botao => {
    botao.disabled = true;

    if (botao.innerText === questao.respostaCorreta) {
      botao.className = "correto";
    }
  });

  listaCorrecao.innerHTML += `
    <p><strong>${perguntaAtual + 1}. ${questao.pergunta}</strong></p>
    <p>Sua resposta: ${respostaSelecionada}</p>
    <p>Resposta correta: ${questao.respostaCorreta}</p>
    <p><em>Explicação: ${questao.explicacao}</em></p>
    <hr>
  `;

  btProxima.disabled = false;
}


function mostrarResultadoFinal() {
  telaQuiz.className = "tela";
  telaResultado.className = "tela ativa";

  const aproveitamento = pontuacao / perguntas.length * 100;

  numeroFinal.innerText = `${(aproveitamento.toFixed(0))}%`;
  totalAcertos.innerText = pontuacao;
  totalQuestoes.innerText = perguntas.length;

  melhorias.innerText = `Você acertou ${pontuacao} de ${perguntas.length} questões.`;

  if (pontuacao >= 10) {
    mensagemResultado.innerText = "Muito bem!";
    orientacaoTexto.innerText = "Você apresentou um bom desempenho. Continue praticando para fortalecer seus conhecimentos.";
  } else {
    mensagemResultado.innerText = "Continue praticando!";
    orientacaoTexto.innerText = "Revise os conteúdos das questões e pratique mais exercícios para melhorar seu desempenho.";
  }
}


btInicio.addEventListener("click", () => {
  perguntaAtual = 0;
  pontuacao = 0;

  listaCorrecao.innerHTML = "";

  telaInicial.className = "tela";
  telaQuiz.className = "tela ativa";

  mostrarPergunta();
});


btProxima.addEventListener("click", () => {
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultadoFinal();
  }
});


btSair.addEventListener("click", () => {
  telaQuiz.className = "tela";
  telaInicial.className = "tela ativa";
});


btRefazer.addEventListener("click", () => {
  perguntaAtual = 0;
  pontuacao = 0;

  listaCorrecao.innerHTML = "";

  telaResultado.className = "tela";
  telaQuiz.className = "tela ativa";

  mostrarPergunta();
});
