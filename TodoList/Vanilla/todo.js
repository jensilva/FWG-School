class Item {
    constructor(description, isDone = false) {
        this.description = description;
        this.isDone = isDone;
    }
}


const toggleTask = (event) => {
    const checkbox = event.target;
    const markItem = checkbox.parentNode;
    const input = checkbox.previousSibling.previousSibling;
    const isDone = input.value === "false";

    input.value = isDone;
    checkbox.className = `box ${isDone && "box-active"}`;
    markItem.className = isDone && "scratched";

    checkTaskList();
}

const addTask = (task) => {
    const {description, isDone} = task;
    if(description){
        document.getElementById("todo-list").innerHTML += `
        <li class="${isDone && "scratched"}" type="none">${description}
        <input class="checks" type="checkbox" value="${isDone}"/>
        <span class="box ${isDone && "box-active"}" onclick="toggleTask(event)"></span>
        </li>`;
    } else {
        console.log("não está preenchido")
    }
}

const donePercent = (todoListItem) =>{
   let totalDone = todoListItem.filter( (checkedItem => checkedItem)).length;
   const percent = (100 * totalDone) / todoListItem.length;
   return !isNaN(percent) ? percent.toFixed(0) : 0;
}

const checkTaskList = () => {
   const taskNodeList = Array.from(
       document.querySelectorAll("#todo-list li input")
       );
    
    const taskList = taskNodeList.map(
        taskElement => taskElement.value === "true"
    );

document.querySelector("#progress-bar span").innerHTML = donePercent(taskList);

}


document
.getElementById("new-task")
.addEventListener("keypress", (event) =>{ 
    if( event.key === "Enter") {
       const task = new Item (event.target.value.trim());
       addTask(task);
       checkTaskList();
       event.target.value = "";
    }
}
 );