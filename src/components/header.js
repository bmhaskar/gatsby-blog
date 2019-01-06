import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
    
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.45rem 0  1.0875rem`,
        borderBottom: `1px dashed `,
        display: `flex`, flexFlow: `row wrap`,  
        justifyContent: `space-between`,
        alignItems: `center`
      }}
    >
     
      <h1 style={{ margin: 0, alignSelf: `baseline`}}>
      
        <Link
          to="/"
          style={{
           
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        
       
      </h1>
      <h4 style={{ textAlign: `center` , alignSelf: `baseline`}}>
      <Link  to="/about/">About</Link>
      </h4>
      </div>
   
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
