function addTask() {

    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task === "") {
        return;
    }

    var li = document.createElement("li");

    // task text
    li.innerText = task;

    // delete button
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
alert("JS loaded");