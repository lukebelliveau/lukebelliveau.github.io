import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import portrait from '../images/portrait.jpg'
import lake from '../images/lake.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Intro</h2>
          <span className="image main">
            <img
              src="/static/portrait-77a342cbf4f2682f7f86837cdb6e76a4.jpg"
              alt=""
            ></img>
          </span>
          <p>
            Hey folks! I'm Luke, a software engineer based in NYC. More details
            can be found in the Work section of my site, but here's a little bit
            about me.
          </p>
          <p>
            After graduating with a B.S. in Computer Science in 2016, I've worn
            quite a few hats. I started my career at ThoughtWorks, where I
            worked at four different clients taking on a multitude of domains,
            languages and roles - both across disciplines and software stacks.
          </p>
          <p>
            I currently work at GrubHub as a Cloud Infrastructure engineer. That
            means I handle the design and development of frameworks, tools, and
            services that the rest of the organization uses to write, test, and
            deploy software.
          </p>
          <p>
            I've done a bit of freelance work on the side as well. The work I'm
            most proud of includes:
          </p>
          <ul className="indented-list">
            <li>The official app for world famous boyband BROCKHAMPTON</li>
            <li>
              Devil's Dice Game, a popular game among travelers (
              <a href="https://apps.apple.com/us/app/devils-dice-drinking-game/id1453297745">
                App Store
              </a>
              /
              <a href="https://play.google.com/store/apps/details?id=com.devilsdicegame.devilsdice&amp;hl=en_US">
                Google Play
              </a>
              )
            </li>
            <li>
              The website for popular test automation suite Selenium (
              <a href="https://selenium.dev">link</a>)
            </li>
          </ul>
          <p>
            Well, that's enough for now. If I've managed to catch your eye,
            click in the other links to learn more about me.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3>GrubHub - Cloud Infrastructure Engineer</h3>
          <h4>New York, NY | 2018 - Present</h4>
          <p>
            At GrubHub, Luke serves as a Cloud Infrastructure engineer. That
            means he designs and deevelops frameworks, tools, and services that
            enable other GrubHub engineers to do their jobs as efficiently as
            they can. Among Luke's accomplishments and responsibilities are:
            <ul>
              <li>
                Engineering changes to core framework to facilitate
                communication between microservices in a new Envoy service mesh
                architecture
              </li>
              <li>
                Leading integration of SMS service with a new provider, handling
                the development, evaluation, and communication with stakeholders
                on both ends
              </li>
              <li>
                Ownership of Notifications stack of microservices in Java,
                spanning SMS, mobile push, email, and fax functionalities
              </li>
              <li>
                Independently building a service in React &amp; Python used by
                Site Reliability Engineers to view system status and make
                changes during outages
              </li>
              <li>
                Designing a new microservice architecture and Cassandra data
                model used for a new notifications template authoring service
              </li>
            </ul>
          </p>
          <h3>ThoughtWorks - Senior Consultant Engineer</h3>
          <h4>Chicago, IL | 2016 - 2018</h4>
          <p>
            Luke served as a Senior Consultant Engineer at ThoughtWorks. In this
            role he traveled weekly to clients, integrating with teams and
            serving an ever-changing variety of needs based on the task at hand.
            Beyond just designing and implementing systems for his clients, Luke
            worked closely with business stakeholders, designers, and product
            analysts to ensure that the business would get the product they
            needed. Below is a summary of his work for each of his clients.
          </p>
          <h4>Cybersecurity Startup</h4>
          <h5>New York, NY</h5>
          <ul>
            <li>
              Built interface enabling security analysts to examine potential
              cybersecurity threats and take action
            </li>
            <li>
              Collaborated with potential users, experience designers, and
              product owners to create direction and design for new product
            </li>
            <li>
              Worked with experience designers to create and implement a set of
              custom data visualizations using SVGs and Highcharts atop a Vue
              front end
            </li>
            <li>
              Built a comprehensive backend-for-frontend in Golang to aggregate,
              analyze, &amp; perform operations on data before serving to the
              client
            </li>
          </ul>
          <h4>Cybersecurity Startup</h4>
          <h5>New York, NY</h5>
          <ul>
            <li>
              Built interface enabling security analysts to examine potential
              cybersecurity threats and take action
            </li>
            <li>
              Collaborated with potential users, experience designers, and
              product owners to create direction and design for new product
            </li>
            <li>
              Worked with experience designers to create and implement a set of
              custom data visualizations using SVGs and Highcharts atop a Vue
              front end
            </li>
            <li>
              Built a comprehensive backend-for-frontend in Golang to aggregate,
              analyze, &amp; perform operations on data before serving to the
              client
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={lake} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
