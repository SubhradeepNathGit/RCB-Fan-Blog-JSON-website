import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/about.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about-page">
      <div className="about-overlay">
        <div className="about-content" data-aos="fade-up">
         <h1 className="about-title">
  RCB <span className="text-warning">#PlayBOLD</span> <span className="text-white">Moments</span>
</h1>
          <p className="about-text">
            Royal Challengers Bengaluru (RCB), originally known as Royal Challengers Bangalore, is one of the most prominent and popular franchises in the Indian Premier League (IPL), representing the vibrant city of Bengaluru, Karnataka. Established in 2008 and owned by United Spirits, a subsidiary of the global beverage giant Diageo, RCB has consistently been a powerhouse in the IPL with a passionate fanbase and a reputation for playing aggressive and entertaining cricket. The team’s home ground, M. Chinnaswamy Stadium, is famous for its electric atmosphere and has witnessed some of the most thrilling matches in IPL history. 
          </p>
          <p className="about-text" data-aos="fade-up" data-aos-delay="200">
           The 2025 IPL season has been a breakthrough campaign for RCB, marked by a series of historic performances on their road to the final. Under the leadership of new captain Rajat Patidar and with head coach Andy Flower’s strategic guidance, RCB finished the league stage in a strong 2nd place, securing a direct spot in Qualifier 1. The team made history by becoming the first in IPL history to win all their away matches in a single season, showcasing remarkable consistency and mental toughness. One of the season’s standout moments was their record-setting chase of 228 runs against the Lucknow Super Giants, the highest successful run chase in the franchise’s history and the third-highest ever in the IPL.
          </p>
          <p className="about-text" data-aos="fade-up" data-aos-delay="400">
          RCB’s balanced team effort was on full display in Qualifier 1, where they defeated Punjab Kings by eight wickets. The team’s journey to the final has been fueled by a blend of experienced international stars and emerging young talent, embodying the franchise’s “Play Bold” philosophy of fearless, attacking cricket. With an engaged and passionate fanbase backing them every step of the way, Royal Challengers Bengaluru stands poised at the threshold of potentially winning their first-ever IPL title, a historic moment that would fulfill the dreams of millions of supporters and mark a new chapter in the franchise’s illustrious history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
