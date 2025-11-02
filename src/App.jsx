import "./App.css";
import { getTask } from "./services/TaskService";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { updateFilter } from "./utils/Functions";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  /**
   * after localStorage data changes this function refresh the whole page to load new data
   */
  function refreshTasks() {
    setTaskList(getTask());
  }
  useEffect(() => {
    refreshTasks();
  }, []);
  return (
    <>
      <div className="text-3xl font-semibold text-center mb-2 ">
        Task Tracker
      </div>

      {/* Buttons for filtering the tasks based on completion or pending */}
      <div className="flex justify-center gap-3 mb-5">
        <button
          id="all"
          onClick={(event) => updateFilter(event, setFilter)}
          className={`px-4 py-2 rounded-md  ${
            filter === "all" ? "bg-yellow-500 text-white" : "bg-yellow-200"
          }`}
        >
          All
        </button>

        <button
          id="complete"
          onClick={(event) => updateFilter(event, setFilter)}
          className={`px-4 py-2 rounded-md  ${
            filter === "complete" ? "bg-green-500 text-white" : "bg-green-200"
          }`}
        >
          Completed
        </button>

        <button
          id="pending"
          onClick={(event) => updateFilter(event, setFilter)}
          className={`px-4 py-2 rounded-md  ${
            filter === "pending" ? "bg-red-500 text-white" : "bg-red-200"
          }`}
        >
          Pending
        </button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Home //  home page component
              refreshTasks={refreshTasks}
              taskList={taskList}
              filter={filter}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
