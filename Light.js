document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.image-container img');
    
    // Add click event to each image
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        
        // Get caption from image-info h3
        const imageContainer = this.closest('.image-container');
        const caption = imageContainer.querySelector('.image-info h3').textContent;
        captionText.innerHTML = caption;
        
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Calculate and set appropriate image display size
        const img = new Image();
        img.onload = function() {
          const windowRatio = window.innerWidth / window.innerHeight;
          const imageRatio = img.width / img.height;
          
          if (windowRatio > imageRatio) {
            // Window is wider than image aspect ratio
            modalImg.style.width = 'auto';
            modalImg.style.height = '80vh';
          } else {
            // Window is taller than image aspect ratio
            modalImg.style.width = '90%';
            modalImg.style.height = 'auto';
          }
        };
        img.src = this.src;
      });
    });
    
    // Get close button
    const closeBtn = document.querySelector('.close');
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside image
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
      }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
      }
    });
  });