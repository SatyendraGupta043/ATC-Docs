document.addEventListener("DOMContentLoaded", function () {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const url = 'SID_STAR_West/SID_STAR_W_NL.pdf'; 

    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdf.getPage(1).then(page => {
            const canvas = document.getElementById('pdf-canvas');
            const context = canvas.getContext('2d');

            // --- HIGH RESOLUTION SETTINGS ---
            // Scale 4.0 or 5.0 provides print-quality sharpness for zooming
            const scale = 4.0; 
            const viewport = page.getViewport({ scale: scale });

            // Set the internal drawing resolution
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Keep the display size manageable in the browser via CSS
            canvas.style.width = "100%"; 
            canvas.style.height = "auto";

            const renderTask = page.render({
                canvasContext: context,
                viewport: viewport,
            });

            renderTask.promise.then(() => {
                console.log("High-res render complete.");
                // Optional: Automatically trigger conversion to image
                // convertCanvasToImage(canvas); 
            });
        });
    });
});


function downloadCanvasAsImage() {
    const canvas = document.getElementById('pdf-canvas');
    
    // Change to 'image/jpeg' and 0.9 for a high-quality JPG
    const imageURL = canvas.toDataURL("image/png"); 
    
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'high-res-chart.png';
    link.click();
}