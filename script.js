document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
    const ratingDisplay = document.getElementById('rating-display');
    const submitButton = document.getElementById('submit-rating');
    const feedbackBox = document.getElementById('feedback');
    
    let currentRating = 0;

    // Hover effect
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const ratingValue = star.getAttribute('data-value');
            updateStarsOnHover(ratingValue);
        });

        star.addEventListener('mouseout', () => {
            updateStarsOnHover(currentRating);
        });

        star.addEventListener('click', () => {
            currentRating = star.getAttribute('data-value');
            ratingDisplay.textContent = currentRating;
            updateStarsOnClick(currentRating);
        });
    });

    // Update star color on hover
    function updateStarsOnHover(ratingValue) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= ratingValue) {
                star.classList.add('hover');
            } else {
                star.classList.remove('hover');
            }
        });
    }

    // Update star color on click
    function updateStarsOnClick(ratingValue) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= ratingValue) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Handle submit button click
    submitButton.addEventListener('click', () => {
        if (currentRating === 0) {
            alert('Please select a rating before submitting.');
        } else {
            const feedback = feedbackBox.value;
            alert(`Rating Submitted: ${currentRating} stars\nFeedback: ${feedback}`);
        }
    });
});


// Complain Box
function submitComplain() {
    alert('Your complaint has been submitted successfully!');
}

// User Rating Chart using Chart.js
const ctx = document.getElementById('userRatingChart').getContext('2d');
const userRatingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
        datasets: [{
            label: 'User Ratings',
            data: [10, 15, 30, 40, 50], // Example data
            backgroundColor: '#f39c12',
            borderColor: '#e67e22',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// JavaScript for toggling the mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
