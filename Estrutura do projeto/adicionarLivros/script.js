// Aguarda até que o DOM (estrutura da página) esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Cria um array de livros, onde cada livro é representado por um objeto
    const books = [
        { title: 'Dom Casmurro', author: 'Machado de Assis' },
        { title: 'O Primo Basílio', author: 'José de Alencar' },
        { title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis' },
        { title: 'Senhora', author: 'José de Alencar' }
    ];

    // Seleciona o elemento da página onde a lista de livros será exibida
    const bookList = document.getElementById('book-list');

    // Usa o método map para criar uma lista de itens <li> para cada livro
    // O método map transforma cada livro do array em um elemento <li>
    const bookItems = books.map(book => {
        // Cria um novo elemento <li> (item de lista)
        const li = document.createElement('li');
        // Define o texto do item da lista como "Título - Autor"
        li.textContent = `${book.title} - ${book.author}`;
        // Retorna o elemento <li> criado
        return li;
    });

    // Adiciona cada item da lista ao elemento <ul> na página
    // Para cada item <li> criado, adiciona-o ao final do elemento <ul>
    bookItems.forEach(item => bookList.appendChild(item));
});
