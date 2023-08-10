function createStudent(name) {
  return {
    name,
  }
}

let student = document.querySelector("#student-input-name")

document.querySelector("#student-form").addEventListener("submit", (event) => {
  let newStudent = createStudent(student.value)
})
