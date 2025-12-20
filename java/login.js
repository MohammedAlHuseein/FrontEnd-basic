let form=document.getElementById('form')
let email=document.getElementById('form2Example1')
let password=document.getElementById('form2Example2')
let alluser=JSON.parse(localStorage.getItem('user'))||[]
form.addEventListener('submit',function(event){
    event.preventDefault()
    if (alluser.length ==0) {
        alert('nott ') 
    }
    else {
        for ( let i=0 ; i<alluser.length;i++){
            if (alluser[i].email==email.value && alluser[i].password==password.value) {
                console.log(alluser[i].value);
                
                
            }
            else {
                console.log('not found');
            }
            }
        
        }
            
})
