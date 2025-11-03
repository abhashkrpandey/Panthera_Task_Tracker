import { useRef, useState } from "react";
import { inputter ,listAdder} from "../utils/Functions";
export default function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  return (
    <div className="bg-gray-200 flex flex-col w-[200px] sm:w-[250px] md:w-[300px] p-3 rounded">
      <div className="text-lg text-center mb-2">Add New Task</div>

      <input
        id="title"
        placeholder="Title"
        type="text"
        onChange={(event) => inputter(event, setTitle)}
        ref={titleRef}
        className="p-2 mb-2 border rounded"
      />

      <input
        id="desc"
        placeholder="Description"
        type="text"
        ref={descriptionRef}
        onChange={(event) => inputter(event, setDescription)}
        className="p-2 mb-2 border rounded"
      />

      <button
        className="bg-black text-white py-2 rounded"
        onClick={() =>
          listAdder(
            title,
            description,
            refreshTasks,
            setDescription,
            setTitle,
            titleRef,
            descriptionRef
          )
        }
      >
        Add
      </button>
    </div>
  );
}
