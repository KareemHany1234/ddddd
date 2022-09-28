let button =document.querySelector ('button')
let mainBody =document.querySelector('body')

button.onclick =function (){
    if(mainBody.classList[0] == 'dark') {
        button.innerText=' dark mood '
        mainBody.classList = "";
    } else{
        button.innerText=' light mood '
        mainBody.classList = "dark";
    }
   
}