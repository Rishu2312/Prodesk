document.addEventListener('DOMContentLoaded', function() {
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');
    const dayElement = document.querySelector('.day');
    const monthElement = document.querySelector('.month');
    const dateElement = document.querySelector('.date');
    const yearElement = document.querySelector('.year');
    const themeBtn = document.getElementById('theme-btn');
    const bgElement = document.querySelector('.colorful-bg');
    const particlesElement = document.querySelector('.particles');
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Color themes
    const themes = [
        { primary: '#3498db', secondary: '#2ecc71', accent: '#e74c3c', bg1: '#8E2DE2', bg2: '#4A00E0' },
        { primary: '#9b59b6', secondary: '#1abc9c', accent: '#e67e22', bg1: '#FF416C', bg2: '#FF4B2B' },
        { primary: '#f1c40f', secondary: '#e74c3c', accent: '#3498db', bg1: '#4776E6', bg2: '#8E54E9' },
        { primary: '#2ecc71', secondary: '#3498db', accent: '#f39c12', bg1: '#1D976C', bg2: '#93F9B9' }
    ];
    let currentTheme = 0;
    
    // Create particles
    function createParticles() {
        const particlesCount = 50;
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particlesElement.appendChild(particle);
        }
    }
    
    // Update clock
    function updateClock() {
        const now = new Date();
        
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
        
        dayElement.textContent = days[now.getDay()];
        monthElement.textContent = months[now.getMonth()];
        dateElement.textContent = now.getDate();
        yearElement.textContent = now.getFullYear();
        
        // Add color pulse effect on seconds change
        if(seconds === '00') {
            document.documentElement.style.setProperty('--primary-color', themes[currentTheme].primary);
            document.documentElement.style.setProperty('--secondary-color', themes[currentTheme].secondary);
            document.documentElement.style.setProperty('--accent-color', themes[currentTheme].accent);
        }
    }
    
    // Change theme
    function changeTheme() {
        currentTheme = (currentTheme + 1) % themes.length;
        const theme = themes[currentTheme];
        
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        document.documentElement.style.setProperty('--accent-color', theme.accent);
        document.documentElement.style.setProperty('--bg-gradient-1', theme.bg1);
        document.documentElement.style.setProperty('--bg-gradient-2', theme.bg2);
    }
    
    // Initialize
    createParticles();
    updateClock();
    setInterval(updateClock, 1000);
    themeBtn.addEventListener('click', changeTheme);
    
    // Add floating animation to clock container
    const clockContainer = document.querySelector('.clock-container');
    let floatY = 0;
    let floatX = 0;
    let floatYDirection = 1;
    let floatXDirection = 1;
    
    function floatAnimation() {
        floatY += 0.05 * floatYDirection;
        floatX += 0.03 * floatXDirection;
        
        if (Math.abs(floatY) > 5) floatYDirection *= -1;
        if (Math.abs(floatX) > 5) floatXDirection *= -1;
        
        clockContainer.style.transform = `translate(${floatX}px, ${floatY}px)`;
        requestAnimationFrame(floatAnimation);
    }
    
    floatAnimation();
});