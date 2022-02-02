let dog = {
    sound: "Auau",
    speak: speakGeneric
}

dog.speak();
//Auau

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

cat.speak();
//Miau

function speakGeneric(){
    console.log(this.sound); 
} 


let bindedFunction = speakGeneric.bind(dog);
bindedFunction()
console.log(bindedFunction);
