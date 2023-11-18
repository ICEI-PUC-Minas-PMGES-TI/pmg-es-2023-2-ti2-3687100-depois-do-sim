document.addEventListener('DOMContentLoaded', function() {
    const weddingId = localStorage.getItem('weddingId');

    if (weddingId) {
        const giftLink = document.getElementById('giftLink');

        const urlWithWeddingId = `registerGifts.html?wedding_id=${weddingId}`;

        giftLink.href = urlWithWeddingId;
    }
});