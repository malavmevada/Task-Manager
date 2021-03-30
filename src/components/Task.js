import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import ShowTask from "./ShowTask";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTask: false,
    };
  }
  
  onClickTrash = (task) => {
    this.props.deleteTask(task.id);
  };

  show = (task) => {
    this.setState({ displayTask: true });
    this.props.onShowTask(task);
  };
  render() {
    const { task, onShowTask } = this.props;

    return (
      <Row className="task m-1">
        <Col sm={7} md={9} xs={9} xl={10} lg={10} onClick={() => this.show(task)}>
          <h3 className="task-text">{task.title}</h3>
        </Col>
        <Col sm={5} md={3} xs={3} xl={2} lg={2}>
        <FaTimes onClick={() => this.onClickTrash(task)}  />
        </Col>
      </Row>
    );
  }
}

export default Task;
