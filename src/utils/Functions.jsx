import { addTask } from "../services/TaskService";

/**
 * Creates a map where a key is a unique date and value is an array of objects of tasks
 * @param {[Object]} tasks - An array of objects of tasks in unordered form
 * @param {React.Dispatch<React.SetStateAction<map>>} setUniqueDateMap - A function that updates the state map that is defined in TaskList
 */
export function dateCollector(tasks, setUniqueDateMap) {
  let map = new Map();
  tasks.map((task) => {
    let dateString = `${task.createdAtDate}-${task.createdAtMonth}-${task.createdAtYear}`;
    if (map.has(dateString)) {
      map.get(dateString).push(task);
    } else {
      map.set(dateString, [task]);
    }
  });
  setUniqueDateMap(map);
}

/**
 * Updates the filter depending upon which filter button is clicked
 * @param {React.MouseEvent<HTMLButtonElement>} event - Mouse click event
 * @param {React.Dispatch<React.SetStateAction<string>>} setFilter  - changes the filter
 */

export function updateFilter(event, setFilter) {
  if (event.target.id === "all") {
    setFilter("all");
  } else if (event.target.id === "complete") {
    setFilter("complete");
  } else {
    setFilter("pending");
  }
}

/**
 * Takes the value from input box and updates state respectively
 * @param {React.ChangeEvent<HTMLInputElement>} event - Input change event
 * @param {React.Dispatch<React.SetStateAction<string>>} setter  -  updates the state attached to input
 */
export function inputter(event, setter) {
  if (event.target.id === "title") {
    setter(event.target.value);
  } else if (event.target.id === "desc") {
    setter(event.target.value);
  }
}
let totalDate = new Date(); // provides the current time,date
let date = totalDate.getDate(); // extracts current date
let month = totalDate.getMonth(); // extracts current month
let year = totalDate.getFullYear(); //  extracts current year

/**
 * add a new task in the localStorage through addTask(), 
 the structure of task is defined below
 * @param {string} title - title of task
 * @param {string} description  -desccription of task
 * @param {function} refreshTasks  - gets the updated tasks from the localStorage
 * @param {React.Dispatch<React.SetStateAction<string>>} setDescription  -  updates the description state
 * @param {React.Dispatch<React.SetStateAction<string>>} setTitle - updates the title state
 * @param {React.RefObject<HTMLInputElement>} titleRef - refers to title input
 * @param {React.RefObject<HTMLInputElement>} descriptionRef - refers to description input 
 */

export function listAdder(
  title,
  description,
  refreshTasks,
  setDescription,
  setTitle,
  titleRef,
  descriptionRef
) {
  if (title.length != 0 && description.length != 0) {
    const task = {
      id: Date.now(),
      taskTitle: title,
      status: false,
      createdAtDate: date,
      createdAtMonth: month + 1,
      createdAtYear: year,
      taskDescription: description,
    };
    addTask(task);
    refreshTasks();
    setDescription("");
    setTitle("");
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  }
}
