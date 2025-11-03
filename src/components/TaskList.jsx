import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { dateCollector } from "../utils/Functions";
export default function TaskList({ tasks, refreshTasks, filter }) {
  const [uniqueDateMap, setUniqueDateMap] = useState(new Map());   // a map state is created so React can watch this
  useEffect(() => {
    dateCollector(tasks,setUniqueDateMap);
  }, [tasks,filter]);
return (
  <>
    {Array.from(uniqueDateMap.entries()).map(([key, tasks]) => {
      const filteredTasks = tasks.filter((task) => {
        if (filter === "complete" && task.status===true)
         return true;
       else if (filter === "pending" && task.status===false) 
        return true;
      else if(filter === "all")
        return true;
      });

      return (
        <div key={key} className="mb-6">
          <div className="text-lg font-semibold bg-amber-200 px-3 py-1 rounded-md inline-block mb-2">
            {key}
          </div>
          <div className="flex flex-col gap-2 pl-3">
            {filteredTasks.length === 0 ? (
              <>No Tasks</>
            ) : (
              <>
                {filteredTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    refreshTasks={refreshTasks}
                    filter={filter}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      );
    })}
  </>
);
}
