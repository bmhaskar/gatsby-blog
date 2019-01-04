import React from 'react'
import twitterIcon from '../images/twitter.png'

import './share.css'

const Share = props => {

    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @BharatMhaskar`;

    // const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
    //     props.pathname}`;

    return (
        <div>
            
            <ul className="social">
                {/* <li>
                    <a href={fb} target="blank">
                        <img src={fbIcon} alt="facebook" />
                    </a>
                </li> */}
                <li>
                    <a href={twitter} target="blank">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Share;