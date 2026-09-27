import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder images inspired by Kingston Instagram themes (replace URLs with your actual images)
const galleryImages = [
  `${process.env.PUBLIC_URL}/Hero-Banner-1.png`,
  `${process.env.PUBLIC_URL}/Hero-Banner-1.png`,
  `${process.env.PUBLIC_URL}/Hero-Banner-1.png`
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
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      color: '#292929',
      background: 'radial-gradient(circle at top, #ffffff 0%, #f7f7f7 55%, #eeeeee 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0), rgba(230,230,230,0.12), rgba(255,255,255,0))',
        pointerEvents: 'none',
      }} />
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(245,245,245,0.96), rgba(220,220,220,0.78), rgba(250,250,250,0.92))',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '0 1px 12px rgba(0,0,0,0.35)',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0,0,0,0.12)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        <motion.img 
          key={galleryImages[currentIndex]}
          src={galleryImages[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top:0,
            left:0,
            zIndex: 1,
            filter: 'brightness(0.38) saturate(0.8)',
            userSelect: 'none',
          }}
        />
        <motion.div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px', padding: '0 1rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '4rem', marginBottom: 10, fontWeight: '700', letterSpacing: '0.15em', textShadow: '0 1px 14px rgba(0,0,0,0.45)' }}
          >
            Kingston Resort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ fontSize: '1.6rem', fontWeight: '500', color: '#f5f5f5' }}
          >
            Kurukshetra, India
          </motion.p>
        </motion.div>

        {/* Image Carousel Controls */}
        <motion.button 
          onClick={prevImage} 
          aria-label="Previous Image"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          style={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '50%',
            width: 46,
            height: 46,
            cursor: 'pointer',
            zIndex: 3,
            color:'#f8fafc',
            fontSize: '1.6rem',
            userSelect: 'none',
            backdropFilter: 'blur(6px)',
            boxShadow: '0 0 18px rgba(148,163,184,0.25)',
          }}
        >
          ‹
        </motion.button>
        <motion.button 
          onClick={nextImage} 
          aria-label="Next Image"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '50%',
            width: 46,
            height: 46,
            cursor: 'pointer',
            zIndex: 3,
            color:'#f8fafc',
            fontSize: '1.6rem',
            userSelect: 'none',
            backdropFilter: 'blur(6px)',
            boxShadow: '0 0 18px rgba(148,163,184,0.25)',
          }}
        >
          ›
        </motion.button>
      </motion.header>

      {/* Facilities Section */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 1100, margin: 'auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity:1, y:0 }} 
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#292929' }}
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
                background: index % 2 === 0
                  ? 'linear-gradient(135deg, #ffffff, #f4f4f4)'
                  : 'linear-gradient(135deg, #fafafa, #eeeeee)',
                borderRadius: '12px',
                padding: '1.6rem 2rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'default',
                userSelect: 'none',
                minHeight: 120,
                border: '1px solid #e2e2e2',
              }}
              whileHover={{ scale: 1.03, y: -4, boxShadow: '0 14px 32px rgba(0,0,0,0.14)' }}
            >
              <h3 style={{ color: '#292929', marginBottom: 8, fontSize: '1.5rem' }}>{title}</h3>
              <p style={{ fontWeight: 500, fontSize: '1rem', color: '#555555' }}>{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Booking Info Section */}
      <section style={{ background: 'linear-gradient(180deg, #f3f3f3, #ffffff)', color: '#292929', padding: '3rem 1.5rem', textAlign: 'center', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '1rem', fontSize: '2.8rem' }}
        >
          Book Your Event
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{ maxWidth: 600, margin: '0 auto 1.5rem', fontSize: '1.3rem', fontWeight: '500', color: '#555555' }}
        >
          Whether it’s a small party gathering or a grand wedding event, Kingston Resort is your perfect venue for memorable moments.
        </motion.p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <motion.a 
          href="https://www.instagram.com/kingston_lawns_banquet"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            background: '#ffffff',
            borderRadius: '12px',
            color: '#333333',
            textDecoration: 'none',
            boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
            border: '1px solid #dddddd',
            userSelect: 'none',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }}
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
          </svg>
        </motion.a>
        <motion.a 
          href="tel:+919034246644" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{
            display: 'inline-block',
            background: '#ffffff',
            padding: '12px 20px',
            borderRadius: '12px',
            color: '#292929',
            fontWeight: '700',
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            border: '1px solid #d8d8d8',
            userSelect: 'none',
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.16)' }}
        >
          Contact Marketing Head: +91 9034246644
        </motion.a>
        </div>
      </section>

      {/* Location Section */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: 'auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity:1, y:0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#292929' }}
        >
          Find Us Here
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: '100%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 28px rgba(0,0,0,0.12)', border: '1px solid #e0e0e0' }}
        >
          <iframe
            title="Kingston Resort Location"
            src="https://www.google.com/maps?q=30.0071194,76.8851647&z=17&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        color: '#555555',
        fontSize: '0.9rem',
        background: 'linear-gradient(135deg, #f2f2f2, #ffffff 55%, #eeeeee)',
        marginTop: '3rem',
        borderTop: '1px solid #dddddd',
        boxShadow: '0 -4px 18px rgba(0,0,0,0.04)',
      }}>
        © 2026 Kingston Resort, Kurukshetra
      </footer>

    </div>
  );
};

export default KingstonGallery;
