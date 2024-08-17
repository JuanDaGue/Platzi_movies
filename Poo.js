// const natalia={
//     name:"Natalia",
//     age:20,
//     subjects:[
//         "Cursos HTML",
//         "Curso JAva"
//     ],
//     approve(newsubject){
//             this.subjects.push(newsubject);
//     }
// }

// function student(name,  age, approve) {
//     this.name=name;
//     this.age=age;
//     this.approve=approve;   
// }
// student.prototype.newsubject=function (newarpove) {
//     this.approve.push(newarpove)
// }
// const juanita =new student(
//     "Juanita alimaña",
//     20,
//     ["calculus","math"]
    
// )
// class student2 {
//     constructor(name,age, approve){
//           this.name=name;
//          this.age=age;
//          this.approve=approve; 
//     } 
//     newapprove(Newsubject){
//         this.approve.push(Newsubject)
//     }
// }
// const Miguel= new student2(
//     "Miguelito enigma",
//     20,
//     ['Calc', "math"]
//                          )

// Class Comments
class Comments{
    constructor({
        content,
        studentName,
        studentsRole='Student'
    }){
        this.content=content;
        this.studentName=studentName;
        this.studentsRole= studentsRole;
        this.like=0;
    }
    publish(){
       console.log(`${this.studentName} (${this.studentsRole})`);
       console.log(`Likes (${this.like})`);
       console.log(`${this.content}`);
    }

}
// Class of Courses
class Courses{
    constructor({
        courses,
        classes_c=[],
        isFree=false,
        lang='Spanish',

    }){
        this.courses=courses;
        this.classes_c=classes_c;
        this.isFree =isFree ;
        this.lang =lang ;
    }
}
// Class of Clases
class Classes{
    constructor({
        classes=[]
    }){
        this.classes=classes;
    }
}

////////////////////////////////////////////////////
python1=new Classes ({classes:["python_class1","python_class2","python_class3"]})
GoogleColab=new Classes ({classes:["Colab_class1","Colab_class2","Colab_class3"]})
Java1=new Classes ({classes:["JavaS_class1","JavaS_class2","JavaS_class3"]})
Azure1=new Classes ({classes:["Azure_class1","Azure_class2","Azure_class3"]})

coursePython= new Courses({courses:"Introduction to python and matplotlib",classes_c:[python1,GoogleColab]});
courseColab= new Courses({courses:"management of GoogleColabs",classes_c:[GoogleColab],isFree:true,lang:'English'});
courseJava= new Courses({courses:"JavaScritpts fundamentals",classes_c:[Java1,Java1],isFree:true});
courseAzure = new Courses({courses:"Azure cosmo DB",classes_c:[Java1,Azure1,python1],lang:'English'});
//////////////////////////////////////////////////////
class learningPath{
    constructor({
        name,
        courses=[]
    })
    {
        this.name=name;
        this.courses=courses;
    }
}

const Webschool = new learningPath({name:"Web develop",courses:[coursePython,courseColab]});
const datascience = new learningPath({name:"data science",courses:[courseJava,courseAzure]});
const Azure = new learningPath({name:"Azure",courses:[coursePython,"Cosmo Db",courseAzure]});
/////////////////////Mother class Students
//////////////////////////////////////////////////

class student{
        constructor({
            name,
            age,
            email,
            approve=[],
            username,
            twitter,
            learningPath=[],
            
        }){
         this.name=name;
         this.age=age;
         this.approve=approve;
            this.username=username
            this.email=email
         this.learningPath=learningPath
    } 
    newapprove(Newsubject){
        this.approve.push(Newsubject)
    }
    publishComment(commentcontent){
        const comment=new Comments({content:commentcontent, studentName: this.name
        })

        comment.publish()
    }

}
////////////// Free subscription /////////
class subscriptionFree extends student{
    constructor(props){
        super(props);
    }
    // Method for the approve courses
    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approve.push(newCourse);
        }
        else{
            console.log(`I'm sorry ${this.name}, you dont have acces to this course`)
        }
    }
}
////////////// Basic subscription /////////
class subscriptionBasic extends student{
    constructor(props){
        super(props);
    }
    // Method for the approve courses
    approveCourse(newCourse){
        if(newCourse.lang=='English'){
            this.approve.push(newCourse);
        }
        else{
            console.log(`I'm sorry ${this.name}, this course if for English speakers`)
        }
    }
}

////////////// Premiun subscription /////////
class subscriptionPremiun extends student{
    constructor(props){
        super(props);
    }
    // Method for the approve courses
    approveCourse(newCourse){
        this.approve.push(newCourse);
    }
}

////////////// Premiun subscription /////////
class Teacher extends student{
    constructor(props){
        super(props);
    }
    // Method for the approve courses
    approveCourse(newCourse){
        this.approve.push(newCourse);
    }
    publishComment(commentcontent){
        const comment=new Comments({content:commentcontent, studentName: this.name, studentsRole:'Teacher'
        })

        comment.publish()
    }
}


////////////Intanciando Students
const juan2=new subscriptionBasic({name:"JuanDC",username:"juandc",email:"juanito@juanito.com",twitter:"fjuandc",learningPath:[Webschool,datascience]});
const miguelito2=new subscriptionFree({name:"Miguelito",username:"migelitofeliz",email:"miguelito@juanito.com",twitter:"migelito_feliz",learningPath:[Azure,datascience]});

const Olivio2=new subscriptionPremiun({name:"Olivio",username:"Olivioeliz",email:"Olivio@juanito.com",twitter:"Oliviofeliz",learningPath:[Azure,Webschool]});
//Teacher
const Freddy2=new Teacher({name:"Freddy",username:"Freddyzt",email:"Freddy@jplatzi.com",twitter:"Freddyfeliz",learningPath:[Azure,datascience,Webschool]});

juan2.publishComment('I love the course');
Freddy2.publishComment('Hi, i am a teacher');