var form=document.getElementById('fo')
var body=document.getElementById('tbody')
form.addEventListener('submit',function(event){
    event.preventDefault( )
   var Name=document.getElementById('name')
   var Email=document.getElementById('email')

localStorage.setItem('aa',Name.value)
localStorage.setItem('bb',Email.value)



 var ii=document.createElement('h4')
 var uu=document.createElement('h4')
 ii.innerHTML=Name.value
   uu.innerHTML=Email.value
   body.appendChild(ii)
   body.appendChild(uu)
   
    
})
var zz=document.createElement('h3')
var xx=document.createElement('h3')

zz.innerHTML=localStorage.getItem('aa')
xx.innerHTML=localStorage.getItem('bb')
body.appendChild(zz)
body.appendChild(xx)
