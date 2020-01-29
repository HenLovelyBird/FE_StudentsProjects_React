import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
// import StudentDetails from './StudentDetails';
import { PongSpinner} from 'react-spinners-kit';
import { connect } from 'react-redux'

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  studentSelected: id =>
    dispatch({
      type: "SELECT_A_STUDENT",
      payload: id
    }),

    setLoading: () => dispatch({ type: "LOAD_SPINNER"}),
    isFetching: () => dispatch({type: "FETCH_INFO"})
});

class StudentsList extends React.Component {
    // state = { }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>A List of Students And Their Fabulous Projects </h3>
          </Col>
        </Row>

        {this.props.isloading && <PongSpinner /> }

        <Row>
          <Col>
            {this.props.students && this.props.students.map(student=>
                <><div>{this.props.student.name}</div>
                <div>{this.props.student.projects}</div>
                </>)};
          </Col>
          <Col>
            <Button onClick={(e)=> this.props.studentSelected(e.target.value)} 
            studentSelected={this.state.students.studentSelected}>Select</Button>
          </Col>
        </Row>

      </Container>
      )
    }

    componentDidMount = async () => {
      this.props.setLoading();
      setTimeout(() =>{
        this.props.setFetching();
      }, 3000)
      let res = await fetch ("https://be-studentsprojects-mongodb.herokuapp.com/students", {
        method: "GET",
        });
          let students = await res.json();
          console.log(students);
          this.setState({
          students: students
          });
       this.props.setFetching()
      }

  }


export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
