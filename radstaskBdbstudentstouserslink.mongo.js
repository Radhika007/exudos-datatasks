/* PART OF rads-TASK.B
 * 
 * students collection has a list of student objects
 * with the following format
 * Student {
 *  name: String,
 *  gender: Enum(String),
 *  enrolmentNumber: Long,
 *  programme: Programme,
 *  school: School,
 *  semesters: [Semester],
 *  currentSemester: Semester,
 *  phoneNumber: Long,
 *  emailId: String,
 *  user: User
 * }
 * 
 * instead of user field it has username, and password fields
 * which are reqd. to be removed at the end of this processing task
 */

var somId = db.schools.findOne({name: "Management"})._id
var bbaID = db.programmes.findOne({name: "BBA"})._id

var students = db.students.find({
    "programme": "BBA"
})

while(students.hasNext()) {
    var student = students.next()

    var newUser = {
        username: student.user,
        password: '49a2ebcf41084163270424e74002551d40dde836',
        type: 'student',
        student: student._id
    }
    db.users.insert(newUser)

    student.programme = bbaID
    student.school = somId
    
    var hisHerUserId = db.users.findOne({username: student.user})._id
    student.user = hisHerUserId

    db.students.update({_id: student._id}, student)
}

var hiteshaMaam = {
    name: "Hitesha Yadav",
    gender: "female",
    employeeId: 1000,
    currentSession: null,
    emailId: "hitesha.yadav@gdgoenka.ac.in",
    user: "hitesha.yadav",
    school: somId
}