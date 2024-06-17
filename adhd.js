document.addEventListener("DOMContentLoaded", function() {
    const pdfContainer = document.querySelector('.pdf-container');
    const pdfFiles = [
        'libs/pdfs/Kids-Like-Me-ADHD-eBook.pdf',
        'libs/pdfs/Lucky-horseshoes-ADHD.pdf',
        'libs/pdfs/TextbookOfSpecialEd.pdf',
        // Add more PDF filenames as needed
    ];

    let currentIndex = 0;

    // Function to load PDF into the PDF viewer container
    function loadPDF(pdfFile) {
        const iframe = document.createElement('iframe');
        iframe.src = pdfFile;
        iframe.width = '100%';
        iframe.height = '600px'; // Set a fixed height or adjust as needed
        iframe.frameBorder = '0';
        pdfContainer.innerHTML = ''; // Clear previous content
        pdfContainer.appendChild(iframe);
    }

    // Load the first PDF by default
    loadPDF(pdfFiles[currentIndex]);

    // Function to navigate to the previous PDF
    function goToPreviousPDF() {
        currentIndex = (currentIndex - 1 + pdfFiles.length) % pdfFiles.length;
        loadPDF(pdfFiles[currentIndex]);
    }

    // Function to navigate to the next PDF
    function goToNextPDF() {
        currentIndex = (currentIndex + 1) % pdfFiles.length;
        loadPDF(pdfFiles[currentIndex]);
    }

    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', goToPreviousPDF);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', goToNextPDF);

    // Append navigation buttons to container
    const navButtonsContainer = document.createElement('div');
    navButtonsContainer.classList.add('nav-buttons-container');
    navButtonsContainer.appendChild(prevButton);
    navButtonsContainer.appendChild(nextButton);
    document.querySelector('.container').appendChild(navButtonsContainer);
});
