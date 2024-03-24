// Função para calcular o tempo decorrido desde 18/03/2023
function calcularTempoDecorrido() {
    const dataInicial = new Date('2023-03-18T00:00:00');
    const dataAtual = new Date();

    const diferenca = dataAtual - dataInicial;

    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    return {
        dias: dias,
        horas: horas % 24,
        minutos: minutos % 60,
        segundos: segundos % 60
    };
}

// Função para atualizar o contador a cada segundo
function atualizarContador() {
    const tempoDecorrido = calcularTempoDecorrido();

    document.getElementById('timer').innerHTML = `${tempoDecorrido.dias} dias, ${tempoDecorrido.horas} horas, ${tempoDecorrido.minutos} minutos e ${tempoDecorrido.segundos} segundos`;
}

// Atualizar o contador inicialmente e a cada segundo
atualizarContador();
setInterval(atualizarContador, 1000);
