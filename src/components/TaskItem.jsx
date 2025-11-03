import { Trash } from "lucide-react";
import { Pen } from "lucide-react";
import { Save } from "lucide-react";
import { useState } from "react";
import {
  editTask,
  deleteTask,
  statusChangeTask,
} from "../services/TaskService";
import { inputter } from "../utils/Functions";
export default function TaskItem({ task, refreshTasks ,filter}) {
  const [isEditOn, setIsEditOn] = useState(false);
  const [title, setTitle] = useState(task.taskTitle);
  const [description, setDescription] = useState(task.taskDescription);

  /**
   *  toggles the editMode of Task
   */
  function editTaskMode() {
    setIsEditOn(true);
  }

  /**
   *  saves the editted task through editTask()
   */
  function saveTaskMode() {
    editTask(task.id, title, description);
    setIsEditOn(false);
    refreshTasks();
  }

  /**
   * deletes the task through deleteTask()
   */
  function deleteTaskMode() {
    deleteTask(task.id);
    refreshTasks();
  }

  /**
   * toggles the completion of any task
   */
  function statusChange() {
    console.log(task.status);
    if (task.status) {
      statusChangeTask(task.id, false);
    } else {
      statusChangeTask(task.id, true);
    }
    refreshTasks();
  }
  return (
    <div
      key={task.id}
      className="bg-gray-100 border border-gray-300 rounded-md p-3 mb-2 flex items-center justify-between"
    >
      <input
        type="checkbox"
        className="w-4 h-4 accent-green-600 cursor-pointer"
        onChange={statusChange}
        checked={task.status}
      />

      <div className="flex-1 mx-3">
        {(isEditOn && filter!=="complete") ? (
          <div className="flex flex-col gap-1">
            <input
              id="title"
              placeholder="Title"
              type="text"
              onChange={(event) => inputter(event, setTitle)}
              defaultValue={task.taskTitle}
              className="border border-gray-400 rounded-sm px-2 py-1 text-sm focus:outline-none"
            />
            <input
              id="desc"
              placeholder="Description"
              type="text"
              onChange={(event) => inputter(event, setDescription)}
              defaultValue={task.taskDescription}
              className="border border-gray-400 rounded-sm px-2 py-1 text-sm focus:outline-none"
            />
          </div>
        ) : (
          <>
            <div
              className={`text-lg font-medium ${
                task.status ? "line-through text-gray-500" : ""
              }`}
            >
              {task.taskTitle}
            </div>
            <div className="text-sm text-gray-600">{task.taskDescription}</div>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 text-gray-700">
        { filter!=="complete" ?  isEditOn ? (
          <Save
            className="cursor-pointer hover:text-green-600"
            onClick={saveTaskMode}
          />
        ) : (
          <Pen
            className="cursor-pointer hover:text-blue-600"
            onClick={editTaskMode}
          />
        ) :(<></>)}
        <Trash
          className="cursor-pointer hover:text-red-600"
          onClick={deleteTaskMode}
        />
      </div>
    </div>
  );
}
