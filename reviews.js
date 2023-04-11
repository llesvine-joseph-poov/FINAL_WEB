document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewForm = document.getElementById('review-form');

    function createReviewCard(review) {
        const card = document.createElement('div');
        card.className = 'review-card';

        const name = document.createElement('h3');
        name.textContent = review.name;
        card.appendChild(name);

        const date = document.createElement('p');
        date.textContent = new Date(review.date).toLocaleDateString();
        card.appendChild(date);

        const rating = document.createElement('p');
        for (let i = 0; i < review.rating; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            rating.appendChild(star);
        }
        for (let i = review.rating; i < 5; i++) {
            const star = document.createElement('span');
            star.textContent = '☆';
            rating.appendChild(star);
        }
        card.appendChild(rating);

        const text = document.createElement('p');
        text.textContent = review.text;
        card.appendChild(text);

        return card;
    }

    function displayReviews() {
        reviewsContainer.innerHTML = '';
        for (const review of window.reviewData) {
            const card = createReviewCard(review);
            reviewsContainer.appendChild(card);
        }
    }

    function addReview(event) {
        event.preventDefault();

        const newReview = {
            name: document.getElementById('reviewer-name').value,
            date: document.getElementById('review-date').value,
            rating: parseInt(document.getElementById('review-rating').value),
            text: document.getElementById('review-text').value,
        };

        window.reviewData.push(newReview);
        displayReviews();

        reviewForm.reset();
    }

    reviewForm.addEventListener('submit', addReview);

    displayReviews();
});
