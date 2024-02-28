window.addEventListener("load", ()=>{
    let gifContainer = document.querySelector(".gif");

    let APIKey= "3TJbSgeGMATQSzlRKosduMHD37EGsKya"
    let searchTerm = "dogs"

    //form elements
    let userName = document.querySelector("#userName")
    let userPhone = document.querySelector("#userPhone")
    let addNewUser = document.querySelector("#addUser")
    let userList=[]
    fetch(`https://65d5afe7f6967ba8e3bc37fa.mockapi.io/users`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data) 
            userList = data;
          
        })

    const addNewUserFunc = ()=>{
        let newUser = {
            id : 23,
            name : userName.value,
            phone : userPhone.value  
        }
        fetch(`https://65d5afe7f6967ba8e3bc37fa.mockapi.io/users`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newUser)
        }).then(res => res.json())
        .then(data =>{
            userList.push(newUser)
        })
    }
    addNewUser.addEventListener("click", (e)=>{
        e.preventDefault()
        addNewUserFunc()
    })
})