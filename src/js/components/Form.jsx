import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapStateToProps(state) {
  
  console.log("----- js/components/List - function mapStateToProps - ", state)
  
  return { myArticles: state.articles };
};

function mapDispatchToProps(dispatch) {
  
  console.log("----- js/components/Form - function mapDispatchToProps - ", dispatch)

  return {
    addArticle: article => {
      console.log("----- js/components/Form - function mapDispatchToProps - addArticle - ", article)
      dispatch(addArticle(article))
    }
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    
    console.log(">>>>>>> ConnectedForm - constructor - props : ", this.props)
    
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    
    console.log(">>>>>>> ConnectedForm - handleSubmit - props : ", this.props)
        
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  render() {
    
    console.log(">>>>>>> ConnectedForm - render - props : ", this.props)
        
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <hr/>
        <ul className="list-group list-group-flush">
          {this.props.myArticles.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title}
            </li>
          ))}
        </ul>
        <hr/>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default Form;