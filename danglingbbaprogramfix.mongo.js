var bba = db.programmes.findOne({
    name: 'BBA'
})

var students = db.students.find()

while(students.hasNext()) {
    var student = students.next()
    
    if(typeof student.programme === 'undefined') {
        student.programme = bba._id

        db.students.update({
            _id: student._id
        }, student)
    }
}