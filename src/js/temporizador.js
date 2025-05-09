function atualizarContagem() {
    const dataInicio = new Date('2024-05-11T00:00:00'); // Data de início
    const agora = new Date(); // Data e hora atual

    // Diferença em milissegundos
    let diferenca = agora - dataInicio;

    // Converter para dias, horas, minutos e segundos
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Formatar com dois dígitos
    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segundos = segundos.toString().padStart(2, '0');

    // Exibir no HTML
    document.getElementById("contador").innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContagem, 1000);

// Chamar a função imediatamente para exibir o valor inicial
atualizarContagem();
