import React, { useState } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      src: '/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg',
      alt: 'Avocado toast with soft-boiled eggs and spinach',
      description: 'Artisanal avocado toast with perfectly soft-boiled eggs and fresh spinach on rustic bread'
    },
    {
      id: 2,
      src: '/lidye-1Shk_PkNkNw-unsplash.jpg',
      alt: 'Gourmet burger with knife',
      description: 'Premium beef burger on a sesame seed bun with special sauce and fresh vegetables'
    },
    {
      id: 3,
      src: '/alex-munsell-auIbTAcSH6E-unsplash.jpg',
      alt: 'Steak with broccoli and sauce',
      description: 'Pan-seared steak with red wine reduction, steamed broccoli, and butter-poached shrimp'
    },
    {
      id: 4,
      src: '/alex-munsell-Yr4n8O_3UPc-unsplash.jpg',
      alt: 'Pork chop with roasted vegetables',
      description: 'Thick-cut pork chop with caramelized apple topping, served with broccolini and roasted potatoes'
    },
    {
      id: 5,
      src: '/casey-lee-awj7sRviVXo-unsplash.jpg',
      alt: 'Salmon with cucumber salsa',
      description: 'Seared salmon fillet over wilted spinach with cucumber-dill salsa and balsamic reduction'
    },
    {
      id: 6,
      src: '/annie-spratt-R3LcfTvcGWY-unsplash.jpg',
      alt: 'Pears and cheese platter',
      description: 'Artisan cheese platter with fresh pears, nuts, and honey drizzle'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="page">
      <h1 className="page-title">Gallery</h1>
      
      <div className="content-section intro-section">
        <p>
          Explore a selection of culinary creations that showcase the passion, creativity, 
          and attention to detail that goes into every dish. Each plate tells a story of 
          flavor, technique, and artistic presentation.
        </p>
      </div>
      
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
            <div className="image-container">
              <img src={image.src} alt={image.alt} />
              <div className="image-overlay">
                <div className="image-title">{image.alt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-description">
              <h3>{selectedImage.alt}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}