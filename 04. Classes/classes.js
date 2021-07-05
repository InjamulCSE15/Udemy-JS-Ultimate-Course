console.log("hello world")

class studentInfo {
    constructor (name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  let firstStudent = new studentInfo("Md. Abdur Rahim", 1998);
  console.log("Student Info Name: " + firstStudent);