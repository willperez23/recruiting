import React from 'react';

function About(props) {
  return (
    <div className="about">
      <div className="sectionStruct">
        <h1>
          Hi! 👋🏾
          I&apos;m
          <mark className="rose"> Will.</mark>
        </h1>
        <h2>Associate Product Designer at MongoDB</h2>
        <h4>
          Applying human-centered design thinking throughout an entire product’s lifecycle.
          <br />
          Currently located in New York City, always open to connecting.
        </h4>
        <a href="mailto:will.perez2026@gmail.com" className="rose-button">Let’s chat!</a>
      </div>
      <div className="sectionStruct">
        <h2 className="blue-text">My work</h2>
        <h4>
          Design forward. My projects range in personas, devices, and timelines.
          <br />
          Explore my process and takeaways from each design process.
        </h4>
        <div className="workCards">
          <div className="workCard">
            <div className="mockUps">
              <p> placeholder</p>
              <span />
            </div>
            <div className="workDescription">
              <h5>MongoDB’s Internal Log Viewer</h5>
              <h3>Reimagining the debugging experience for internal engineers</h3>
              <div className="workBadges">
                <div className="badge">UX Research</div>
                <div className="badge">Product Design</div>
              </div>
            </div>
          </div>

          <div className="workCard">
            <div className="mockUps">
              <p> placeholder</p>
              <span />
            </div>
            <div className="workDescription">
              <h5>MongoDB’s Continuous Integration Dashboard</h5>
              <h3>Reimagining the debugging experience for internal engineers</h3>
              <div className="workBadges">
                <div className="badge">UX Research</div>
                <div className="badge">Product Design</div>
              </div>
            </div>
          </div>

          <div className="workCard">
            <div className="mockUps">
              <p> placeholder</p>
              <span />
            </div>
            <div className="workDescription">
              <h5>BetMate</h5>
              <h3>Reimagining the debugging experience for internal engineers</h3>
              <div className="workBadges">
                <div className="badge">UX Research</div>
                <div className="badge">Product Design</div>
              </div>
            </div>
          </div>

          <div className="workCard">
            <div className="mockUps">
              <p> placeholder</p>
              <span />
            </div>
            <div className="workDescription">
              <h5>BeepBoop</h5>
              <h3>Reimagining the debugging experience for internal engineers</h3>
              <div className="workBadges">
                <div className="badge">UX Research</div>
                <div className="badge">Product Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
