import React from "react";
import profileImage from "./profileImage/WhatsApp Image 2024-01-03 at 17.13.18_b13d76f5.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-card">
        <img
          src={profileImage}
          alt="Profile"
          style={{ width: "300px", height: "285px" }}
        />
        <div className="personal-details">
          <h2>Hey!!I am AKSKAY,akshu</h2>

          <h2>AGE:</h2>
          <p>I am 30 years old</p>
          <h2>Personality:</h2>
          <p>
            <blockquote>I programme and stuff from bangalore india</blockquote>
          </p>
        </div>
      </div>
      <div className="right-card">
        <h2>About Me</h2>
        <p>
          ನಾನು ಹೊಸಪೇಟೆ ಮತ್ತು ಉತ್ತರ ಕನ್ನಡದ ಕನ್ನಡಿಗ, ನಾನು ದೀಪಯನ್ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ
          ಪಿಯು ಕಾಲೇಜು ಹೊಸಪೇಟೆಯಿಂದ ನನ್ನ ವಿದ್ಯಾಭ್ಯಾಸವನ್ನು ಮಾಡಿದ್ದೇನೆ ಅದರ ನಂತರ ನಾನು
          ನನ್ನ ಮೆಕ್ಯಾನಿಕಲ್ ಇಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಮೆಕ್ಯಾನಿಕಲ್ ಇಂಜಿನಿಯರಿಂಗ್
          ಕ್ಷೇತ್ರದಲ್ಲಿ ದಾವಂಗರಿಗೆ ಹೋದೆ ದಾವಣಗೆರೆ ಮತ್ತು ಅದರ ನಂತರ 2015 ರಿಂದ ನಾನು
          ಬೆಂಗಳೂರಿನಲ್ಲಿದ್ದೇನೆ. ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಟೋರಿ ಹ್ಯಾರಿಸ್ ಮತ್ತು ಹಲವು
          ಸ್ಟಾರಪ್‌ಗಳಂತಹ ಹಲವಾರು ಟೆಕ್ ಕಂಪನಿಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದ ನಂತರ ಟೆಕ್
          ಮಹೀಂದ್ರಾದಿಂದ ಡೆವಲಪರ್ ಆಗಿ ನನ್ನ ಅಭಿವೃದ್ಧಿಯ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿದೆ.
          ನಾನು ಬೆಂಗಳೂರಿನ ಬೊಮ್ಮನಹಳ್ಳಿ ವಾರ್ಡ್‌ನಲ್ಲಿ ನೆಲೆಸಿದ್ದೇನೆ
        </p>
        <div className="sub-details">
          <h3>Primary Focus:</h3>
          <p>Your primary focus or goal</p>
          <h3>Exploring Focus:</h3>
          <p>Your exploring focus or interest</p>
          <h3>Human Languages:</h3>
          <p>Languages you know</p>
          <h3>Development Skills:</h3>
          <p>Your development skills</p>
          <h3>Favorite Activities:</h3>
          <p>Your favorite activities</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
