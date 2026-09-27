import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder images inspired by Kingston Instagram themes (replace URLs with your actual images)
const galleryImages = [
  '/Hero-Banner-1.png',
  'https://images.unsplash.com/photo-1486308510493-cb62d6caab73?auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1523882457596-4e982ee59e4d?auto=format&fit=crop&w=1052&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1050&q=80',
];

const facilities = [
  { title: 'Luxurious Rooms & Suites', description: 'Comfortable stay with elegant decor and modern amenities.' },
  { title: 'Banquet Hall', description: 'Spacious hall ideal for weddings and large gatherings.' },
  { title: 'Outdoor Garden', description: 'Beautiful landscaped gardens perfect for parties and photoshoots.' },
  { title: 'Multi Cuisine Restaurant', description: 'Diverse menu to delight your taste buds.' },
  { title: 'Swimming Pool', description: 'Enjoy a refreshing swim in our clean and spacious pool.' },
  { title: 'Conference Facilities', description: 'Fully equipped conference rooms for corporate events.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const KingstonGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  };
  
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#2c3e50' }}>
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          backgroundColor: '#34495e',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
          overflow: 'hidden',
        }}
      >
        <motion.img 
          key={galleryImages[currentIndex]}
          src={galleryImages[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top:0,
            left:0,
            zIndex: 1,
            filter: 'brightness(0.6)',
            userSelect: 'none',
          }}
        />
        <motion.div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: 10, fontWeight: '700', letterSpacing: '0.15em' }}>Kingston Resort</h1>
          <p style={{ fontSize: '1.6rem', fontWeight: '500' }}>Kurukshetra, India</p>
        </motion.div>

        {/* Image Carousel Controls */}
        <button 
          onClick={prevImage} 
          aria-label="Previous Image"
          style={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            borderRadius: '50%',
            width: 44,
            height: 44,
            cursor: 'pointer',
            zIndex: 3,
            color:'#34495e',
            fontSize: '1.5rem',
            userSelect: 'none',
          }}
        >
          ‹
        </button>
        <button 
          onClick={nextImage} 
          aria-label="Next Image"
          style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            borderRadius: '50%',
            width: 44,
            height: 44,
            cursor: 'pointer',
            zIndex: 3,
            color:'#34495e',
            fontSize: '1.5rem',
            userSelect: 'none',
          }}
        >
          ›
        </button>
      </motion.header>

      {/* Facilities Section */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: 'auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity:1, y:0 }} 
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#34495e' }}
        >
          Facilities & Amenities
        </motion.h2>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants} 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.8rem' }}
        >
          {facilities.map(({title, description}, index) => (
            <motion.div 
              variants={itemVariants} 
              key={index} 
              style={{
                backgroundColor: '#ecf0f1',
                borderRadius: '18px',
                padding: '1.6rem 2rem',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                cursor: 'default',
                userSelect: 'none',
                minHeight: 120,
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
            >
              <h3 style={{ color: '#2c3e50', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontWeight: 500, fontSize: '1rem' }}>{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Booking Info Section */}
      <section style={{ backgroundColor: '#34495e', color: 'white', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '1rem' }}
        >
          Book Your Event
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{ maxWidth: 600, margin: '0 auto 1.5rem', fontSize: '1.3rem', fontWeight: '500' }}
        >
          Whether it’s a small party gathering or a grand wedding event, Kingston Resort is your perfect venue for memorable moments.
        </motion.p>
        <motion.a 
          href="tel:+911234567890" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{
            display: 'inline-block',
            backgroundColor: '#e67e22',
            padding: '14px 34px',
            borderRadius: '30px',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.2rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(230,126,34,0.6)',
            userSelect: 'none',
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(230,126,34,0.9)' }}
        >
          Contact Marketing Head: +91 12345 67890
        </motion.a>
      </section>

      {/* Location Section */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: 'auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity:1, y:0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#34495e' }}
        >
          Find Us Here
        </motion.h2>

        <div style={{ width: '100%', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
          <iframe
            title="Kingston Resort Location"
            src="https://www.google.com/maps/place/Kingston+Banquet+,rooms+And+Event+Center/@30.0071194,76.8851647,17z/data=!4m16!1m9!3m8!1s0x390e46f621b0e389:0xf7165902e0bcc98e!2sKingston+Banquet+,rooms+And+Event+Center!8m2!3d30.0071148!4d76.8877396!9m1!1b1!16s%2Fg%2F11cnx8t1bm!3m5!1s0x390e46f621b0e389:0xf7165902e0bcc98e!8m2!3d30.0071148!4d76.8877396!16s%2Fg%2F11cnx8t1bm?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        color: '#7f8c8d',
        fontSize: '0.9rem',
        backgroundColor: '#ecf0f1',
        marginTop: '3rem',
      }}>
        © 2026 Kingston Resort, Kurukshetra
      </footer>

    </div>
  );
};

export default KingstonGallery;
