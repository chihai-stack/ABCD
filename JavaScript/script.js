function openModal(imgSrc, captionText) {
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalCaption').innerText = captionText;
}
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}