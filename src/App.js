import React, { Component } from "react";
import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"
class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JQuery" }
    ],
    current: ""
  }



  // updateCourse
  updateCourse = (e) => {
    this.setState({

      current: e.target.value
    })
  }


  // addCourse

  addCourse = (e) => {
    e.preventDefault();

    let current = this.state.current;
    let courses = this.state.courses;
    if (e.target.name.value !==""){
      courses.push({ name: current })
      this.setState({
        courses,
        current: ""
      })
    } else {
      return false
    }



  }

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })

  }

  // edit Course

  editCourse = (index, value) => {
    let { courses } = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    })

  }
  render() {

    const courses = this.state.courses;
    let length = courses.length;
    const courseList = length ? (
      courses.map((course, index) => {
        return <CourseList data={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
      })

    ) : (
      <p>there is no items</p>

    )



    return (
      <section className="App" >
        <h2>Add Course</h2>

        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        <ul>{courseList}</ul>

      </section>
    );
  }

}

export default App;
