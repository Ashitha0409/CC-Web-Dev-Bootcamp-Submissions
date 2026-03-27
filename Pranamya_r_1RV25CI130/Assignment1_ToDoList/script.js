// 1. Grab elements (Fixed the names to match the HTML above)
const input = document.getElementById('task-input');
const button = document.getElementById('add-task-btn');
const list = document.getElementById('task-list');

button.addEventListener('click', function() {
    
    const text = input.value;

    if (text === "") {
        alert("Please write something!");
        return; 
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">X</button>
    `;

    list.appendChild(li);
    input.value = "";

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
});