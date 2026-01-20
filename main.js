// Video card Preview 

const projects = [
    {
        title: "Channel Perfume",
        subtitle: "3D Perfume",
        image: "path/to/perfume.jpg",
        video: "path/to/perfume.mp4"
    },
    {
        title: "Encre Noire",
        subtitle: "3D Perfume Ad",
        image: "path/to/encre.jpg",
        video: "path/to/encre.mp4"
    }
    // Add more projects as needed
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <video muted loop>
            <source src="${project.video}" type="video/mp4">
        </video>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
        </div>
    `;

    const video = card.querySelector('video');
    
    card.addEventListener('mouseenter', () => {
        video.style.display = 'block';
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    return card;
}

const grid = document.getElementById('projectGrid');
projects.forEach(project => {
    grid.appendChild(createProjectCard(project));
});