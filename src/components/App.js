import React, { Component } from 'react';
import _ from 'lodash';
import {connect}  from 'react-redux';
import {getNote, saveNote, deleteNote} from '../actions/notesAction'


class App extends Component {
  state = {
    title: "",
    body: "",
    
  }

  //lifecycle
 componentDidMount(){
   this.props.getNote()
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
  this.props.saveNote(note)
  this.setState({
    title:"",
    body:"",
    notes:{}
  })
  }

  //render notes
 renderNotes=()=>{
  return _.map(this.props.notes,(note,key)=>{
     return(
       <div key="key">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={()=>{this.props.deleteNote(key)}}className="btn btn-danger btn-xs">Delete</button>
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

 function mapStateToProps(state, ownProps){
  return{
    notes: state.notes
  }
}
/*

aquí podrías poner
{getNotes,saveNotes} aunque es más facil de leer si
no ponemos esta funcion y pasamos estas propiedades o acciones
como objetos en el mapStateToProps
mapDispatchProps(){

}
*/
export default connect(mapStateToProps,{getNote,saveNote,deleteNote})(App);
