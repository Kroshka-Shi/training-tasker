const taskButton = document.querySelector('button');
const taskList = document.querySelector('ul');


taskButton.addEventListener('click', () => {

    const taskInput = document.querySelector('#tasksInput');
    const task = document.createElement('li');
    const taskText = document.createElement('p');
    const buttonClose = document.createElement("button");

    if (taskInput.value === "") {
        taskInput.setCustomValidity('error');
        taskInput.classList.add('error');
    } else {
        taskText.innerText = taskInput.value;
        buttonClose.className = "close";
        buttonClose.innerHTML = '\u00D7';
        task.appendChild(taskText);
        task.appendChild(buttonClose);
        taskList.appendChild(task);

        taskInput.setCustomValidity('');
        taskInput.classList.remove('error');
    }

    taskInput.reportValidity();
    taskInput.value = "";
});

taskList.addEventListener('click', (evt) => {
    console.log(evt.target)
    if (evt.target.tagName === 'P') {
        evt.target.classList.toggle('checked');
    }
    if (evt.target.classList.contains('close')) {
        taskList.removeChild(evt.target.parentNode);
    }
});