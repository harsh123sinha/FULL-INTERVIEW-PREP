// Select all topic headers
const topicHeaders = document.querySelectorAll('.topic-header');

topicHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Toggle the display of the next sibling element (the subtopics div)
        const subtopics = header.nextElementSibling;
        subtopics.style.display = subtopics.style.display === 'block' ? 'none' : 'block';
        
        // Optionally, you can add a rotation effect to the header to indicate open/close
        header.classList.toggle('active');
    });
});
