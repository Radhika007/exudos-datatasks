db.users.insert({
    username: 'test.student',
    password: '2580da11b2b6463d67d8c0337669e0e1f2194af0',
    type: 'student',
    student: null
});

var testUserId = ObjectId("5ace2730b0b7c599bac20e1a");
var soeId = db.schools.find({
    name: 'Engineering'
}).next()._id;
var bTechId = db.programmes.find({
    name: 'B.Tech.'
}).next()._id;

db.students.insert({
    name: 'Test Student One',
    enrolmentNumber: 170020203040,
    programme: bTechId,
    school: soeId,
    phoneNumber: 9830098300,
    emailId: 'exudos@gdgoenka.ac.in',
    user: testUserId,
    semesters: [],
    currentSemester: null 
});

var testUser = db.users.findOne({username: 'test.student'});
testUser.student = ObjectId("5ac673e5030f29614f4145c7");

db.users.update({username: 'test.student'}, testUser);