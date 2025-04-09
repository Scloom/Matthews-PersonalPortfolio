const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

leftButton.addEventListener('click', () => {
    console.log('Left button clicked');
    const leftButton = document.getElementById('left');
    leftButton.style.backgroundColor = 'blue';
    leftButton.style.color = 'white';
    leftButton.style.borderRadius = '5px';
    leftButton.style.padding = '10px';
    leftButton.style.fontSize = '16px';

})
rightButton.addEventListener('click', () => {
    console.log('Right button clicked');
    const rightButton = document.getElementById('right');
    rightButton.style.backgroundColor = 'green';
    rightButton.style.color = 'white';
    rightButton.style.borderRadius = '5px';
    rightButton.style.padding = '10px';
    rightButton.style.fontSize = '16px';


})