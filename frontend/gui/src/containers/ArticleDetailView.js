import React, { Component } from "react";
import axios from "axios";
import ArticleList from "./ArticleListView";
import { Card, Form, Button } from "antd";

import CustomFrom from "../components/Form";

class ArticleDetail extends Component {
  state = {
    articles: {},
    redirect: false
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/${this.state.articles.id}/`)
      .then(() => this.setState({ redirect: true }));
  };

  render() {
    if (this.state.redirect) {
      return <ArticleList />;
    }
    return (
      <div>
        <Card title={this.state.articles.title}>
          <p>{this.state.articles.content}</p>
        </Card>
        <CustomFrom
          req="put"
          articleID={this.state.articles.id}
          btnText="Update"
        />
        <Form>
          <Form.Item>
            <Button onClick={this.handleDelete} type="danger">
              Delete
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ArticleDetail;
