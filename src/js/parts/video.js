const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            playVideo(entry.target);
        }
    })
});

function playVideo(video) {
    if (video) {
        video.play();
    }
}

const videos = document.querySelectorAll('._video');

export const playVideoAction = () => {
    if (!videos.length) return;

    videos.forEach(video => {
        observer.observe(video);
    })
}

const personVideo = document.querySelector('._person');
if (personVideo) {
    const video = personVideo.querySelector('video');
    personVideo.addEventListener('click', () => {
        personVideo.classList.toggle('_active')
        if (personVideo.classList.contains('_active')) {
            video.play();
        }
        else {
            let src = video.currentSrc;
            video.pause();

            setTimeout(() => {
                video.src = '';
                video.src = src;
            }, 300);
        }
    })
}