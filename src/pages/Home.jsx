import { useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { Plus, X } from "lucide-react";
export default function Home({ refreshTasks, taskList, filter }) {
  const [hasToAdd, setHasToAdd] = useState(false);

  // toggle the addTask Button
  function taskAdder() {
    if (hasToAdd === true) {
      setHasToAdd(false);
    } else {
      setHasToAdd(true);
    }
  }
  return (
    <>
      <div className="flex flex-row justify-between  p-4 gap-6 bg-gray-50 rounded-lg shadow-sm">
        <div className=" flex-1 h-dvh overflow-y-auto pb-24">
          <TaskList    
            tasks={taskList}
            refreshTasks={refreshTasks}
            filter={filter}
          />
        </div>

        <div className="w-[100px] sm:w-[150px] md:w-[300px] flex flex-col items-end gap-3">
          <button
            className={`p-2 rounded-md text-white ${
              hasToAdd
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-600 hover:bg-green-700"
            } transition`}
            onClick={taskAdder}
          >
            {hasToAdd ? <X /> : <Plus />}
          </button>

          {hasToAdd && (
            <div className="w-full">
              <TaskForm refreshTasks={refreshTasks} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
