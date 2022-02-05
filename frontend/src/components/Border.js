import { ReactSortable } from "react-sortablejs";
import { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  const [tasks, settasks] = useState([]);
  // // .....
  const [ideas, setideas] = useState([]);
  const [todo, settodo] = useState([]);
  const [inprogress, setinprogress] = useState([]);
  const [published, setpublished] = useState([]);

  const [newTask, setnewTask] = useState("");

  const addTask = async () => {
    let res = await axios
      .post("http://localhost:1337/api/tasks", {
        data: {
          Category: "idea",
          task: newTask,
        },
      })
      .catch((err) => console.log(err));
    getTasks();
  };

  const getTasks = async () => {
    let Tasks = await axios.get("http://localhost:1337/api/tasks");
    console.log(Tasks.data.data);
    // return;
    settasks(Tasks.data.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div
          className="row"
          style={{
            height: "80vh",
          }}
        >
          <div className="col mx-2 px-2 py-3 bg-light border rounded">
            <h6>Idea</h6>
            <div
              style={{
                minHeight: "500px",
              }}
            >
              <ReactSortable
                list={tasks}
                setList={setideas}
                groupp={"group-1"}
                group={{ name: "group-1", put: true }}
              >
                {tasks
                  .filter((task) => task.attributes.Category == "idea")
                  .map((filteredTask) => (
                    <div
                      className="card p-3 border rounded mt-2"
                      key={filteredTask.id}
                    >
                      {filteredTask.attributes.task}
                    </div>
                  ))}
              </ReactSortable>
            </div>
            <div>
              <textarea
                rows={"2"}
                cols={31}
                style={{
                  float: "left",
                  borderBlockColor: "#007bff",
                  marginBottom: "4px",
                }}
                value={newTask}
                onChange={(event) => setnewTask(event.target.value)}
              ></textarea>
              <button
                type="button"
                style={{ float: "right", marginTop: "3px" }}
                class="btn btn-primary btn-sm"
                onClick={addTask}
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="col mx-2 px-2 py-3 bg-light border rounded">
            <h6>Todo</h6>

            <ReactSortable list={tasks} setList={settodo} groupp={"group-1"}>
              {tasks
                .filter((task) => task.attributes.Category == "todo")
                .map((filteredTask) => (
                  <div
                    className="card p-3 border rounded mt-2"
                    key={filteredTask.id}
                  >
                    {filteredTask.attributes.task}
                  </div>
                ))}
            </ReactSortable>

            {/* <ReactSortable list={state2} setList={setState2} group={'group-1'}>
      {state2.map((item) => (
        <div className="card p-3 border rounded mt-2" key={item.id}>{item.name}</div>
      ))}
    </ReactSortable> */}
          </div>
          <div className="col mx-2 px-2 py-3 bg-light border rounded">
            <h6>In Progress</h6>
            <ReactSortable
              list={tasks}
              setList={setinprogress}
              grouppp={"group-1"}
            >
              {tasks
                .filter((task) => task.attributes.Category == "in_progress")
                .map((filteredTask) => (
                  <div
                    className="card p-3 border rounded mt-2"
                    key={filteredTask.id}
                  >
                    {filteredTask.attributes.task}
                  </div>
                ))}
            </ReactSortable>
          </div>
          <div className="col mx-2 px-2 py-3 bg-light border rounded">
            <h6>Published</h6>
            <ReactSortable
              list={tasks}
              setList={setpublished}
              groupppp={"group-1"}
            >
              {tasks
                .filter((task) => task.attributes.Category == "published")
                .map((filteredTask) => (
                  <div
                    className="card p-3 border rounded mt-2"
                    key={filteredTask.id}
                  >
                    {filteredTask.attributes.task}
                  </div>
                ))}
            </ReactSortable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
