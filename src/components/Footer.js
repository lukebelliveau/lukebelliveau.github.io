import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="mailto:luke@belliveau.org" className="icon fa-inbox">
          <span className="label">Email</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/lukebelliveau"
          target="_blank"
          className="icon fa-github"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/mr_googly_eyes"
          target="_blank"
          className="icon fa-twitter"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/luuuuuuukee"
          target="_blank"
          className="icon fa-facebook"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
    </ul>
    <p className="copyright">
      Design: <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
