document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            category.classList.toggle('active');
        });
    });
});