
//- Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive





const clubmember = [

    {
        id           : 01,
        name         : 'Md Abu Raihan',
        age          : 21,
        position     : 'Menejar'

    },

    {
        id           : 02,
        name         : 'Abu Sufiyan',
        age          : 27,
        position     : 'Co-member'
    },

    {
        id           : 03,
        name         : 'MD Manum',
        age          : 24,
        position     : 'Clab-JM'
    },

    {
        id           : 04,
        name         : 'MD Nur Amin',
        age          : 26,
        position     : 'Clab-PM'
    },

    {
        id           : 05,
        name         : 'MD Achem',
        age          : 22,
        position     : 'Clab-AGM'
    },

    {
        id           : 06,
        name         : 'MD Somrat',
        age          : 22,
        position     : 'Clab-Chokidar'
    },

    {
        id           : 07,
        name         : 'MD Sabbir',
        age          : 25,
        position     : 'Clab-AM'
    },

    {
        id           : 07,
        name         : 'MD Abdur Rohman',
        age          : 16,
        position     : 'Clab CO'
    }



];

clubmember.map((data) => {

    let age = data.age;

    function agescll(){

        if (age >= 0 && age < 18){
            return `You are not old yet`
        } else  if (age >= 18 && age <= 40){
            return `Congratulations you can enter the club`
        } else{
            return `You are old Man so you not permitted`
        }

    }

    
    console.log(`
    
    Your Id         : ${data.id} 
    Your Name       : ${data.name} 
    Your Age        : ${data.age} 
    Your Position   : ${data.position} 
    ===================================
    Your Message    : ${agescll()} 
    
    
    `);





});

