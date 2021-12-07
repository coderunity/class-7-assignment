
//- Create a MERN stack, Laravel, Django, Golan, WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students.


const students = [

    {
        id          : 01,
        Name        : 'Abu Raihan',
        Age         : 21,
        Skill       : 'MERN stack',
        Income      : 1500,
        Location    : 'Sherpur'

    },

    {
        id          : 02,
        Name        : 'MD Achem',
        Age         : 23,
        Skill       : 'Javascrpt',
        Income      : 1300,
        Location    : 'Dhaka'

    },

    {
        id          : 03,
        Name        : 'MD Nur Amin',
        Age         : 25,
        Skill       : 'Laravel',
        Income      : 1200,
        Location    : 'Bogra'

    },

    {
        id          : 04,
        Name        : 'MD Mamun',
        Age         : 23,
        Skill       : 'Javascrpt',
        Income      : 1200,
        Location    : 'Rangpur'

    },

    {
        id          : 05,
        Name        : 'MD Somrat',
        Age         : 22,
        Skill       : 'Laravel',
        Income      : 1000,
        Location    : 'Dupchaciya'

    },

    {
        id          : 06,
        Name        : 'MD Sabbir',
        Age         : 24,
        Skill       : 'Golan',
        Income      : 1100,
        Location    : 'Rangpur'

    },

    {
        id          : 07,
        Name        : 'MD Abu Sufiyan',
        Age         : 26,
        Skill       : 'Django',
        Income      : 1300,
        Location    : 'Dhaka'

    },

    {
        id          : 08,
        Name        : 'Md Abu Syaeed',
        Age         : 23,
        Skill       : 'Javascrpt',
        Income      : 1200,
        Location    : 'Comilla'

    },

    {
        id          : 09,
        Name        : 'Md Nazmul',
        Age         : 22,
        Skill       : 'WordPress',
        Income      : 900,
        Location    : 'Comilla'

    },

    {
        id          : 10,
        Name        : 'MD Abdur Rohman',
        Age         : 20,
        Skill       : 'java',
        Income      : 1300,
        Location    : 'Dhaka'

    }

];

let total = 0;

students.map((data =>{



    console.log(`

    Your Id         : ${data.id}
    Your Name       : ${data.Name}
    Your Age        : ${data.Age}
    Your Skill      : ${data.Skill}
    Your Income     : ${data.Income}
    Your Location   : ${data.Location}

`);

total = total + data.Income


}))

console.log( ` Your Income ${total}$ `);

