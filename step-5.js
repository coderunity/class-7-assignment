
//- Create fees array and object data for a picnic where everyone will provide free basic information for everyone.

const picnicusar = [

    {
        id           : 01,
        name         : 'Md Abu Raihan',
        age          : 21,
        phone        : '01771545594',
        cost         : 700,
        location     : 'Sherpur'

    },

    {
        id           : 02,
        name         : 'Abu Sufiyan',
        age          : 27,
        phone        : '0172489648',
        cost         : 700,
        location     : 'Dhaka'
    },

    {
        id           : 03,
        name         : 'MD Manum',
        age          : 24,
        phone        : '01771012790',
        cost         : 700,
        location     : 'Rangpur'
    },

    {
        id           : 04,
        name         : 'MD Nur Amin',
        age          : 26,
        phone        : '01785636965',
        cost         : 700,
        location     : 'Bogra'
    },

    {
        id           : 05,
        name         : 'MD Achem',
        age          : 22,
        phone        : '01754774203',
        cost         : 700,
        location     : 'Dhaka'
    },

    {
        id           : 06,
        name         : 'MD Somrat',
        age          : 22,
        phone        : '01726820147',
        cost         : 700,
        location     : 'Bogra'
    },

    {
        id           : 07,
        name         : 'MD Sabbir',
        age          : 25,
        phone        : '01303483202',
        cost         : 700,
        location     : 'Rangpur'
    },

    {
        id           : 07,
        name         : 'MD Abdur Rohman',
        age          : 16,
        phone        : '01773583320',
        cost         : 700,
        location     : 'Bagra'
    }

];

let totalcost = 0;

picnicusar.map(data => {

    console.log(`
    
    Your Id No          :${data.id}
    Your Name           :${data.name}
    Your Age            :${data.age}
    Your Phone Number   :${data.phone}
    Your Cost           :${data.cost}
    Your Location       :${data.location}
    
    `);

    totalcost += data.cost


})

console.log(` Picnic All Amount ${totalcost} TAKA `);




