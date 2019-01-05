''' Task A. ''' 

# task to do the following:
# parse the sample_bba_data_2017 excel sheet or csv document
# to obtain data in the following format as JSON
# 
# primary structure (master model) 
# [use the structure cited beneath as a reference]
'''
Student {
    name: String,
    gender: Enum(String) ['male' | 'female' | 'other'],
    enrolmentNumber: Long,
    programme: Programme,
    school: School,
    semesters: [Semester],
    currentSemester: Semester,
    phoneNumber: Long,
    emailId: String,
    user: User
}
'''
# secondary structure (suggested projected initial)
# [JSON output like the example beneath]
# avoiding usage of nested custom data models
'''
{
    "name": "Radhika Bartwal",
    "gender": "female",
    "enrolmentNumber": 170020203001,
    "programme": "B.B.A.",
    "school": "SoE",
    "semester": [],
    "currentSemester": None,
    "phoneNumber": 9332324334,
    "emailId": 'radhika.bartwal@gdgu.org',
    "user": 'radhika.bartwal'
}
'''

# create a json output file that has an array of objects matching the above example
# should contain objects corresponding to all students present in aforementioned spreadsheet

import os
import csv
import json

os.chdir('/Users/swg/Desktop/exudos')

aCsvFile = open('sample_bba_2017_as_csv.csv', encoding = 'utf8')

myCsvReader = csv.DictReader(aCsvFile)

allData = []

for data in myCsvReader:
    enrolmentNumber = int(data['Enrollment Number'])

    try:
        phoneNumber = int(data['Mobile'])
    except:
        phoneNumber = 0

    gender = data['Gender']
    if gender is 'Male' or gender is 'Female':
        gender = gender.lower()
    else:
        gender = 'other'

    allData.append({
        "name": data['Display Name'],
        "programme": data['Program Name'],
        "school": data['Department Short Name'],
        "enrolmentNumber": enrolmentNumber,
        "gender": gender,
        "user": data['User Id'],
        "phoneNumber": phoneNumber,
        "emailId": data['Email Id']
    })

aJsonFile = open('bba_student_details_parsed.json', 'w', encoding = 'ascii')

print(json.dumps(allData), file = aJsonFile)

aJsonFile.close()