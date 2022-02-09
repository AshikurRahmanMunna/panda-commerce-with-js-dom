// 2. colorize the h2 tag

const h2 = document.getElementsByTagName("h2");
for (const element of h2) {
  element.style.color = "blue";
}

// 3. tomato background the backpack id
const tomato = document.getElementById('backpacks').style.backgroundColor = 'tomato';

// 4. border radius 30px the card class
let card = document.getElementsByClassName('card');

for(const element of card) {
    element.style.borderRadius = '30px';
}

// 5. console log with a click handler button
const clickConsole = document.getElementById('click-console').addEventListener('click', function(event) {
    console.log('Dont click this. It could be harmfull');
})

// 6. remove buy now button on click
const removeButton = document.getElementsByClassName('panda-btn-buy-now');

for (const i of removeButton) {
    i.addEventListener('click', function() {
        i.parentNode.removeChild(i);
    });
}

// 7. submit disabled if not typed email
document.getElementById('submit-input').addEventListener('keyup', function(event) {
    if(event.target.value == 'email') {
        submitBtn.removeAttribute('disabled');
        submitBtn.classList.remove('opacity-50');
    }
    else{
        submitBtn.setAttribute('disabled', true);
        submitBtn.classList.add('opacity-50');
    }
});
const submitBtn = document.getElementById('submit-btn');

// 8. change a image on mouseenter
document.getElementById('image').addEventListener('mouseenter', function(event){
    event.target.setAttribute('src','images/bags/bag-2.png', true);
});

// 9. doubleclick background color change
document.getElementById('subscribe').addEventListener('dblclick', function(event) {
    document.getElementById('subscribe').style.backgroundColor = 'steelblue';
})
