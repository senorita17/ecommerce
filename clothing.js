// Add your clothing-specific JavaScript here

function showDetails(itemId) {
    var detailsElement = document.getElementById('details' + itemId.slice(4));
    if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
        detailsElement.style.display = 'block';
    } else {
        detailsElement.style.display = 'none';
    }
}
