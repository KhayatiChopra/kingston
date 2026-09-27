import React from 'react';
import { motion } from 'framer-motion';

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

const KingstonResort = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#2c3e50', lineHeight: '1.6' }}>
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url('https://lh5.googleusercontent.com/p/AF1QipPcB-oGgAzhAMebfUWr1JNiYsAOBRfRowQcVEOE=s1360-w1360-h1020')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
        }}
      >
        <h1 style={{ fontSize: '3.8rem', margin: 0, letterSpacing: '0.12em' }}>Kingston Resort</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '0.4rem' }}>Kurukshetra, India</p>
      </motion.header>

      {/* What’s Available Section */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: 'auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity:1, y:0 }} 
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#34495e' }}
        >
          What We Offer
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
                userSelect: 'none'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
            >
              <h3 style={{ color: '#2c3e50' }}>{title}</h3>
              <p style={{ fontWeight: 500 }}>{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Booking and Contact Section */}
      <section style={{ backgroundColor: '#34495e', color: 'white', padding: '3rem 1.5rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 900, margin: 'auto', textAlign: 'center' }}
        >
          <h2>Host Your Event with Us</h2>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', maxWidth: 650, margin: '1rem auto' }}>
            From intimate small party gatherings to lavish wedding events, Kingston Resort offers the perfect venue with outstanding hospitality.
          </p>

          <a href="tel:+911234567890" style={{ 
            display: 'inline-block', 
            marginTop: '20px', 
            backgroundColor: '#e67e22', 
            padding: '12px 28px', 
            borderRadius: '30px', 
            color: 'white', 
            fontWeight: '700',
            textDecoration: 'none',
            fontSize: '1.2rem'
          }}>
            Contact Marketing Head: +91 12345 67890
          </a>
        </motion.div>
      </section>

      {/* Google Location */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity:1, y:0 }} 
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: '2rem', color: '#34495e' }}
        >
          Find Us Here
        </motion.h2>

        <div style={{ maxWidth: 900, margin: 'auto', boxShadow: '0 8px 30px rgba(0,0,0,0.2)', borderRadius: '16px', overflow: 'hidden' }}>
          <iframe
            title="Kingston Resort Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.210682899436!2d76.81417531509347!3d29.969482682014504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef7499dc678c3%3A0x2719fa9a316bed36!2sKurukshetra%2C%20Haryana%20136001%2C%20India!5e0!3m2!1sen!2sus!4v1695805101234!5m2!1sen!2sus"
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

export default KingstonResort;
