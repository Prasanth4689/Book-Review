function searchBook() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let reviews = document.querySelectorAll('.review');
    
    reviews.forEach(review => {
        let title = review.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
}
