import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from "react";
import ShowTask from "./components/ShowTask";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EditTask from "./components/EditTask";

function App() {
  const [showTask, setShowTask] = useState(false);
  const [display, setDisplay] = useState(false);
  const [currentTask, setCurrentTask] = useState([]);
  const [editT, setEditT] = useState(false);

  const [tasks, setTasks] = useState([]);

  // For fecthing the data from the api . work like component did mount.
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };

    getTasks();
  }, []);

  // fetch the data
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();

    return data;
  };

  //fetch data when you want to update
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`);
    const data = await res.json();

    return data;
  };

  const onDisplay = () => {
    setDisplay(true);
    setEditT(false);
    setShowTask(false);
    console.log("help");
  };

  //on Add new task
  const onAddTask = async (task) => {
    const res = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  const onShowingTask = (task) => {
    console.log("show", task);
    setDisplay(false);
    setShowTask(true);
    setCurrentTask(task);
    setEditT(false);
  };

  // Delete the task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting this task");
    setShowTask(false);
  };

  const editTask = (task) => {
    setCurrentTask(task);
    setDisplay(false);
    setEditT(true);
  };

  //Update the task
  const onUpdate = async (uptask) => {
    // console.log("Uptask", uptask);
    const temptask = await fetchTask(uptask.id);

    const res = await fetch(`http://localhost:5000/posts/${uptask.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uptask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === data.id
          ? { ...task, title: data.title, description: data.description }
          : task
      )
    );
  };

  return (
    <Container>
      <Row>
        <Col md={4} xl={4} xs lg sm={4} >

            <Header onDis={onDisplay} />
          <hr className="new ml-1"></hr>  

          <div style={myStyle}>
            <Tasks
              tasks={tasks}
              onShowTask={onShowingTask}
              deleteTask={deleteTask}
            />
          </div>
        </Col>
        {editT ? (
          <Col md={8} xl={8} xs lg sm={8} style={{ overflow: "scroll" }}>
            <EditTask currTask={currentTask} onUpdate={onUpdate} />
          </Col>
        ) : showTask && !display ? (
          <Col md={8} xl={8} xs lg sm={8}>
            <ShowTask
              task={currentTask}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          </Col>
        ) : (
          <Col md={8} xl={8} xs lg sm={8}>
            <AddTask onAdd={onAddTask} />
          </Col>
        )}
      </Row>
    </Container>
  );
}

const myStyle = { overflowY: "scroll", maxHeight: "486px" };

export default App;
