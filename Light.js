
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
    
    // Maintain aspect ratio of modal image on resize
    window.addEventListener('resize', function() {
      if (modal.style.display === "block") {
        const img = new Image();
        img.src = modalImg.src;
        const ratio = img.width / img.height;
        
        if (window.innerWidth / window.innerHeight > ratio) {
          modalImg.style.width = 'auto';
          modalImg.style.height = '80vh';
        } else {
          modalImg.style.width = '90%';
          modalImg.style.height = 'auto';
        }
      }
    });
  });