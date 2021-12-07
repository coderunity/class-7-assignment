
//- Arrange a data sheet for a family phone book and publish it


const phonenumber = [

    {
        id           : 01,
        name         : 'Md Abu Raihan',
        age          : 21,
        phone        : '01771545594',
        location     : 'Sherpur'

    },

    {
        id           : 02,
        name         : 'Abu Sufiyan',
        age          : 27,
        phone        : '0172489648',
        location     : 'Dhaka'
    },

    {
        id           : 03,
        name         : 'MD Manum',
        age          : 24,
        phone        : '01771012790',
        location     : 'Rangpur'
    },

    {
        id           : 04,
        name         : 'MD Nur Amin',
        age          : 26,
        phone        : '01785636965',
        location     : 'Bogra'
    },

    {
        id           : 05,
        name         : 'MD Achem',
        age          : 22,
        phone        : '01754774203',
        location     : 'Dhaka'
    },

    {
        id           : 06,
        name         : 'MD Somrat',
        age          : 22,
        phone        : '01726820147',
        location     : 'Bogra'
    },

    {
        id           : 07,
        name         : 'MD Sabbir',
        age          : 25,
        phone        : '01303483202',
        location     : 'Rangpur'
    },

    {
        id           : 07,
        name         : 'MD Abdur Rohman',
        age          : 16,
        phone        : '01773583320',
        location     : 'Bagra'
    }



];


phonenumber.map(data => {


    console.log(`
    
    Your Id             :${data.id}
    Your Name           :${data.name}
    Your Age            :${data.phone}
    Your Location       :${data.location}
    
    
    `);





})