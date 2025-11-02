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
      {Array.from(uniqueDateMap.entries()).map(([key, tasks]) => (
        <div key={key} className="mb-6">
          <div className="text-lg font-semibold bg-amber-200 px-3 py-1 rounded-md inline-block mb-2">
            {key}
          </div>
          <div className="flex flex-col gap-2 pl-3">
            {tasks.filter((task) => {
              if (
                (filter === "complete" && task.status === true) ||
                (filter === "pending" && task.status === false) ||
                filter === "all"
              )
                return task;
            }).length === 0 ? (
              <>No Tasks</>
            ) : (
              <>
                {tasks.map((task) => {
                  return <TaskItem
                    key={task.id}
                    task={task}
                    refreshTasks={refreshTasks}
                  />;
                })}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
