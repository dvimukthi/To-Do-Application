import React, { useState, useEffect } from "react";
import deleteIcon from "../assets/delete.png";
import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (newTask.title.trim() && newTask.description.trim()) {
      try {
        await axios.post(API_URL, newTask);
        fetchTasks();
        setNewTask({ title: "", description: "" });
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const markDone = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center py-10 font-['Plus Jakarta Sans']">
      <div className="max-w-6xl w-full flex flex-col md:flex-row px-4 gap-6">
        
        {/* Add Task Container */}
        <div className="w-full md:w-1/2 flex flex-col bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#3D3D3D]">Add a Task</h2>
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="w-full mt-2 p-2 border border-[#F2EFE7] rounded focus:outline-none"
          />
          <textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="w-full mt-2 p-2 border border-[#F2EFE7] rounded focus:outline-none"
          ></textarea>
          <div className="flex justify-end mt-3">
            <button
              onClick={addTask}
              className="bg-[#3674B5] text-white px-4 py-2 rounded w-[150px] cursor-pointer hover:bg-[#578FCA]"
            >
              Add
            </button>
          </div>
        </div>

        {/* Line */}
        <div className="w-full md:w-[2px] h-[2px] md:h-auto bg-gray-300"></div>

        {/* To Do List Container */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#3D3D3D]">To-Do List</h2>
          <div className="mt-4 space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`bg-[#F8FAFC] hover:bg-[#e4eef8] hover:scale-101 p-4 rounded-lg shadow flex flex-wrap justify-between items-center transition-opacity ${
                  task.done ? "opacity-50" : "opacity-100"
                }`}
              >
              {/* Texts */}
                <div className="min-w-0 flex-1 break-words">
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>

                {/* Button & Icon */}
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => markDone(task.id)}
                    className="bg-white border border-[#3674B5] px-3 py-1 cursor-pointer rounded shadow hover:bg-gray-200"
                  >
                    {task.done ? "Undo" : "Done"}
                  </button>

                  <div
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-600 p-2 rounded-full cursor-pointer hover:bg-red-700">
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
