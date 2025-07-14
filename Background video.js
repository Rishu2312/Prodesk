document.addEventListener('DOMContentLoaded', function() {
    // Generate random positions for bubbles
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        const randomPos = Math.random();
        bubble.style.setProperty('--random', randomPos);
    });

    // Pre-loader simulation
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
    }, 3000); // 3 seconds for demonstration
    
    // Video control functionality
    const video = document.getElementById('bg-video');
    const videoControl = document.getElementById('video-control');
    
    videoControl.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoControl.innerHTML = '<i class="fas fa-pause"></i> Pause Colors';
            video.muted = false;
        } else {
            video.pause();
            videoControl.innerHTML = '<i class="fas fa-play"></i> Play Colors';
        }
    });
    
    // Ensure video plays when page is loaded
    video.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        videoControl.innerHTML = '<i class="fas fa-play"></i> Play Colors';
    });

    // Add ripple effect to button
    videoControl.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});
