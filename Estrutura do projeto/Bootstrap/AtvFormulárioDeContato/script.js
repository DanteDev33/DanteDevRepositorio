// Espera o documento HTML ser completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o elemento do formulário pelo ID 'contactForm'
    const form = document.getElementById('contactForm');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', (e) => {
        // Evita o comportamento padrão de envio do formulário (recarregar a página)
        e.preventDefault();
        
        // Limpa quaisquer feedbacks de validação que possam estar visíveis
        clearFeedbacks();

        // Captura os valores dos campos do formulário e remove espaços em branco no início e no final
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Variável para acompanhar a validade dos dados do formulário
        let valid = true;

        // Validação do campo de nome: verifica se o campo está vazio
        if (name === '') {
            // Mostra feedback de erro se o nome estiver vazio
            showFeedback('nameFeedback');
            // Marca o formulário como inválido
            valid = false;
        }

        // Validação do campo de e-mail: verifica se o campo está vazio ou se o e-mail não corresponde ao padrão
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // REGEX, PESQUISE SOBRE!
        if (email === '' || !emailPattern.test(email)) {
            // Mostra feedback de erro se o e-mail estiver vazio ou não for válido
            showFeedback('emailFeedback');
            // Marca o formulário como inválido
            valid = false;
        }

        // Validação do campo de mensagem: verifica se o campo está vazio
        if (message === '') {
            // Mostra feedback de erro se a mensagem estiver vazia
            showFeedback('messageFeedback');
            // Marca o formulário como inválido
            valid = false;
        }

        // Se o formulário for válido, processa os dados
        if (valid) {
            // Exibe uma mensagem de sucesso
            alert('Formulário enviado com sucesso!');
            // Limpa os campos do formulário
            form.reset();
        }
    });

    // Função para exibir o feedback de erro com base no ID do elemento
    function showFeedback(id) {
        // Obtém o elemento de feedback pelo ID
        const feedback = document.getElementById(id);
        // Torna o feedback visível
        feedback.style.display = 'block';
    }

    // Função para limpar todos os feedbacks de validação
    function clearFeedbacks() {
        // Seleciona todos os elementos com a classe 'form-feedback'
        document.querySelectorAll('.form-feedback').forEach(el => {
            // Torna todos os feedbacks invisíveis
            el.style.display = 'none';
        });
    }
});
