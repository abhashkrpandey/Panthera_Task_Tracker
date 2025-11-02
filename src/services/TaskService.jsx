/**
 * 
 * @param {Object} task - adds  task to localStorage 
 */
export  function  addTask(task)
{
   const tasks =JSON.parse(localStorage.getItem("tasks")) || [];
   tasks.push(task);
   localStorage.setItem("tasks",JSON.stringify(tasks));
}

/**
 * Gets all the task Stored in localStorge
 * @returns {[Objects]} - Array of Task Objects  
 */
export function getTask()
{
   const tasks =JSON.parse(localStorage.getItem("tasks")) || [];
   return tasks;
} 

/**
 * Edits the  task 
 * @param {string} id - unique id of task 
 * @param {string} title - updated title of task
 * @param {string} description - updated description of task
 */
export function editTask(id,title,description)
{
      let tasks =JSON.parse(localStorage.getItem("tasks")) || [];
      tasks=tasks.map((task)=>
      {
         if(task.id===id)
         {
           task.taskTitle=title;
           task.taskDescription=description;
         }
         return task;
      });
   localStorage.setItem("tasks",JSON.stringify(tasks));      
}

/**
 * Deletes the task 
 * @param {string} id - unique id of task 
 */
export function deleteTask(id)
{
   let tasks =JSON.parse(localStorage.getItem("tasks")) || [];
     let updatedtasks=tasks.filter(task=> task.id!==id);
   localStorage.setItem("tasks",JSON.stringify(updatedtasks));
}

/**
 * toggles status of task 
 * @param {string} id - unique id of task 
 * @param {boolean} status - updated status of the task
 */
export function statusChangeTask(id,status)
{
    let tasks =JSON.parse(localStorage.getItem("tasks")) || [];
      tasks=tasks.map((task)=>
      {
         if(task.id===id)
         {
           task.status=status;
         }
         return task;
      });
   localStorage.setItem("tasks",JSON.stringify(tasks));      
}