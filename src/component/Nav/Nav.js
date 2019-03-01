import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav (props) {
    if (props.location.pathname !== '/'){

    return (
        <div className="Nav">
            
                <Link to="/"><button>Home </    button></Link>
                <Link to="/post"><button>New    Post</button></Link>
               <Link to="/"><button>Logout</    button></Link>
               <h3>{props.username}</h3>
                    <img scr={props.profile_pic} alt='user' />
           
        </div>
    )
    }
    return null
}

const mapStateToProps = ({username, profile_pic}) => {
    return {
        username, profile_pic
    }
}

export default connect(mapStateToProps)(Nav);