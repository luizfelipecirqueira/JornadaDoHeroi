function simularJornada() {
    // Obtém os valores inseridos pelo usuário
    const posicaoInicial = parseInt(document.getElementById('posicaoInicial').value);
    const totalPassos = parseInt(document.getElementById('totalPassos').value);

    // Inicializa a posição atual com a posição inicial do herói
    let posicaoAtual = posicaoInicial;

    // Simula a jornada do herói pela floresta
    for (let passo = 1; passo <= totalPassos; passo++) {
      // Simulação de um passo aleatório para a direita ou esquerda
      const direcao = Math.random() < 0.5 ? -1 : 1;
      posicaoAtual += direcao;
    }

    // Exibe a posição final do herói
    document.getElementById('resultado').innerHTML = `Posição final do herói: ${posicaoAtual}`;
  }