import React, { Component } from 'react';
import { database } from '../firebase';
import _ from 'lodash';
import {connect}  from 'react-redux';
import {getNotes, saveNotes} from '../actions/notesAction'


class App extends Component {
  state = {
    title: "",
    body: "",
    notes:{}
  }

  //lifecycle
 componentDidMount(){
database.on('value',(snapshot)=>{
  this.setState ({
    notes:snapshot.val()
  })
})
  }

  //handleChenge
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //handlesubmit

  handleSubmit = (e) => {
  e.preventDefault()
  const note = {
  title: this.state.title,
  body: this.state.body
    }
  database.push(note)
  this.setState({
    title:"",
    body:"",
    notes:{}
  })
  }

  //render notes
 renderNotes=()=>{
  return _.map(this.state.notes,(note,key)=>{
     return(
       <div key="key">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
       </div>
     )
  });
}
 
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  value={this.state.title}
                  onChange={this.handleChange}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..." required />
              </div>
              <div className="form-group">
                <textarea
                  value={this.state.body}
                  onChange={this.handleChange}
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="body..."
                  required />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,{getNotes,saveNotes})(App);
