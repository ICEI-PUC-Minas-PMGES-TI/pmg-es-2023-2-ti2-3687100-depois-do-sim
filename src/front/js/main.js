document.addEventListener('DOMContentLoaded', function() {
    
    const weddingId = localStorage.getItem('weddingId');

    if (weddingId) {
        const giftLink = document.getElementById('giftLink');
        const photoAlbumLink = document.getElementById('photoAlbumLink');

        const urlGiftWithWeddingId = `registerGifts.html?wedding_id=${weddingId}`;
        const urlPhotoAlbumWithWeddingId = `photoAlbum.html?wedding_id=${weddingId}`;

        giftLink.href = urlGiftWithWeddingId;
        photoAlbumLink.href = urlPhotoAlbumWithWeddingId;

    }

});