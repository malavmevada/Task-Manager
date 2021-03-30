import React, { Component } from "react";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import AddTask from "./AddTask";
import { Col, Row } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
    };
  }

  // onClick = () => {
  //   console.log("cli");
  //   this.setState((prevState) => ({
  //     display: !prevState.display,
  //   }));
  //   this.props.onDis(this.state.display)
  // }

  render() {
    return (
        <Row className="task-header m-1.5">
          <Col sm={7} md={9} xs={9} xl={10} lg={10}>
            <h4 className="task-text">Task Manager</h4>
          </Col>
          <Col sm={5} md={3} xs={3} xl={2} lg={2}>
            <FaPlus onClick={() => this.props.onDis()} />
          </Col>
        </Row>
    );
  }
}

export default Header;
