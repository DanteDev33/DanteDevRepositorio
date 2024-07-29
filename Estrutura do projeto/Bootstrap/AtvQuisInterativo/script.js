// Adiciona um ouvinte de evento que será acionado quando o conteúdo do DOM for carregado
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referências para o formulário do quiz e o div onde o resultado será exibido
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    // Adiciona um ouvinte de evento ao formulário para o evento 'submit'
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário

        let score = 0; // Inicializa a pontuação do usuário
        // Define as respostas corretas para cada pergunta
        const correctAnswers = {
            question1: 'Brasília',
            question2: 'Júpiter'
        };

        // Itera sobre as perguntas e suas respostas corretas
        for (let question in correctAnswers) {
            // Seleciona a opção de resposta que foi marcada pelo usuário para a pergunta atual
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            // Verifica se a opção selecionada existe e se seu valor corresponde à resposta correta
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++; // Incrementa a pontuação se a resposta estiver correta
            }
        }

        // Exibe o resultado final no div com o id 'result'
        resultDiv.textContent = `Você acertou ${score} de ${Object.keys(correctAnswers).length} perguntas.`;
    });
});
