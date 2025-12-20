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