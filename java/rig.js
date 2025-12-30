let login=document.getElementById('login')
login.addEventListener('click' , function (event){
    event.preventDefault()
    let email=document.getElementById("typeEmailX-2").value
    let pass=document.getElementById("typePasswordX-2").value
    if (email==="mhaidat@gmail.com" && pass==="12345"){
       window.location.href="welc.html"
    } else {
        alert ( 'login falid ')
    }
})
