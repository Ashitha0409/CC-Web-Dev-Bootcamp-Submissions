function addtask() {
    const input = document.getElementById("task_input");
    const taskvalue= input.value;
    if (taskvalue === "") {
        alert("Please enter a task");
        return;
    }
    const ul=document.getElementById("task_list");
    const li=document.createElement("li");

    li.innerHTML=`${taskvalue} <button class="delete_button" onclick="deletetask(this)">Delete</button>`;
    ul.appendChild(li);
    input.value="";
}

function deletetask(button) {
    const li = button.parentElement;
    li.remove();
}