import Popup from 'reactjs-popup'
import {GrGroup} from 'react-icons/gr'
import {RxCross2} from 'react-icons/rx'
import './App.css'

const App = () => (
  <div className="background">
    <section className="top-section">
      <h1 className="quote">
        "Some people call this artificial intelligence, but the reality is this
        technology will enhance us. So, instead of artificial intelligence, I
        think we’ll augment our intelligence” - Ginni Rometty – Former CEO &
        President, IBM
      </h1>
      <div className="image-container">
        <img
          src="https://resources.commlabindia.com/hs-fs/hubfs/webinars/corporate-training-with-ai-banner-image.png?width=525&height=734&name=corporate-training-with-ai-banner-image.png"
          alt="women"
          className="banner-image"
        />
        <div className="content">
          <p className="content-title">The Top Trending Topic of the Year</p>
          <h1 className="main-title">
            Unleashing the Potential of AI in Corporate Training
          </h1>
          <ul className="feature-list">
            <li>
              Learn how AI is helping corporates upskill and reskill workforce
            </li>
            <li>
              Walk away with tips, tools, and resources to get started with
              AI-empowered training
            </li>
          </ul>
          <h3 className="event-host">
            JOIN DR RK Prasad, Shalini, Rajesh LIVE
          </h3>
          <p className="event-details">
            Tuesday, January 09, 2024 11 AM Eastern | 8 AM Pacific Duration: 90
            Minutes $997 VALUE FREE!
          </p>
          <Popup
            modal
            trigger={
              <button className="cta-button">
                <GrGroup />
                SECURE YOUR SEAT
              </button>
            }
          >
            {close => (
              <>
                <div className="popup">
                  <button
                    type="button"
                    className="close-button trigger-button"
                    onClick={() => close()}
                  >
                    <RxCross2 />
                  </button>
                  <form className="registration-form">
                    <h1 className="form-title">
                      Register For The FREE Webinar
                    </h1>
                    <label htmlFor="first-name" className="form-label">
                      First Name*
                    </label>
                    <br />
                    <input
                      type="text"
                      id="first-name"
                      required
                      className="form-input"
                      placeholder="first name"
                    />
                    <label for="last-name" className="form-label">
                      Last Name*
                    </label>
                    <br />
                    <input
                      type="text"
                      id="last-name"
                      required
                      className="form-input"
                      placeholder="last name"
                    />
                    <label htmlFor="email" className="form-label">
                      Business email
                    </label>
                    <br />
                    <input
                      type="email"
                      required
                      className="form-input"
                      id="email"
                      placeholder="Email"
                    />
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <br />
                    <input
                      type="text"
                      required
                      className="form-input"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    <button type="submit" class="cta-button">
                      SECURE YOUR SEAT
                    </button>
                  </form>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    </section>

    <div className="logos-images">
      <img
        src="https://resources.commlabindia.com/hubfs/webinars/logos-v2.png"
        alt="company-logos"
        className="company-logo"
      />
    </div>
    <section className="middle-section">
      <h1 className="learn-title">YOU WILL LEARN:</h1>
      <ul className="learn-list">
        <li>Evolution of AI and Corporate Training</li>
        <li>
          How AI can close skills gaps with rapid upskilling and reskilling
        </li>
        <li>Steps to integrate AI tools in training programs</li>
        <li>Challenges and opportunities with AI implementation</li>
        <li>Roadmap to align training with business goal</li>
        <li>Live action – creating assets with Vyond Go, Synthesia, Quizbot</li>
        <li>Best way Learning Architects can use AI</li>
      </ul>
      <h3 className="main-subtitle">
        Unleashing the Potential of AI in Corporate Training
      </h3>
      <p className="content-paragraph">
        The Impact of AI on L&D – Insights and Applications
      </p>
      <h2 className="event-details">
        Tuesday, January 09, 2024 11 am Eastern | 8 am Pacific Duration: 90
        Minutes
      </h2>
      <Popup
        modal
        trigger={
          <button className="cta-button">
            <GrGroup />
            SECURE YOUR SEAT
          </button>
        }
      >
        {close => (
          <>
            <div className="popup">
              <button
                type="button"
                className="close-button trigger-button"
                onClick={() => close()}
              >
                <RxCross2 />
              </button>
              <form className="registration-form">
                <h1 className="form-title">Register For The FREE Webinar</h1>
                <label htmlFor="first-name" className="form-label">
                  First Name*
                </label>
                <br />
                <input
                  type="text"
                  id="first-name"
                  required
                  className="form-input"
                  placeholder="first name"
                />
                <label for="last-name" className="form-label">
                  Last Name*
                </label>
                <br />
                <input
                  type="text"
                  id="last-name"
                  required
                  className="form-input"
                  placeholder="last name"
                />
                <label htmlFor="email" className="form-label">
                  Business email
                </label>
                <br />
                <input
                  type="email"
                  required
                  className="form-input"
                  id="email"
                  placeholder="Email"
                />
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <br />
                <input
                  type="text"
                  required
                  className="form-input"
                  id="phone"
                  placeholder="Phone Number"
                />
                <button type="submit" class="cta-button">
                  SECURE YOUR SEAT
                </button>
              </form>
            </div>
          </>
        )}
      </Popup>
    </section>

    <section className="info-section">
      <h1 className="host-title">MEET YOUR HOST</h1>
      <div className="host-details">
        <div className="host-card">
          <img
            src="https://resources.commlabindia.com/hubfs/webinars/rk-prasad-ai-webinar.jpg"
            alt="manager"
            className="host-image"
          />
          <h4 className="host-name">RK Prasad</h4>
          <h5 className="host-role">CEO & Co-Founder</h5>
          <p className="host-bio">
            RK has nurtured CommLab India from concept to commercial success,
            and is responsible for formulating the business strategy. He is also
            responsible for nurturing customer relationships.
            <br />
            <br />
            An entrepreneur at heart, RK has 35 years of experience in Sales,
            Corporate training, University teaching, and eLearning. He regularly
            conducts seminars and webinars for customers across the world on
            various topics of technology-enhanced learning.
            <br />
            <br /> RK holds a PhD in Mobile Learning from Lancaster University,
            UK, and an MBA. A good teacher and engaging trainer, RK helps people
            learn and bloom. His priorities are his employees, his customers,
            and his community.
          </p>
        </div>
        <div className="host-card">
          <img
            src="https://resources.commlabindia.com/hubfs/cli-main-site/about-us/Shalini.jpg"
            alt="manager"
            className="host-image"
          />
          <h4 className="host-name">Shalini Merugu</h4>
          <h5 className="host-role">Director - Learning Solutions</h5>
          <p className="host-bio">
            Shalini is a versatile learning design professional with 16+ years
            of experience in instructional design (ILT, VILT, and eLearning).
            <br />
            <br />
            Her experience in designing eLearning solutions along with designing
            and delivering instructor-led training helps her leverage the
            strengths of each medium to consistently create impactful training
            solutions, ensuring that nothing is lost when converting from one
            format to another.
            <br />
            <br /> Apart from improving the quality of learning solutions, she
            also conducts customer education workshops at customer sites
            globally and presents webinars on learning design.
          </p>
        </div>
        <div className="host-card">
          <img
            src="https://resources.commlabindia.com/hubfs/cli-main-site/about-us/rajesh-v4.jpg"
            alt="manager"
            className="host-image"
          />
          <h4 className="host-name">Rajesh Venkata</h4>
          <h5 className="host-role">Director – Innovation</h5>
          <p className="host-bio">
            Rajesh started his career as a Quality Executive in 2008, and gained
            expertise in eLearning, digital content delivery, and project
            management, over these 15+ years.
            <br />
            <br /> Rajesh has an excellent track record of team management and
            operational planning, along with good knowledge of eLearning
            authoring tools such as Storyline, Captivate, and Lectora.
            <br />
            <br /> Well-experienced in managing multiple projects for global
            clients, Rajesh has a keen eye for trends in the tech-enabled
            learning space. This made him the natural choice for the current
            role, where he researches the latest tools and tech, and guides the
            CommLab India team in leveraging them to address training needs
            faster, better, and er.
          </p>
        </div>
      </div>
    </section>
    <section className="title">
      <h1 className="main-title">
        Unleashing the Potential of AI in Corporate Training
      </h1>
      <p className="content-paragraph">
        The Impact of AI on L&D – Insights and Applications
      </p>
      <h3 className="event-details">
        Tuesday, January 09, 2024 11 am Eastern | 8 am Pacific Duration: 90
        Minutes
      </h3>
      <Popup
        modal
        trigger={
          <button className="cta-button">
            <GrGroup />
            SECURE YOUR SEAT
          </button>
        }
      >
        {close => (
          <>
            <div className="popup">
              <button
                type="button"
                className="close-button trigger-button"
                onClick={() => close()}
              >
                <RxCross2 />
              </button>
              <form className="registration-form">
                <h1 className="form-title">Register For The FREE Webinar</h1>
                <label htmlFor="first-name" className="form-label">
                  First Name*
                </label>
                <br />
                <input
                  type="text"
                  id="first-name"
                  required
                  className="form-input"
                  placeholder="first name"
                />
                <label for="last-name" className="form-label">
                  Last Name*
                </label>
                <br />
                <input
                  type="text"
                  id="last-name"
                  required
                  className="form-input"
                  placeholder="last name"
                />
                <label htmlFor="email" className="form-label">
                  Business email
                </label>
                <br />
                <input
                  type="email"
                  required
                  className="form-input"
                  id="email"
                  placeholder="Email"
                />
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <br />
                <input
                  type="text"
                  required
                  className="form-input"
                  id="phone"
                  placeholder="Phone Number"
                />
                <button type="submit" class="cta-button">
                  SECURE YOUR SEAT
                </button>
              </form>
            </div>
          </>
        )}
      </Popup>
    </section>
    <section className="bottom-section">
      <div className="logo-section">
        <img
          src="https://resources.commlabindia.com/hubfs/commlab_logo/cl-logo-final-white.png"
          alt="company-logo"
          className="company-logo"
        />
        <p className="copyright-text">Copyright © 2023, CommLab India</p>
      </div>
      <div className="footer-links">
        <p>Privacy Policy | Site Map</p>
      </div>
    </section>
  </div>
)

export default App
