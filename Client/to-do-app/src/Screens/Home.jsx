import React from "react";

const Home = () => {

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center py-10 font-[\'Plus Jakarta Sans\']">
      <div className="max-w-6xl w-full flex flex-row px-4 gap-6">
        
        {/* Add Task Container */}
        <div className="w-1/2 flex flex-col">
          <h2 className="text-xl font-semibold text-[#3D3D3D]">Add a Task</h2>
          <input
            type="text"
            placeholder="Title"
            className="w-full mt-2 p-2 border border-[#F2EFE7] rounded focus:outline-none"
          />
          <textarea
            placeholder="Description"
            className="w-full mt-2 p-2 border border-[#F2EFE7] rounded focus:outline-none">
            </textarea>
          <div className="flex justify-end mt-3">
            <button
              className="bg-[#3674B5] text-white px-4 py-2 rounded w-[150px] cursor-pointer hover:bg-[#578FCA]">
              Add
            </button>
          </div>
        </div>

        {/* Line */}
        <div className="w-[2px] bg-gray-300"></div>

        {/* To Do List Container */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold text-[#3D3D3D]">Tasks to do</h2>
          <div className="mt-4 space-y-4">
              
              {/* 1 */}
              <div
                className="bg-[#F8FAFC] hover:bg-[#e4eef8] hover:scale-101 p-4 rounded-lg shadow flex justify-between items-center transition-opacity">
                <div>
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">Buy Books</h3>
                  <p className="text-sm text-gray-600">Buy books for the next school year.</p>
                </div>
                <button
                  className="bg-white border border-[#3674B5] text-[#3674B5] px-3 py-1 cursor-pointer rounded shadow hover:bg-gray-200">
                  Done
                </button>
              </div>

              {/* 2 */}
              <div
                className="bg-[#F8FAFC] hover:bg-[#e4eef8] hover:scale-101 p-4 rounded-lg shadow flex justify-between items-center transition-opacity">
                <div>
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">Clean Home</h3>
                  <p className="text-sm text-gray-600">Need to clean the bed room.</p>
                </div>
                <button
                  className="bg-white border border-[#3674B5] text-[#3674B5] px-3 py-1 cursor-pointer rounded shadow hover:bg-gray-200">
                  Done
                </button>
              </div>

              {/* 3 */}
              <div
                className="bg-[#F8FAFC] hover:bg-[#e4eef8] hover:scale-101 p-4 rounded-lg shadow flex justify-between items-center transition-opacity">
                <div>
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">Takehome Assignment</h3>
                  <p className="text-sm text-gray-600">Finish the mid-term assignment.</p>
                </div>
                <button
                  className="bg-white border border-[#3674B5] text-[#3674B5] px-3 py-1 cursor-pointer rounded shadow hover:bg-gray-200">
                  Done
                </button>
              </div>

              {/* 4 */}
              <div
                className="bg-[#F8FAFC] hover:bg-[#e4eef8] hover:scale-101 p-4 rounded-lg shadow flex justify-between items-center transition-opacity">
                <div>
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">Play Cricket.</h3>
                  <p className="text-sm text-gray-600">Plan the soft ball cricket match on next sunday.</p>
                </div>
                <button
                  className="bg-white border border-[#3674B5] text-[#3674B5] px-3 py-1 cursor-pointer rounded shadow hover:bg-gray-200">
                  Done
                </button>
              </div>

              {/* 5 */}
              <div
                className="bg-[#F8FAFC] hover:bg-[#e4eef8] hover:scale-101 p-4 rounded-lg shadow flex justify-between items-center transition-opacity">
                <div>
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">Help Saman</h3>
                  <p className="text-sm text-gray-600">Saman need help with his software project.</p>
                </div>
                <button
                  className="bg-white border border-[#3674B5] text-[#3674B5] px-3 py-1 cursor-pointer rounded shadow hover:bg-gray-200">
                  Done
                </button>
              </div>    
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
