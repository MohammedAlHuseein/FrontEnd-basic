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