''' Task B. '''

# task to update already inserted mongodb document objects present
# in collection "students"
# to use references to other objects in database (for nested custom data models)
# use case: programme,
#           school,
#           user

# (i) create corresponding User objects for list of all Students inserted above
# (ii) create and insert an object to db for Programme('B.B.A.') with its details
# (iii) schools objects are already present in the db,
#       use the ObjectId() for the SoM object in collection "schools"
#       to use it as reference for all Students inserted above
# (iv) link users with corresponding students and students with corresponding users

# final stage: db.students.find().pretty() example output
'''
{
    "_id" : ObjectId("5xxxc"),
    "name" : "Some Student",
    "enrolmentNumber" : 170020203040,
    "programme" : ObjectId("5xxxb"),
    "school" : ObjectId("5xxx0"),
    "phoneNumber" : 9830098300,
    "emailId" : "someone@gdgoenka.ac.in",
    "user" : ObjectId("5xxxa"),
    "semesters" : [ ],
    "currentSemester" : null,
    "gender" : "male"
}
'''
# final stage: db.users.find().pretty() example output
'''
{
    "_id" : ObjectId("5xxxa"),
    "username" : "some.student",
    "password" : "2580da11b2b6463d67d8c0337669e0e1f2194af0",
    "type" : "student",
    "student" : ObjectId("5xxxc")
}
'''

# =================================================

# upon completion all the users that have been inserted will be able to
# login to exudos system with the help of corresponding usernames
# and Student objects are co-linked with respective User and vice-versa
# due the above implementation










#
# *** IMPORTANT: Congratualuate yourself once you reach here! 💥 ****
# 