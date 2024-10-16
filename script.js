const mainbottom = document.querySelector(".main-bottom");
const FillNewTask = document.querySelector(".fill-new-task");
const validate = document.querySelector(".checkBox-new");
const NumberOfItems = document.querySelector("#number-todo");
//----------------------------------------------------------------
let index = 0;
//--------------------------------------------------------------
validate.addEventListener("click", () => {
  while (FillNewTask.value != "") {
    const Task = document.createElement("div");
    Task.className = "task";
    Task.id = `task${index}`;
    const validateInput = document.createElement("input");
    validateInput.className = "todo-button";
    validateInput.id = `button${index}`;
    validateInput.type = "checkbox";

    const taskText = document.createElement("p");
    taskText.className = `todo-text`;
    taskText.id = `todo-text${index}`;

    const cross = document.createElement("img");
    cross.src = "images/icon-cross.svg";
    cross.id = `cross${index}`;

    Task.appendChild(validateInput);
    Task.appendChild(taskText);
    Task.appendChild(cross);
    taskText.textContent = `${FillNewTask.value}`;
    mainbottom.appendChild(Task);
    //-----------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------
    validateInput.addEventListener("change", () => {
      if (validateInput.checked) {
        taskText.style.textDecoration = "line-through";
      } else {
        taskText.style.textDecoration = "none";
      }
    });
    //--------------------------------------------------------------------
    const active = document.querySelector("#active-items");
    active.addEventListener("click", () => {
      if (validateInput.checked) {
        Task.style.display = "none";
      } else {
        Task.style.display = "flex";
      }
    });
    //---------------------------------------------------------
    const all = document.querySelector("#all");
    all.addEventListener("click", () => {
      all.style.color = "hsl(234, 39%, 85%)!important";
      Task.style.display = "flex";
    });
    //---------------------------------------------------------------------------------

    const completed = document.querySelector("#completed-items");
    completed.addEventListener("click", () => {
      if (validateInput.checked) {
        Task.style.display = "flex";
      } else {
        Task.style.display = "none";
      }
    });
    //-------------------------------------------------------------------------------------
    FillNewTask.value = "";
    index++;
    NumberOfItems.textContent = `${index}`;
    cross.addEventListener("click", () => {
      Task.remove();
      index--; //
      NumberOfItems.textContent = `${index}`;

      const tasks = document.querySelectorAll(".task");
      tasks.forEach((task, newIndex) => {
        task.id = `task${newIndex}`;
        const checkbox = task.querySelector(".todo-button");
        checkbox.id = `button${newIndex}`;
        const taskText = task.querySelector(".todo-text");
        taskText.id = `todo-text${newIndex}`;
      });
    });
  }
});

//------------------------------------------------------------
const clear = document.querySelector("#clear-completed");

clear.addEventListener("click", () => {
  for (let i = index - 1; i >= 0; i--) {
    const validateLocal = document.querySelector(`#button${i}`);
    const tasklocal = document.querySelector(`#task${i}`);
    const tasktextlocal = document.querySelector(`#todo-text${i}`);
    if (validateLocal && validateLocal.checked) {
      tasktextlocal.style.textDecoration = "line-through";
      tasklocal.remove();
      index--;
    }
  }

  NumberOfItems.textContent = `${index}`;

  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task, newIndex) => {
    task.id = `task${newIndex}`;
    const checkbox = document.querySelector(".todo-button");
    checkbox.id = `button${newIndex}`;
    const tasktextlocal = document.querySelector(".todo-text");
    tasktextlocal.id = `todo-text${newIndex}`;
  });
});

//------------------------------------------------------------
//changer le theme

const topbg = document.querySelector(".top");
const sun = document.querySelector("#sun-logo");
const mainmiddle = document.querySelector(".main-middle");
const texttask = document.querySelector(".todo-text");
const bottom = document.querySelector(".bottom");

sun.addEventListener("click", () => {
  if (sun.src.includes("images/icon-sun.svg")) {
    sun.src = "images/icon-moon.svg";
    topbg.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
    mainmiddle.style.backgroundColor = "hsl(0, 0%, 98%)";
    mainbottom.style.backgroundColor = "hsl(0, 0%, 98%)";
    bottom.style.backgroundColor = "hsl(0, 100%, 98%)";
    FillNewTask.style.color = "hsl(235, 19%, 35%)";
  } else {
    sun.src = "images/icon-sun.svg";
    topbg.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
    mainmiddle.style.backgroundColor = "hsl(235, 24%, 19%)";
    mainbottom.style.backgroundColor = "hsl(235, 24%, 19%)";
    bottom.style.backgroundColor = "hsl(235, 21%, 11%)";
    FillNewTask.style.color = "hsl(234, 39%, 85%)";
  }
});
