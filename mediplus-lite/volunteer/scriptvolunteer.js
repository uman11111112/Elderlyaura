// Handle registration
document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
    const hours = document.getElementById('hours').value;
    const date = document.getElementById('date').value;

    const volunteer = { name, age, phone, email, skills, hours, date };

    // Save to localStorage
    let volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
    volunteers.push(volunteer);
    localStorage.setItem('volunteers', JSON.stringify(volunteers));

    // Redirect to volunteers.html
    window.location.href = 'volunteers.html';
});

// Display volunteers
window.onload = function() {
    const volunteerList = document.getElementById('volunteerList');
    let volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];

    volunteers.forEach((volunteer, index) => {
        const volunteerCard = document.createElement('div');
        volunteerCard.classList.add('volunteer-card');

        volunteerCard.innerHTML = `
            <h3>${volunteer.name}</h3>
            <p>Age: ${volunteer.age}</p>
            <p>Phone: ${volunteer.phone}</p>
            <p>Email: ${volunteer.email}</p>
            <p>Skills: ${volunteer.skills}</p>
            <p>Available Hours: ${volunteer.hours}</p>
            <p>Available Date: ${volunteer.date}</p>
            <button class="bookBtn" data-index="${index}">Book Now</button>
        `;

        volunteerList.appendChild(volunteerCard);
    });

    document.querySelectorAll('.bookBtn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Other information will be shared soon');
            const index = this.getAttribute('data-index');
            const email = volunteers[index].email;

            // Send email (simulated for now)
            console.log(`Sending email to: ${email}`);

            // Remove booked volunteer
            volunteers.splice(index, 1);
            localStorage.setItem('volunteers', JSON.stringify(volunteers));
            window.location.reload();
        });
    });
};
