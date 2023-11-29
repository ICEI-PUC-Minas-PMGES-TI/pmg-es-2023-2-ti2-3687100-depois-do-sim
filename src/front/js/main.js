document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = "http://localhost:8080";

    const weddingId = localStorage.getItem('weddingId');
    const token = localStorage.getItem("Authorization");

    if (weddingId) {
        const giftLink = document.getElementById('giftLink');
        const photoAlbumLink = document.getElementById('photoAlbumLink');
        const guestLink = document.getElementById('guestLink');
        const budgetLink = document.getElementById('budgetLink');

        const urlGiftWithWeddingId = `registerGifts.html?wedding_id=${weddingId}`;
        const urlPhotoAlbumWithWeddingId = `photoAlbum.html?wedding_id=${weddingId}`;
        const urlGuestWithWeddingId = `confirmacaoDePresenca.html?wedding_id=${weddingId}`;
        const urlBudgetWithWeddingId = `orcamento.html?wedding_id=${weddingId}`;

        giftLink.href = urlGiftWithWeddingId;
        photoAlbumLink.href = urlPhotoAlbumWithWeddingId;
        guestLink.href = urlGuestWithWeddingId;
        budgetLink.href = urlBudgetWithWeddingId;
    }

});