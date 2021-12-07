
// Create an array and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result

let res = new Result;


Student.map( data  =>{


    console.log(`
    
    ID         :${data.id}
    Roll       :${data.roll}
    Name       :${data.name}
    Gender     :${data.gender}
    Location   :${data.address}


    Subject          Mark        GPA       Grade
    
    Bangla          : ${data.bn}    ${res.gpacal(data.bn).gpa}   ${res.gpacal(data.bn).grade} 
    English         : ${data.en}    ${res.gpacal(data.en).gpa}   ${res.gpacal(data.en).grade} 
    Math            : ${data.math}    ${res.gpacal(data.math).gpa}   ${res.gpacal(data.math).grade}       
    Since           : ${data.s}     ${res.gpacal(data.s).gpa}    ${res.gpacal(data.s).grade} 
    Social Since    : ${data.ss}    ${res.gpacal(data.ss).gpa}   ${res.gpacal(data.ss).grade}  
    Relagion        : ${data.rel}   ${res.gpacal(data.rel).gpa}  ${res.gpacal(data.rel).grade}  
    
    =================================================================================================
    Total GPA ${ res.fanalResult(data.bn, data.en, data.math, data.s, data.ss, data.rel).fainalcgpa }  &     FainalGrade ${ res.fanalResult(data.bn, data.en, data.math, data.s, data.ss, data.rel).totalresult }
    
    
    
    `); 



});




