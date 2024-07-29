document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Adiciona uma nova tarefa
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText) {
            // Cria um novo item de lista
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'task-item');
            
            // Adiciona o texto da tarefa
            li.textContent = taskText;

            // Adiciona o botão de remover
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-danger', 'btn-sm');
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            // Adiciona o botão de remover ao item da lista
            li.appendChild(removeBtn);

            // Adiciona o item da lista à lista de tarefas
            taskList.appendChild(li);

            // Limpa o campo de entrada
            taskInput.value = '';
        }
    });

    // Permite adicionar tarefa pressionando Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
