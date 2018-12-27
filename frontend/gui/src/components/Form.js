import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

class CustomForm extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = (event, req, articleID) => {
    event.preventDefault();

    switch (req) {
      case "post":
        axios
          .post("http://127.0.0.1:8000/api/", {
            title: this.state.title,
            content: this.state.content
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
        break;
      case "put":
        axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: this.state.title,
            content: this.state.content
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(event, this.props.req, this.props.articleID)
          }
        >
          <Form.Item label="Title">
            <Input
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              placeholder="Put a title here"
            />
          </Form.Item>
          <Form.Item label="Content">
            <TextArea
              value={this.state.content}
              onChange={this.handleChange}
              name="content"
              placeholder="Enter some content ..."
              autosize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
