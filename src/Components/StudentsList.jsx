import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { PongSpinner} from 'react-spinners-kit';
import { connect } from 'react-redux'
// import StudentsDetails from './StudentsDetails';


const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  studentselected: id =>
    dispatch({
      type: "SELECT_A_STUDENT",
      payload: id
    }),

    saveStudents: (data) => dispatch({ type:"LOAD_STUDENTS", payload: data}),

    isloading: () => dispatch({ type: "LOAD_SPINNER"}),

    isnotloading: () => dispatch({type: "UNLOAD_SPINNER"})
    //function name should not match the state name (otherwise it gets confused)
});

class StudentsList extends React.Component {
    // state = { }
  render() {
    return (
      <Container>

        <Row style={{Align: "center"}}>
          <Col>
          {this.props.isLoading &&  <>
          <PongSpinner id="spinner"/>
          <Row> <div>One Moment, Please...</div></Row></>}
          </Col>
        </Row>
        
            {this.props.students && this.props.students.map(student=>
                <><Row>
                  <Col>
                <img src="https://picsum.photos/200" style={{maxwidth: "50%"}}/>
                <div>{student.name}</div>
                <div>{student.surname}</div>
                <div>{student.email}</div>
                <div>{student.projects}</div>
                <Button style={{marginBottom: "2em"}}color="success" onClick={
                  (e)=> this.props.studentselected(student._id)
                }>Select</Button>
                </Col>
                {/* <Col><StudentsDetails /></Col> */}
                </Row>
                </>)} 

      </Container>
      )
    }

    componentDidMount = async () => {
      this.props.isloading();
      setTimeout(() =>{
        this.props.isnotloading();
        }, 3000)

      let res = await fetch ("https://be-studentsprojects-mongodb.herokuapp.com/students", {
        method: "GET",
        });
          let students = await res.json();
          this.props.saveStudents(students)
          // console.log(students);
          // this.setState({
          // students: students
          // });
         
      }

  }


export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
