import React from 'react';
import {Link} from 'react-router-dom';
//modify our component to have related component to redux
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({currentUser, hidden}) =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to ='/shop' >
                 SHOP
            </Link>
            <Link className='option' to ='/shop' >
                 CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null: <CartDropdown />
        }
       
    </div>
)

// obtaining the high order state, which is the user=null to begin with
const mapStateToProps = ({user:{currentUser}, cart:{hidden}  })=>({
    // distructor nested values, want to get me currentUser from user which is being distructor from the state
    currentUser,
    hidden
})

// high order component which gets the first function on top
export default connect(mapStateToProps)(Header);