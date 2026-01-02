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
let menu=document.querySelectorAll('.m')
let new_card=document.querySelectorAll('.card')

for ( let i=0 ; i<menu.length ; i++){
    menu[i].addEventListener('click' , function(s){
        s.preventDefault()
        let selected=menu[i].dataset.type;
        for ( let j=0 ; j<new_card.length ; j++){
            let card=new_card[j].dataset.category;
             if (selected === 'all' || card === selected) {
                new_card[j].style.display = '';
             } else {
                  new_card[j].style.display = 'none';
             }
        }
    })
}

let about = document.getElementById("abou");
let contact = document.getElementById("contact");
about.addEventListener('click', function (c) {
  c.preventDefault();

  contact.style.display = 'block';
  contact.scrollIntoView({ behavior: "smooth" });
});