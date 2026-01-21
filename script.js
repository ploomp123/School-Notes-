// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            updateActiveNav(this.getAttribute('href'));
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="${sectionId}"]`).classList.add('active');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        updateActiveNav('#' + sectionId);
    }
}

// Load content from JSON (optional)
// Uncomment below if you want to use a content.json file
/*
async function loadContent() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();
        
        // Populate notes
        const notesGrid = document.querySelectorAll('#notes .grid')[0];
        data.notes.forEach(note => {
            const card = createCard(note);
            notesGrid.appendChild(card);
        });

        // Populate projects
        const projectsGrid = document.querySelectorAll('#projects .grid')[0];
        data.projects.forEach(project => {
            const card = createCard(project);
            projectsGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${item.link ? `<a href="${item.link}" target="_blank">View More →</a>` : ''}
    `;
    return card;
}

// Uncomment to load content on page load
// loadContent();
*/
