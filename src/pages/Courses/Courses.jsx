
// // export default CoursesPage;
// import './Courses.css';

// const CoursesPage = () => {
//     return (
//         <div className="page-container">

//             {/* Hero Section */}
//             <section className="hero-section">
//                 <div className="hero-image-wrapper">
//                     <img src="/images/sleep-healing.jpg" alt="Hero" className="hero-image" />
//                     <div className="hero-overlay" />
//                     <h2 className="hero-title">COURSES</h2>
//                 </div>
//             </section>

//             {/* Healing Series */}
//             <section className="box healing-box">
//                 <h2 className="section-title">Healing Series</h2>
//                 <div className="circle-carousel">
//                     <div className="circle"><img src="/images/healing1.jpg" alt="Healing 1" /></div>
//                     <div className="circle"><img src="/images/healing2.jpg" alt="Healing 2" /></div>
//                     <div className="circle"><img src="/images/healing3.jpg" alt="Healing 3" /></div>
//                 </div>

//                 <div className="content">
//                     <div className="quote-box">
//                         <p><em>“Pranic Healing is a bridge to spirituality”</em><br />– GMCKS</p>
//                         <p>
//                             The Healing Series in Pranic Healing restores physical, emotional, and spiritual balance. Using ancient principles and modern tools, it empowers self-healing and transformation.
//                         </p>
//                         <p>
//                             At Radiant Pranic Healing Center, we believe that healing is more than recovery—it’s transformation from within.
//                         </p>
//                     </div>
//                     <div className="links-box">
//                         <ul>
//                             <li><a href="#">Self Pranic Healing</a></li>
//                             <li><a href="#">Basic Pranic Healing</a></li>
//                             <li><a href="#">Advanced Pranic Healing</a></li>
//                             <li><a href="#">Pranic Psychotherapy</a></li>
//                             <li><a href="#">Pranic Crystal Healing</a></li>
//                             <li><a href="#">Facial & Body Sculpting</a></li>
//                             <li><a href="#">Psychic Self Defence</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>

//             {/* Spiritual Series */}
//             <section className="box spiritual-box">
//                 <h2 className="section-title">Spiritual Series</h2>
//                 <div className="circle-carousel">
//                     <div className="circle"><img src="/images/spiritual1.jpg" alt="Spiritual 1" /></div>
//                     <div className="circle"><img src="/images/spiritual2.jpg" alt="Spiritual 2" /></div>
//                     <div className="circle"><img src="/images/spiritual3.jpg" alt="Spiritual 3" /></div>
//                 </div>

//                 <div className="content">
//                     <div className="quote-box">
//                         <p><em>"Spirituality is a way of life. It is not just doing meditation."<br />– GMCKS</em></p>
//                         <p>
//                             In Pranic Healing, spirituality means conscious awakening. It aligns you with inner light and higher truths—beyond rituals and ego.
//                         </p>
//                         <p>
//                             Discover the soul’s divine purpose and live with compassion, service, and love.
//                         </p>
//                     </div>
//                     <div className="links-box">
//                         <ul>
//                             <li><a href="#">Achieving Oneness with the Higher Soul</a></li>
//                             <li><a href="#">Arhatic Yoga Preparatory</a></li>
//                             <li><a href="#">Om Mani Padme Hum</a></li>
//                             <li><a href="#">Spiritual Essence of Man</a></li>
//                             <li><a href="#">Meditation on the Lord's Prayer</a></li>
//                             <li><a href="#">Inner Hinduism Techniques</a></li>
//                             <li><a href="#">Inner Buddhism Techniques</a></li>
//                             <li><a href="#">Inner Christianity Techniques</a></li>
//                             <li><a href="#">Arhatic Sexual Alchemy</a></li>
//                             <li><a href="#">Higher Clairvoyance</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>

//             {/* Prosperity Series */}
//             <section className="box prosperity-box">
//                 <h2 className="section-title">Prosperity Series</h2>
//                 <div className="circle-carousel">
//                     <div className="circle"><img src="/images/prosperity1.jpg" alt="Prosperity 1" /></div>
//                     <div className="circle"><img src="/images/prosperity2.jpg" alt="Prosperity 2" /></div>
//                     <div className="circle"><img src="/images/prosperity3.jpg" alt="Prosperity 3" /></div>
//                 </div>

//                 <div className="content">
//                     <div className="quote-box">
//                         <p><em>“Prosperity is a result of service and the intelligent application of energy.”<br />– GMCKS</em></p>
//                         <p>
//                             Abundance flows when energy is clear, focused, and aligned. Pranic Prosperity teachings guide you to cleanse mental blocks and attract opportunities.
//                         </p>
//                         <p>
//                             Shift inner energy, and manifest material and spiritual wealth with ease.
//                         </p>
//                     </div>
//                     <div className="links-box">
//                         <ul>
//                             <li><a href="#">Spiritual Business Management</a></li>
//                             <li><a href="#">Kriyashakti</a></li>
//                             <li><a href="#">Success & Energy Techniques</a></li>
//                             <li><a href="#">Removing Financial Blocks</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default CoursesPage;
// import { useEffect } from 'react';
// import './Courses.css';

// const CoursesPage = () => {
//   useEffect(() => {
//     // Animation trigger for scroll effects
//     const animateOnScroll = () => {
//       const elements = document.querySelectorAll('.box');
//       elements.forEach(el => {
//         const elementPosition = el.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
        
//         if (elementPosition < windowHeight - 100) {
//           el.classList.add('animate');
//         }
//       });
//     };

//     window.addEventListener('scroll', animateOnScroll);
//     animateOnScroll(); // Run once on load
//     return () => window.removeEventListener('scroll', animateOnScroll);
//   }, []);

//   return (
//     <div className="page-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-image-wrapper">
//           <img 
//             src="/images/sleep-healing.jpg" 
//             alt="Pranic Healing Courses" 
//             className="hero-image" 
//             loading="eager"
//           />
//           <div className="hero-overlay" />
//           <div className="hero-content">
//             <h2 className="hero-title">COURSES</h2>
//             <p className="hero-subtitle">Transform your life through ancient healing wisdom</p>
//           </div>
//         </div>
//       </section>

//       {/* Healing Series */}
//       <section className="box healing-box">
//         <h2 className="section-title">Healing Series</h2>
        
//         <div className="circle-carousel">
//           {[1, 2, 3].map((num) => (
//             <div key={num} className="circle">
//               <img 
//                 src={`/images/healing${num}.jpg`} 
//                 alt={`Healing ${num}`} 
//                 className="circle-image"
//                 loading="lazy"
//               />
//               <div className="circle-overlay"></div>
//             </div>
//           ))}
//         </div>

//         <div className="content">
//           <div className="quote-box">
//             <div className="quote-mark">"</div>
//             <p className="quote-text"><em>Pranic Healing is a bridge to spirituality</em></p>
//             <p className="quote-author">– GMCKS</p>
//             <div className="quote-content">
//               <p>The Healing Series in Pranic Healing restores physical, emotional, and spiritual balance. Using ancient principles and modern tools, it empowers self-healing and transformation.</p>
//               <p>At Radiant Pranic Healing Center, we believe that healing is more than recovery—it's transformation from within.</p>
//             </div>
//           </div>
          
//           <div className="links-box">
//             <h3 className="links-title">Available Courses</h3>
//             <ul className="course-links">
//               {['Self Pranic Healing', 'Basic Pranic Healing', 'Advanced Pranic Healing', 
//                 'Pranic Psychotherapy', 'Pranic Crystal Healing', 'Facial & Body Sculpting', 
//                 'Psychic Self Defence'].map((course) => (
//                 <li key={course}>
//                   <a href="#" className="course-link">
//                     <span className="link-icon">✦</span>
//                     {course}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Spiritual Series */}
//       <section className="box spiritual-box">
//         <h2 className="section-title">Spiritual Series</h2>
        
//         <div className="circle-carousel">
//           {[1, 2, 3].map((num) => (
//             <div key={num} className="circle">
//               <img 
//                 src={`/images/spiritual${num}.jpg`} 
//                 alt={`Spiritual ${num}`} 
//                 className="circle-image"
//                 loading="lazy"
//               />
//               <div className="circle-overlay"></div>
//             </div>
//           ))}
//         </div>

//         <div className="content">
//           <div className="quote-box">
//             <div className="quote-mark">"</div>
//             <p className="quote-text"><em>Spirituality is a way of life. It is not just doing meditation.</em></p>
//             <p className="quote-author">– GMCKS</p>
//             <div className="quote-content">
//               <p>In Pranic Healing, spirituality means conscious awakening. It aligns you with inner light and higher truths—beyond rituals and ego.</p>
//               <p>Discover the soul's divine purpose and live with compassion, service, and love.</p>
//             </div>
//           </div>
          
//           <div className="links-box">
//             <h3 className="links-title">Available Courses</h3>
//             <ul className="course-links">
//               {['Achieving Oneness with the Higher Soul', 'Arhatic Yoga Preparatory', 
//                 'Om Mani Padme Hum', 'Spiritual Essence of Man', 'Meditation on the Lord\'s Prayer',
//                 'Inner Hinduism Techniques', 'Inner Buddhism Techniques', 'Inner Christianity Techniques',
//                 'Arhatic Sexual Alchemy', 'Higher Clairvoyance'].map((course) => (
//                 <li key={course}>
//                   <a href="#" className="course-link">
//                     <span className="link-icon">✦</span>
//                     {course}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Prosperity Series */}
//       <section className="box prosperity-box">
//         <h2 className="section-title">Prosperity Series</h2>
        
//         <div className="circle-carousel">
//           {[1, 2, 3].map((num) => (
//             <div key={num} className="circle">
//               <img 
//                 src={`/images/prosperity${num}.jpg`} 
//                 alt={`Prosperity ${num}`} 
//                 className="circle-image"
//                 loading="lazy"
//               />
//               <div className="circle-overlay"></div>
//             </div>
//           ))}
//         </div>

//         <div className="content">
//           <div className="quote-box">
//             <div className="quote-mark">"</div>
//             <p className="quote-text"><em>Prosperity is a result of service and the intelligent application of energy.</em></p>
//             <p className="quote-author">– GMCKS</p>
//             <div className="quote-content">
//               <p>Abundance flows when energy is clear, focused, and aligned. Pranic Prosperity teachings guide you to cleanse mental blocks and attract opportunities.</p>
//               <p>Shift inner energy, and manifest material and spiritual wealth with ease.</p>
//             </div>
//           </div>
          
//           <div className="links-box">
//             <h3 className="links-title">Available Courses</h3>
//             <ul className="course-links">
//               {['Spiritual Business Management', 'Kriyashakti', 
//                 'Success & Energy Techniques', 'Removing Financial Blocks'].map((course) => (
//                 <li key={course}>
//                   <a href="#" className="course-link">
//                     <span className="link-icon">✦</span>
//                     {course}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CoursesPage;


import { useEffect } from 'react';
import './Courses.css';

const CoursesPage = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.box');
      elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img 
            src="/images/Course2.jpg" 
            alt="Pranic Healing Courses" 
            className="hero-image" 
            loading="eager"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="hero-title">COURSES</h2>
          </div>
        </div>
      </section>

      {/* Healing Series */}
      <section className="box healing-box">
        <div className="background-image" style={{backgroundImage: "url('/images/healing-bg.jpg')"}}></div>
        <h2 className="section-title">Healing Series</h2>
        
        <div className="circle-carousel">
          {[1, 2, 3].map((num) => (
            <div key={num} className="circle">
              <img 
                src={`/images/healing${num}.jpg`} 
                alt={`Healing ${num}`} 
                className="circle-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="content">
          <div className="quote-box">
            <p className="quote-text"><em>"Pranic Healing is a bridge to spirituality"</em></p>
            <p className="quote-author">– GMCKS</p>
            <div className="quote-content">
              <p>The Healing Series in Pranic Healing restores physical, emotional, and spiritual balance. Using ancient principles and modern tools, it empowers self-healing and transformation.</p>
              <p>At Radiant Pranic Healing Center, we believe that healing is more than recovery—it's transformation from within.</p>
            </div>
          </div>
          
          <div className="links-box">
            <h3 className="links-title">Available Courses</h3>
            <ul className="course-links">
              {['Self Pranic Healing', 'Basic Pranic Healing', 'Advanced Pranic Healing', 
                'Pranic Psychotherapy', 'Pranic Crystal Healing', 'Facial & Body Sculpting', 
                'Psychic Self Defence'].map((course) => (
                <li key={course}>
                  <a href="#" className="course-link">
                    <span className="link-icon">✦</span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spiritual Series */}
      <section className="box spiritual-box">
        <div className="background-image" style={{backgroundImage: "url('/images/spiritual-bg.jpg')"}}></div>
        <h2 className="section-title">Spiritual Series</h2>
        
        <div className="circle-carousel">
          {[1, 2, 3].map((num) => (
            <div key={num} className="circle">
              <img 
                src={`/images/spiritual${num}.jpg`} 
                alt={`Spiritual ${num}`} 
                className="circle-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="content">
          <div className="quote-box">
            <p className="quote-text"><em>"Spirituality is a way of life. It is not just doing meditation."</em></p>
            <p className="quote-author">– GMCKS</p>
            <div className="quote-content">
              <p>In Pranic Healing, spirituality means conscious awakening. It aligns you with inner light and higher truths—beyond rituals and ego.</p>
              <p>Discover the soul's divine purpose and live with compassion, service, and love.</p>
            </div>
          </div>
          
          <div className="links-box">
            <h3 className="links-title">Available Courses</h3>
            <ul className="course-links">
              {['Achieving Oneness with the Higher Soul', 'Arhatic Yoga Preparatory', 
                'Om Mani Padme Hum', 'Spiritual Essence of Man', 'Meditation on the Lord\'s Prayer',
                'Inner Hinduism Techniques', 'Inner Buddhism Techniques', 'Inner Christianity Techniques',
                'Arhatic Sexual Alchemy', 'Higher Clairvoyance'].map((course) => (
                <li key={course}>
                  <a href="#" className="course-link">
                    <span className="link-icon">✦</span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prosperity Series */}
      <section className="box prosperity-box">
        <div className="background-image" style={{backgroundImage: "url('/images/prosperity-bg.jpg')"}}></div>
        <h2 className="section-title">Prosperity Series</h2>
        
        <div className="circle-carousel">
          {[1, 2, 3].map((num) => (
            <div key={num} className="circle">
              <img 
                src={`/images/prosperity${num}.jpg`} 
                alt={`Prosperity ${num}`} 
                className="circle-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="content">
          <div className="quote-box">
            <p className="quote-text"><em>"Prosperity is a result of service and the intelligent application of energy."</em></p>
            <p className="quote-author">– GMCKS</p>
            <div className="quote-content">
              <p>Abundance flows when energy is clear, focused, and aligned. Pranic Prosperity teachings guide you to cleanse mental blocks and attract opportunities.</p>
              <p>Shift inner energy, and manifest material and spiritual wealth with ease.</p>
            </div>
          </div>
          
          <div className="links-box">
            <h3 className="links-title">Available Courses</h3>
            <ul className="course-links">
              {['Spiritual Business Management', 'Kriyashakti', 
                'Success & Energy Techniques', 'Removing Financial Blocks'].map((course) => (
                <li key={course}>
                  <a href="#" className="course-link">
                    <span className="link-icon">✦</span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;