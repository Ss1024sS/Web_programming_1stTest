const albumCovers = [
    'album1.jpg', 
    'album2.jpg', 
    'album3.jpg', 
    'album4.jpg', 
    'album5.jpg', 
    'album6.jpg', 
    'album7.jpg', 
    'album8.jpg', 
    'album9.jpg',
];
let currentCoverIndex = 0;

function preloadAlbumCovers() {
    albumCovers.forEach(cover => {
        const img = new Image();
        img.src = cover;
    });
}

function changeAlbumCovers() {
    for (let i = 1; i <= 3; i++) {
        const albumElement = document.getElementById(`album${i}`);
        let coverIndex = (currentCoverIndex + i - 1) % albumCovers.length;
        albumElement.style.backgroundImage = `url('${albumCovers[coverIndex]}')`;
    }

    currentCoverIndex = (currentCoverIndex + 3) % albumCovers.length;
    setTimeout(changeAlbumCovers, 3000); // 每3秒更换一组封面
}

changeAlbumCovers();

document.addEventListener('DOMContentLoaded', () => {
    preloadAlbumCovers();
    changeAlbumCovers();
    positionEmojisRandomly();
});

function positionEmojisRandomly() {
    const container = document.getElementById('emojiContainer');
    const emojis = container.getElementsByClassName('emoji-button');
    const containerRect = container.getBoundingClientRect();

    for (let emoji of emojis) {
        const x = Math.random() * containerRect.width;
        const y = Math.random() * containerRect.height;
        emoji.style.left = x + 'px';
        emoji.style.top = y + 'px';
    }
}
