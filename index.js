// // local storage :- localStorage
// // thoda bht data store karna hai tab kaam aata hai
// // temprory data store karnaho

// //data save hoga
// // localStorage.setItem("user","hello")

// // //save hua data dikhega
// // let data = localStorage.getItem("user")
// // console.log(data)

// // //data remove hoga
// // localStorage.removeItem("user")

let h2 = document.querySelector("h2")
let h1 = document.querySelector("h1")
let btn = document.querySelector("button")
console.log(btn,"btnn");
btn.addEventListener("click",(e)=>{
   console.log("hjeheheh");
   
         localStorage.removeItem("data")
})

let data = JSON.parse(localStorage.getItem("data"))
console.log(data, "data")

if (data) {
    h2.innerText = data.name
    h1.innerText = data.email
    // h2.innerText = data.password
}

let form = document.querySelector("#formData")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);

    let userData = {
        name: form[0].value,
        email: form[1].value,
        password: form[2].value,
    }

    localStorage.setItem('data', JSON.stringify(userData))

    // let loginF = document.querySelector('#loginData')
    // loginF.addEventListener("submit", (e) => {
    //     e.preventDefault()

    //     let logSaveData = JSON.parse(localStorage.getItem("data"))
    //     console.log(logSaveData);

    //     let loginInputD = {
    //         email: loginF[0].value,
    //         password: loginF[1].value,
    //     }

    //     if (loginInputD.email === logSaveData.email && loginInputD.password === logSaveData.password)
    //         alert("badhai hooo!🎉🎉")
    //     else {
    //         alert("tumse naa ho paayega!🥱🥱")
    //     }
    // })

})




