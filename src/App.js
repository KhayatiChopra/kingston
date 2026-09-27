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
      color: '#f7f1e3',
      background: 'radial-gradient(circle at top, #2d2418 0%, #12110e 30%, #050505 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(120deg, rgba(212,175,55,0.08), rgba(255,255,255,0), rgba(212,175,55,0.06), rgba(255, 255, 255, 0))',
        pointerEvents: 'none',
      }} />
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(28,22,14,0.96), rgba(101,79,33,0.78), rgba(18,16,12,0.92))',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '0 0 14px rgba(212,175,55,0.45)',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(212,175,55,0.18)',
          boxShadow: '0 0 40px rgba(212,175,55,0.15)',
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
            style={{ fontSize: '4rem', marginBottom: 10, fontWeight: '700', letterSpacing: '0.15em', textShadow: '0 0 18px rgba(212,175,55,0.45)' }}
          >
            Kingston Resort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ fontSize: '1.6rem', fontWeight: '500', color: '#f5d88b' }}
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
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#f9e7a9', textShadow: '0 0 18px rgba(212,175,55,0.4)' }}
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
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(120,92,20,0.12), rgba(20,18,15,0.92))'
                  : 'linear-gradient(135deg, rgba(201,154,42,0.16), rgba(212,175,55,0.1), rgba(18,16,12,0.94))',
                borderRadius: '22px',
                padding: '1.6rem 2rem',
                boxShadow: '0 0 18px rgba(212,175,55,0.15), 0 12px 30px rgba(0,0,0,0.28)',
                cursor: 'default',
                userSelect: 'none',
                minHeight: 120,
                border: '1px solid rgba(212,175,55,0.18)',
              }}
              whileHover={{ scale: 1.03, y: -4, boxShadow: '0 0 28px rgba(212,175,55,0.22), 0 20px 45px rgba(0,0,0,0.34)' }}
            >
              <h3 style={{ color: '#f9e7a9', marginBottom: 8, fontSize: '1.5rem', textShadow: '0 0 12px rgba(212,175,55,0.25)' }}>{title}</h3>
              <p style={{ fontWeight: 500, fontSize: '1rem', color: '#f6e9c7' }}>{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Booking Info Section */}
      <section style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.18), rgba(24,18,10,0.96) 35%, rgba(8,8,8,1) 100%)', color: 'white', padding: '3rem 1.5rem', textAlign: 'center', boxShadow: 'inset 0 0 30px rgba(212,175,55,0.08)' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '1rem', fontSize: '2.8rem', textShadow: '0 0 24px rgba(212,175,55,0.3)' }}
        >
          Book Your Event
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{ maxWidth: 600, margin: '0 auto 1.5rem', fontSize: '1.3rem', fontWeight: '500', color: '#f6e9c7' }}
        >
          Whether it’s a small party gathering or a grand wedding event, Kingston Resort is your perfect venue for memorable moments.
        </motion.p>
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
            background: 'linear-gradient(135deg, #f4d27a 0%, #d4af37 25%, #8b6a1f 60%, #f9e7a9 100%)',
            borderRadius: '18px',
            color: '#1a1204',
            textDecoration: 'none',
            boxShadow: '0 0 22px rgba(212,175,55,0.35)',
            userSelect: 'none',
            cursor: 'pointer',
            marginRight: '12px',
          }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(212,175,55,0.45)' }}
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
            background: 'linear-gradient(135deg, rgba(212,175,55,0.95), rgba(145,110,30,0.95))',
            padding: '14px 34px',
            borderRadius: '30px',
            color: '#120d04',
            fontWeight: '700',
            fontSize: '1.2rem',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(212,175,55,0.25)',
            userSelect: 'none',
            cursor: 'pointer',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212,175,55,0.35)' }}
        >
          Contact Marketing Head: +91 9034246644
        </motion.a>
      </section>

      {/* Location Section */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: 'auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity:1, y:0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#f9e7a9', textShadow: '0 0 18px rgba(212,175,55,0.3)' }}
        >
          Find Us Here
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: '100%', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 24px rgba(212,175,55,0.2), 0 8px 30px rgba(0,0,0,0.35)', border: '1px solid rgba(212,175,55,0.18)' }}
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
        color: '#e2e8f0',
        fontSize: '0.9rem',
        background: 'linear-gradient(135deg, rgba(17,11,5,1) 0%, rgba(59,42,14,0.9) 40%, rgba(25,20,13,1) 100%)',
        marginTop: '3rem',
        borderTop: '1px solid rgba(212,175,55,0.18)',
        boxShadow: '0 0 25px rgba(212,175,55,0.1)',
      }}>
        © 2026 Kingston Resort, Kurukshetra
      </footer>

    </div>
  );
};

export default KingstonGallery;
