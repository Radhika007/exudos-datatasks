// use gdgu-sis;
db.createCollection('schools');

var schoolNames = [
    "Engineering",
    "Management",
    "Medical and Allied Sciences",
    "Humanities and Social Sciences",
    "Hospitality",
    "Fashion and Design",
    "Law",
    "Architecture and Planning",
    "Education",
    "Communication"
];

var schools = schoolNames.map((schoolName) => {
    return {
        name: schoolName,
        programmes: []
    };
});

schools.forEach((school) => {
    db.schools.insert(school);
});
