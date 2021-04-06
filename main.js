const taskButton = document.querySelector('.input-tasks__adder');
const taskList = document.querySelector('ul');
const doneButton = document.querySelector('.done-btn');
const removeButton = document.querySelector('.remove-btn');
const taskInput = document.querySelector('#tasksInput');

const ERROR_MESSAGE = 'Пожалуйста, введите ваше дело';

let tasksArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(tasksArray));
const data = JSON.parse(localStorage.getItem('items'));

const createTask = (item) => {
    const task = document.createElement('li');
    task.innerText = item;
    taskList.appendChild(task);
    removeButton.classList.remove('hidden');
}

const addTask = () => {
    if (taskInput.value === "") {
        taskInput.setCustomValidity(ERROR_MESSAGE);
        taskInput.classList.add('error');
    } else {
        taskInput.checkValidity();
        taskInput.setCustomValidity('');
        taskInput.classList.remove('error');
        console.log(taskInput.value)
        tasksArray.push(taskInput.value);
        localStorage.setItem('items', JSON.stringify(tasksArray))
        createTask(taskInput.value);
    }
    taskInput.value = "";
}

const enterKeydown = (evt) => {
    if (evt.key === 'Enter' || evt.key === '13') {
        evt.preventDefault();
        addTask();
    };
}

data.forEach(item => {
    createTask(item);
});

removeButton.addEventListener('click', () => {
    localStorage.clear();
    tasksArray = [];
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    removeButton.classList.add('hidden');
});

taskButton.addEventListener('click', addTask);
document.addEventListener('keydown', enterKeydown);