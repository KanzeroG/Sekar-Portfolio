    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add skill progress bars
    document.querySelectorAll('.skill-list li').forEach(skill => {
        const text = skill.textContent;
        const randomProgress = Math.floor(Math.random() * 30) + 70; // Random number between 70-100
        skill.innerHTML = `
            <span>${text}</span>
            <div class="skill-progress">
                <div class="skill-progress-bar" style="width: ${randomProgress}%"></div>
            </div>
        `;
    });