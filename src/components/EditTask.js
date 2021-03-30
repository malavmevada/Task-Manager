import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class EditTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.currTask.id,
      title: this.props.currTask.title,
      description: this.props.currTask.description,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { id,title, description } = this.state;
    // const {currTask} = this.props
    if (!title) {
      alert("Please enter title");
    } else {
      this.props.onUpdate({ id, title, description });
    }

    this.state.title = "";
    this.state.description = "";
  };

  setTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  setDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { title, description } = this.state;
    console.log("hello ");

    return (
      <form className="mt-4" onSubmit={this.onSubmit}>
        <div>
          <TextField
            label="Title"
            multiline
            rowsMax={1}
            fullWidth
            value={title}
            onChange={this.setTitle}
          />
        </div>
        <div className="mt-3">
          <TextField
            label="Description"
            multiline
            rowsMax={17}
            fullWidth
            value={description}
            onChange={this.setDescription}
          />
        </div>
        <input type="submit" value="Edit Task" className="mt-3 btn btn-dark" />
      </form>
    );
  }
}

export default EditTask;
