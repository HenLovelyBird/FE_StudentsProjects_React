import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import StudentDetails from './StudentDetails';
import { PongSpinner} from 'react-spinners-kit';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  studentSelected: id =>
    dispatch({
      type: "LOAD_SPINNER",
      payload: id
    })
});

class StudentsList extends React.Component {
  studentSelected = id => this.setState({studentSelected: id});

  componentDidUpdate(prevProps) {
    if (prevProps.studentSelected !== this.props.studentSelected) {
      this.setState({
        student: this.props.students.find(student => student.id === this.props.studentSelected)
      });
    }

    componentDidMount = async () => {
        // DISPATCH LOAD_SPINNER
          let res = await fetch ("http://localhost:3003/students/", {
            method: "GET",
          });
            let students = await res.json();
            console.log(students);
            this.setState({
            students: students
          });
        // DISPATCH LOAD_SPINNER
  }


  render() {
    return this.state.errors ? (
      <Container>
        <Row>
          <Col>
            <h3>List of Students And Their Fabulous Projects </h3>
          </Col>
        </Row>

        <Row>
            {this.props.isFetching.loading ? 
            <PongSpinner /> : this.props.student && this.props.student.map(=>
                <Col>{this.props.student.name}</Col>
                <Col>{this.props.student.projects}</Col>)
                });
        </Row>

        <Row>
          <StudentDetails
            studentSelected={this.state.students.studentSelected}
            projects={this.state.students.projects}
          />
        </Row>
      </Container>
    )};
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
