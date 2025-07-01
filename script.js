// let add_task_button = document.getElementById("submit");
// const taskName, taskDate, taskPriority;
// let tskListTemp = [];
// let tskListPerm = [];

// addTask = ()=>{
//         taskName = document.getElementById("newtask").value;
//         taskDate = document.getElementById("tassk-date").value;
//         taskPriority = document.getElementById("priority").value;
//         // tskListTemp.push({
//         //     name: taskName,
//         //     date: taskDate,
//         //     priority: taskPriority
//         // });
//         tskListTemp.push(
//             taskName,
//             taskDate,
//             taskPriority
//         );
//         // localStorage.setItem("tasks", JSON.stringify(tskListTemp));
//         tskListPerm.push(tskListTemp);
//         tskListTemp = [];
//         return tskListPerm;
// }

// addTask();
// console.log(tskListPerm);


let submitBtn = document.getElementById("submit");
const tskName = document.getElementById("newtask");
const tskDate = document.getElementById("task-date");
const tskPri = document.getElementById("todo-priority");
let listing_tsks = document.getElementById("todo-list");


const taskList = [];

addTask = ()=>{
    let name = tskName.value.trim();
    let date = tskDate.value;
    let priority = tskPri.value;

    //use session storage or local storage to save tasks data after form submission for the data to not be lost
    // sessionStorage.setItem("task", JSON.stringify({ name, date, priority }));

    // console.log(sessionStorage.getItem("task"));
    // let taskListTemp = [name,date,priority];
    // taskList.push(sessionStorage.getItem("task"));
    // Clear the input fields after adding the task

    taskList.push({
        name: name,
        date: date,
        priority: priority
    });
    tskName.value = "";
    tskDate.value = "";
    tskPri.value = "low";
    removeListing();    
    Listing();
};

submitBtn.addEventListener("click", addTask);

removeListing = () => {
    while (listing_tsks.firstChild) {
        listing_tsks.removeChild(listing_tsks.firstChild);
    }
};

Listing = () =>{
    taskList.forEach((task) =>{
        let li=document.createElement("li");
        li.innerHTML = `<span class="task-name">${task.name} | </span>
                        <span class="task-date">${task.date} | </span>
                        <span class="task-priority">${task.priority} | </span>
                        <span><i class="fa fa-minus"></i></span>`;
        listing_tsks.appendChild(li);
    });
};

