// Your code goes here
window.addEventListener('load', () => {
  alert('TURN BACK NOW');
})

const anchors = document.querySelectorAll('a');

for(let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('mouseover',
  event => {
    if(event.target.innerHTML == "Home") {
      event.target.innerHTML = "YOU ARE HERE";
    }

    if(event.target.innerHTML == "About Us") {
      event.target.innerHTML = "But what about you?";
    }

    if(event.target.innerHTML == "Blog") {
      event.target.innerHTML = "Access Forbidden";
    }

    if(event.target.innerHTML == "Contact") {
      event.target.innerHTML = "SUMMON";
    }
  });
}

for(let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'red';
    if(event.target.innerHTML == "YOU ARE HERE") {
      event.target.innerHTML = "You";
    }

    if(event.target.innerHTML == "But what about you?") {
      event.target.innerHTML = "Are";
    }

    if(event.target.innerHTML == "Access Forbidden") {
      event.target.innerHTML = "Here";
    }

    if(event.target.innerHTML == "SUMMON") {
      event.target.innerHTML = "FOREVER";
    }
  })
}

document.querySelector('.intro').querySelector('img').addEventListener('click', event => {
  event.target.style.filter = 'invert(1)'
})

document.querySelector('.img-content').addEventListener('dblclick', event => {
  event.target.src = "https://activerain-store.s3.amazonaws.com/image_store/uploads/5/6/9/7/5/ar130013728657965.jpg";
})

document.addEventListener('scroll', () => {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('*').style.color = 'red';
  document.querySelector('.logo-heading').innerHTML = 'NIGHTMARE Bus';
  document.querySelector('.main-navigation').style.backgroundColor = 'black';
  document.querySelector('h2').style.fontSize = '8rem';
  document.querySelector('.intro').querySelector('h2').innerHTML = "Welcome to HECK";
  document.querySelector('p').innerHTML = "";

  document.querySelector('footer').querySelector('p').innerHTML = "Where we are, we don't need copyrights."
})

document.addEventListener('keydown', () => {
  const content = document.querySelectorAll('.content-section');
  for(let i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  }

  const destContent = document.querySelector('.content-destination')
  destContent.querySelector('h2').innerHTML = 'FINAL DESTINATION';
  destContent.querySelector('h2').style.fontSize = '5rem';
  destContent.querySelector('h2').style.marginTop = '50px';

  const dest = document.querySelectorAll('.destination');
  for(let i = 0; i < dest.length; i++) {
    dest[i].style.display = 'none';
  }  
})

document.addEventListener('keyup', () => {
  document.querySelector('.content-destination').querySelector('h2').style.display = 'none'
  const p = document.querySelector('.content-destination').querySelector('p')
  p.innerHTML = "There is no escape!"
  p.style.textAlign = 'center';
  p.style.fontSize = '5rem';
})

document.querySelector('.content-destination').querySelector('img').addEventListener('drag', event => {
  event.target.src = "https://1.bp.blogspot.com/-NBpOkk18wN0/U3YXzxvcGoI/AAAAAAAAEg8/EXKdm1vXfS0/s1600/Ghostly-PirateShip.jpg"
})

document.querySelectorAll('.img-content')[1].addEventListener('mouseover', event => {
  event.target.src = "https://i.pinimg.com/originals/37/53/12/37531259a938a9524d6a433fcee4ee94.jpg"
})