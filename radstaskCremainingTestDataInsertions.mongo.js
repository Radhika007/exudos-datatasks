#!/usr/bin/env mongo

// create all additional reqd sample data 

// gather exisiting ObjectId(s) for
//      user - test.student
//      user - test.faculty
//      student - test.student
//      faculty - test.faculty
//      school - Management
//      programme - BBA

var testStudentUserObjectId = db.users.findOne({
    username: 'test.student'
})._id, testFacultyUserObjectId = db.users.findOne({
    username: 'test.faculty'
})._id

var testStudentStudentObjectId = db.students.findOne({
    user: testStudentUserObjectId
})._id, testFacultyFacultyObjectId = db.faculties.findOne({
    user: testFacultyUserObjectId
})._id

var somSchoolObjectId = db.schools.findOne({
    name: 'Management'
})._id, bbaProgrammeObjectId = db.programmes.findOne({
    name: 'BBA'
})._id

// create objectIds array

var objectIds = [testStudentUserObjectId, 
    testStudentStudentObjectId, 
    bbaProgrammeObjectId, 
    somSchoolObjectId, 
    undefined,
    testFacultyFacultyObjectId,
    testFacultyUserObjectId,
]

// required is a total of 14 objectIds
// use new ObjectId() wherever required

const refsTotal = 14

objectIds[refsTotal] = undefined

const refs = objectIds.map((objectId) => (objectId == undefined) ? new ObjectId() : objectId)

// new objects that are to be inserted with appropriate ObjectId(s) wherever required (for reference)

var newSemester = {
    _id: refs[4],
    number: 1,
    programme: refs[2],
    session: refs[7],
    course: [
        refs[8], 
        refs[9]
    ]
}

var newSession = {
    _id: refs[7],
    code: "2018-19"
}

var newEngCourse = {
    _id: refs[8],
    code: "ENG1512",
    name: "English II",
    credits: 2,
    programme: refs[2]
}

var newItmCourse = {
    _id: refs[9],
    code: "ITM1002",
    name: "Information Systems",
    credits: 3,
    programme: refs[2]
}

var newNotice = {
    dateTime: new Date(),
    content: "A sample notice that is only intended for SoM students.",
    school: refs[3]
}

var newNotice2 = {
    dateTime: new Date(),
    content: "A sample notice that is only intended for ITM1002 students.",
    courses: [
        refs[9]
    ]
}

var newCourseMaterial = {
    richText: null,
    document: refs[10],
    publishDate: new Date(),
    course: refs[9],
    publishFaculty: refs[5]
}

var newDocument = {
    _id: refs[10],
    content: null,
    mimeType: 'application/pdf'
}

var newDocument2 = {
    _id: refs[11],
    content: null,
    mimeType: 'image/png'
}

var newItmAssignment = {
    _id: refs[12],
    course: refs[9],
    publishDate: new Date(),
    submitDate: new Date(),
    document: refs[11]
}

var newAssignmentSubmission = {
    assignment: refs[12],
    submitDateTime: new Date(),
    student: refs[1]
}

var newGrade = {
    _id: refs[13],
    marksObtained: 50,
    maximumMarks: 60
}

var newAssignmentGrade = {
    assignment: refs[12],
    grade: refs[13],
    student: refs[1],
    byFaculty: refs[5]
}

// insert the objects

db.sessions.insertOne(newSession)

db.semesters.insertOne(newSemester)

db.courses.insertOne(newEngCourse)
db.courses.insertOne(newItmCourse)

db.notices.insertOne(newNotice)
db.notices.insertOne(newNotice2)

db.courseMaterials.insertOne(newCourseMaterial)

db.documents.insertOne(newDocument)
db.documents.insertOne(newDocument2)

db.assignments.insertOne(newItmAssignment)

db.assignmentSubmissions.insertOne(newAssignmentSubmission)

db.grades.insertOne(newGrade)

db.assignmentGrades.insertOne(newAssignmentGrade)

// update objects for
//      student - test.student
//          update keys semesters, currentSemester with necessary ObjectId
//      faculty - test.faculty
//          update key currentSession with necessary ObjectId

var testStudentStudent = db.students.findOne({
    _id: testStudentStudentObjectId
})

var testFacultyFaculty = db.faculties.findOne({
    _id: testFacultyFacultyObjectId
})

testStudentStudent.semesters = [
    refs[4]
]
testStudentStudent.currentSemester = refs[4]

db.students.update({
    _id: testStudentStudentObjectId
}, testStudentStudent)

testFacultyFaculty.currentSession = refs[7]

db.faculties.update({
    _id: testFacultyFacultyObjectId
}, testFacultyFaculty)