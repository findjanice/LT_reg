//Creates Login

const initiateLogin = document.querySelector('.login-form');
initiateLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = initiateLogin.querySelector('.username').value;
  const password = initiateLogin.querySelector('.password').value;
  post('/initiateLogin', {username, password});
})

//Creates Camper Entry
const createCamper = document.querySelector('.createCamper');
createCamper.addEventListener('submit', (e) => {
  e.preventDefault();
  const first_name = createCamper.querySelector('.first_name').value;
  const middle_name = createCamper.querySelector('.middle_name').value;
  const last_name = createCamper.querySelector('.last_name').value;
  const gender = createCamper.querySelector('.gender').value;
  const date_of_birth = createCamper.querySelector('.date_of_birth').value;
  const roommates = createCamper.querySelector('.roommates').value;
  const email = createCamper.querySelector('.email').value;
  const phone = createCamper.querySelector('.phone').value;
  post ('/createCamper', {first_name, middle_name, last_name, gender,
    date_of_birth, roommates, email, phone});
})

//sends POST request to index.js

function post (path, data){
    console.log('data', data);
  return window.fetch(path,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res=> res.json())
  .then(data => console.log(data))
}
