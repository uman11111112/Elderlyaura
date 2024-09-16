document.addEventListener('DOMContentLoaded', function() {
    let volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
    let volunteerList = document.getElementById('volunteers');
    
    volunteers.forEach(function(volunteer) {
       let volunteerCard = `
          <div class="volunteer">
             <img src="${URL.createObjectURL(volunteer.photo)}" alt="${volunteer.name}">
             <h3>${volunteer.name}</h3>
             <p>${volunteer.bio}</p>
             <p><strong>Skills:</strong> ${volunteer.skills}</p>
             <button>Book This Volunteer</button>
          </div>
       `;
       volunteerList.innerHTML += volunteerCard;
    });
 });
 