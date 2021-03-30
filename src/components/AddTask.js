import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;

    if (!title) {
      alert("Please enter title");
    } else {
      this.props.onAdd({ title, description });
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
        <input type="submit" value="Save Task" className="mt-3 btn btn-dark" />
      </form>
    );
  }
}

export default AddTask;
