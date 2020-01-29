import React, { Component } from 'react';
import './App.css';
import StudentsList from './Components/StudentsList';
import StudentDetail from './Components/StudentDetails';
import ProjectsDetail from './Components/ProjectsDetails';
import {Container} from "reactstrap"
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  render(){
return (
 <Container> 
    <div className="row">
      <div className="col-sm-12 text-center background-div">
        <Link to="/">
          <h1>Students and their Fabulous Projects</h1>
        </Link>
      </div>
      <ProjectsDetail />
    </div>
    <hr />
    <div className="container">
      <Route path="/students" exact component={StudentsList} />
      <Route path="/students/:id" exact component={StudentDetail} />
    </div>
</Container>
    );
  }
}


export default App;
