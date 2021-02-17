import React from 'react';
//modify our component to have related component to redux
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from "reselect";
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = ({currentUser, hidden}) =>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink  to ='/shop' >
                 SHOP
            </OptionLink>
            <OptionLink  to ='/shop' >
                 CONTACT
            </OptionLink>
            {
                currentUser ?(
                <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                ):
                <OptionLink  to='/signin'>Sign In</OptionLink>
            }
            <CartIcon />

        </OptionsContainer>
        {
            hidden ? null: <CartDropdown />
        }
       
       </HeaderContainer>
)

// obtaining the high order state, which is the user=null to begin with
const mapStateToProps = createStructuredSelector({
    // distructor nested values, want to get me currentUser from user which is being distructor from the state
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// high order component which gets the first function on top
export default connect(mapStateToProps)(Header);