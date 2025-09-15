//while condition
// let num=5;
// let fact=1;
// while(num>=1)
// {
//     console.log(num);
//     num--;
// }

//write a program to 5 table using while loop
// let n=5;
// let i=1;
// while(i<=10)
// {
//     console.log(n+'*'+i+'='+n*i);
//     i++;
// }

//dom maniculation

const myDiv = document.getElementById('myDiv');
newParagraph.textContent = 'Hello World!';

const newParagraph = document.createElement('p');
newParagraph.textcontent = 'Hello world';
myDiv.appendChild(newParagraph);

myDiv.addEventListener('click', () => {  // Add an event listener to the div
    alert('Div clicked!');

});