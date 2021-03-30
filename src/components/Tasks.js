import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    const { tasks, onShowTask,deleteTask } = this.props;
    if (tasks.length <= 0) {
      return (
        <div>
          <hr className="new"/>
          <h6 className="ml-2">No task in the list</h6>
        </div>
      );
    } else {
      return tasks.map((task) => (
        <Task key={task.id} task={task} onShowTask={onShowTask} deleteTask={deleteTask} />
      ));
    }
  }
}

export default Tasks;
