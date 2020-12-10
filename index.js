// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log(updateDOM());
  }); 

  function updateDOM() {
    const text = document.getElementById('text').textContent = 'This is really cool!';
  }