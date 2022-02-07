type InstructorType = {
    email: string,
    blog: string,
    books: string[]
};

function getInstructorInfo(): InstructorType {
    return {
        email: "prabhu.bits@gmail.com",
        blog: "http://healthycoder.in",
        books: ["Spring 3.0 Black book","Practical Ext JS 4"]
    } ;
}

console.log(getInstructorInfo());