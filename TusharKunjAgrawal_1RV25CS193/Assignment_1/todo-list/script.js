const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const imageInput = document.getElementById("imageInput");
const avatar = document.getElementById("avatar");

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  span.onclick = function () {
    span.classList.toggle("completed");
  };

  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.className = "delete-btn";

  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(btn);
  taskList.appendChild(li);

  input.value = "";
}

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      avatar.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});