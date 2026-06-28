let input = document.getElementById("todo-input");

let button = document.getElementById("add-btn");

let list = document.getElementById("todo-list");

function addTask() {

    let task = input.value.trim();

    if (task === "") {
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn); // this is the new comment im adding 
    list.appendChild(li);

    input.value = "";

}
button.addEventListener("click", addTask);
input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});