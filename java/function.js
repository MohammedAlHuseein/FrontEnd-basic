function mh(){
let x=document.getElementById('checkValue').value
if(x==4){
    alert('number is 4')
}
    else 
        {
        alert('number is not 4')
    }
}


//// parseInt 
// لانه بعتبر اي قيمة جايه من الانبت سترنج ف هاي بتخليه يحولها من سترنق لانتجر 
function me(){
    let x=parseFloat( document.getElementById('num1').value)
    let y= (document.getElementById('op').value)
    let z=parseFloat(document.getElementById('num2').value)
    if(y=='+'){
        result=x+z
    }
    else if (y=='-'){
        result=x-z
    }
    else {
        result='undefined'
    }
    document.getElementById('e').innerHTML='eee ' +result 
}
function ch(){
        let bo=document.body;
        if (bo.classList.contains('dark')){
            bo.classList.remove('dark')
        }
        else {
            bo.classList.add('dark')
        }
}
function mn(){
    let h=document.querySelector('h1');
    if(h.classList.contains('pp')){
        h.classList.remove('pp')
    }
    else{
        h.classList.add('pp')
    }
}


function d (){
    let a=document.getElementById('nu').value
    let t=document.getElementById('se').value
    let y=document.getElementById('num').value

if(t=='*'){
    solu=a*y
}
else {
   solu= a/y
}
document.getElementById('l').innerHTML='solution ='+solu
}


// var body=document.getElementById('tbody')
// var button=document.getElementById('btn')
// var Header1=document.getElementsByid('pp')


// function changethem(){
//     if(body.style.backgroundColor=='white'){
//         body.style.backgroundColor=='black'
//         button.innerText=='change to white'
//         Header1.style.backgroundColor
        
//     }
//     else {
//         body.style.backgroundColor=='black'
//         button.innerText=='change to black'
//     }
// }