let allStudent = []
if (localStorage.everystudent){
    let getstudent=JSON.parse(localStorage.getItem("everystudent"))
    allStudent=getstudent
}
const submit=()=>{
    if (firstname.value=="" || lastname.value=="" || level.value=="" || age.value=="" || gender.value=="" || password.value=="" || phone.value==""){
        alert("Fill every details")
    }else{
        let oneStudent= {
            nameOne:firstname.value,
            nametwo:lastname.value,
            class:level.value,
            studentage:age.value,
            studentgender:gender.value,
            studentpassword:password.value,
            phonenumber:phone.value,
            details:[]
        }
        allStudent.push(oneStudent)
        console.log(allStudent)
        localStorage.setItem("everystudent",JSON.stringify(allStudent))
        window.location.href="login.html"
    }
    }
console.log(localStorage.everystudent);