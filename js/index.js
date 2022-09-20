console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Bob";
console.log("The driver's name is " + hacker1)

let hacker2 = "George";
console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops

// 3.1
let capHacker1=""

for( i=0; i<hacker1.length; i++){
capHacker1=capHacker1 + hacker1[i].toUpperCase()+ " ";
}
console.log(capHacker1);

// 3.2
let revHacker2=""
for(i=hacker2.length-1; i>=0; i-- ){
    revHacker2= revHacker2 + hacker2[i];
}
console.log(revHacker2);

// 3.3
if(hacker1>hacker2){
    console.log("The driver's name goes first.")
} else if (hacker1<hacker2){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// BONUS TIME!

//Bonus 1:

let paragraph= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus massa risus, sit amet dictum elit fermentum vitae. Fusce scelerisque, nibh at consequat placerat, ipsum sem sodales lacus, id porttitor nunc risus a odio. Integer pharetra ante nec tellus varius laoreet. Nulla lacinia velit faucibus erat mollis efficitur. Ut non neque consectetur, sagittis nunc ac, tincidunt metus. Vestibulum volutpat volutpat vestibulum. Aenean finibus est non diam cursus, nec semper mauris volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin viverra lectus sit amet maximus ullamcorper. Cras eleifend a est non cursus. Quisque id porttitor lectus. In sed tortor in tortor tristique tristique vitae eu sem. Aliquam ultrices egestas diam. Donec dolor lorem, tempus at odio eu, convallis finibus quam. Nullam ultrices urna nunc, vel suscipit augue dictum et. Nunc et leo aliquam, aliquam nulla sit amet, varius dui. Integer non neque vel nibh semper pulvinar quis sit amet ex. Vivamus aliquet, nisi ac finibus suscipit, ipsum est consequat quam, in sollicitudin ipsum risus vel mauris. Integer et mauris in quam posuere dictum. Nulla quis hendrerit dolor, ut aliquam nulla. In ex ipsum, consequat ac quam sed, condimentum tempus leo. Donec finibus elit ac risus tempus dapibus. Integer nunc justo, dignissim at urna id, tincidunt luctus nunc. Proin eu sapien non sem interdum fermentum vitae ut augue. Sed eu porta nisi, sed auctor orci. Donec blandit lectus ut tellus accumsan, non egestas lorem aliquam. Quisque convallis vehicula elit. Proin vitae nisl eros. Donec id eleifend lorem. Nulla commodo scelerisque molestie. Mauris orci tortor, dictum in pellentesque a, convallis ut lectus."
numWords=paragraph.split(' ').length;

console.log(`There are ${numWords} words in the string.`);

let counter=0;

for(let i=0;i<paragraph.length;i++){
        if(paragraph[i]=== "et"){
        counter=counter+1
    }
}

console.log("The number of times the Latin word et appears is: ", counter) //no aparece la cantidad de veces que aparece "et" :(

