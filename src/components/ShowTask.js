import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

class ShowTask extends Component {
  onClickTrash = (task) => {
    this.props.deleteTask(task.id);
  };

  render() {
    const { task } = this.props;

    return (
      <div className="show-task">
        <Row>
          <Col sm={7} md={8} xs={7} xl={10} lg={8} className="mt-4">
            <h2>{task.title}</h2>
          </Col>
          <Col sm={2} md={2} xs={2} xl={1} lg={2} className="mt-4">
            <FaTrash onClick={() => this.onClickTrash(task)} />
          </Col>
          <Col sm={3} md={2} xs={1} xl={1} lg={2} className="mt-4">
            <FaEdit onClick={() => this.props.editTask(task)}/>
          </Col>
        </Row>

        <hr className="new" />

        <Row>
          <Col>
            <p style={{ margin: "10px" }}>{task.description}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShowTask;
