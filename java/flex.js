let add=document.getElementsByClassName('add-to-cart')
let count = document.getElementById('cart-count')
for( let i=0 ; i<add.length; i+=1 ){
    add[i].addEventListener('click', function(event){
        event.preventDefault()
        let card=this.closest('.card')
        let product=card.querySelector(".card-title").innerText
        count.innerText= parseInt(count.innerText)+1
        console.log(product);
        

    })
}

let dark = localStorage.getItem('mood') === 'true'

let body = document.getElementById('tbody')
let theme=document.getElementById('theme')
let filter = document.getElementById('filter')
 if (dark){
        body.style.backgroundColor='black'
        filter.style.backgroundColor='black'
        filter.style.color='white'
        localStorage.setItem('mood' , dark)
      
    } 
     else {
        body.style.backgroundColor='white'
        filter.style.backgroundColor='white'
       filter.style.color='black'
       localStorage.setItem('mood' , dark)
       
    }

theme.addEventListener('click' , function(event){
    event.preventDefault()
    dark=! dark
    if (dark){
        body.style.backgroundColor='black'
        filter.style.backgroundColor='black'
        filter.style.color='white'
        localStorage.setItem('mood' , dark)
      
    } 
    else {
        body.style.backgroundColor='white'
        filter.style.backgroundColor='white'
       filter.style.color='black'
       localStorage.setItem('mood' , dark)
       
    }
})





let profile = document.getElementById('profile')
profile.addEventListener('click' , function(event){
    event.preventDefault(); 
    window.open('rig.html', 'Register', 'width=800,height=1000');
})

document.getElementById('ele').addEventListener('change', function() {
    if(this.checked) {
        document.getElementById('electronics').scrollIntoView({behavior: 'smooth'});
    }
});


