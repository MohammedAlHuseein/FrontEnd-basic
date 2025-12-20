var form=document.getElementById('form')
var username=document.getElementById('form3Example1cg')
var useremail=document.getElementById('form3Example3cg')
var password=document.getElementById('form3Example4cg')
var repeatpass=document.getElementById('orm3Example4cdg')
var alluser=JSON.parse(localStorage.getItem('user'))||[]
form.addEventListener('submit',function(event){
event.preventDefault()
var user={
   name:username.value,
   email:useremail.value,
   password:password.value,
   repeatpass:repeatpass.value
}
alluser.push(user)
localStorage.setItem('user',JSON.stringify(alluser))
})


console.log('ofdiuwyatgd');
