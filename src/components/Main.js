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
          id="cv"
          className={`${this.props.article === 'cv' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CV</h2>
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
          <h4>New York, NY | 2016 - 2018</h4>
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
          <h4>E-Commerce Retailer</h4>
          <h5>Boca Raton, FL</h5>
          <ul>
            <li>
              Designed APIs to facilitate communication among new, modular
              services and legacy REST endpoints in Node.js and C#
            </li>
            <li>
              Architected modules to pass messages between GCP Pub/Sub, Kafka &
              SQL databases in Node.js, C# and Java
            </li>
            <li>
              Introduced and championed best testing practices in a Node.js
              codebase using Jest, testdouble.js, and Mocha
            </li>
            <li>
              Served as line of communication between stakeholders for multiple
              companies, managing a variety of codebases, priorities, and
              business requirements
            </li>
            <li>
              Coached client developers on XP practices such as test-driven
              development and pair programming
            </li>
            <li>
              Established and facilitated agile practices on a young team
              including retros, code reviews, and tech debt management
            </li>
          </ul>
          <h4>Insurance Provider</h4>
          <h5>Lansing, MI</h5>
          <ul>
            <li>
              Served as an application developer and JavaScript specialist on a
              web platform for one of the largest insurance companies in the
              U.S.
            </li>
            <li>
              Led design of React component hierarchies and Redux state
              management architecture for two greenfield codebases
            </li>
            <li>
              Designed comprehensive unit, integration & functional test suites,
              drove account-wide direction of testing strategy with Enzyme, Chai
              and Mocha
            </li>
            <li>
              Coached developers & QAs in React, Redux, ES6 fundamentals & best
              practices
            </li>
            <li>
              Wrote & tested code for a Spring Boot microservice architecture
            </li>
          </ul>
          <h4>Insurance Provider</h4>
          <h5>Lansing, MI</h5>
          <ul>
            <li>
              Developed software used to track employee information for a
              leading consulting firm
            </li>
            <li>
              Extended codebase for a web application built with Java & ES5
              JavaScript, SpringMVC, and PostgreSQL, tested with Jasmine,
              Selenium, and JUnit
            </li>
            <li>
              Practiced continuous integration on a snapCI pipeline, deploying
              to Heroku
            </li>
            <li>
              Spearheaded successful effort to integrate Spring Security and
              Okta SSO into the application
            </li>
            <li>
              Practiced non-technical skills by facilitating discussions on team
              ceremonies, providing a developer perspective on story analysis,
              and leading communication between the team and external entities
              such as product owners, DevOps, and domain experts
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
            I've loved working with computers all my life. From my Lego
            Mindstorms team as a boy, to bricking every Android phone I could
            get my hands on in high school, to dropping that Chemistry major
            right after taking my first CS class, I've always been grateful to
            have the opportunity to do something that I love.
          </p>
          <p>
            Code isn't everything, though - far from it. An engineer who only
            knows how to write code isn't much of an engineer at all. I feel
            strongly that the best products are built by multidisciplinary teams
            of folks respecting the skills and experiences that each member can
            bring to the table.
          </p>
          <p>
            Of course, platitudes about good code and product development aren't
            everything, either ;). I play a bit of guitar & piano, and I put
            nearly all of my free time into tickets - namely plane tickets, lift
            tickets, and concert tickets. If you'd ever want to chat about the
            nontechnical stuff, consider my DMs open!
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
          <form method="post" action="mailto:luke.belliveau@gmail.com">
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
