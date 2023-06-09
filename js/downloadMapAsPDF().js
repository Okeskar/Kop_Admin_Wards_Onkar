function downloadMapAsPDF() {
  // Get the map element
  const mapElement = document.getElementById('map');

  // Create a new jsPDF instance
  const doc = new jsPDF('landscape');

  // Convert the map element to an image using html2canvas
  html2canvas(mapElement).then(function (canvas) {
    const imageData = canvas.toDataURL('image/jpeg');

    // Add the image to the PDF
    doc.addImage(imageData, 'JPEG', 10, 10, 250, 180);

    // Save the PDF
    doc.save('map.pdf');
  });
}
