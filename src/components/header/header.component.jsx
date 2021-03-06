import React from "react";

import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles'
// import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to ="/">
            <Logo className='logo' />

        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
           {
               currentUser ? (
               <OptionLink onClick={signOutStart}>
                   SIGN OUT
               </OptionLink>
              ) : (
               <OptionLink to='/signin'>
                   SIGN IN
               </OptionLink>
           )}
           {/* <Cart currentUser={currentUser} /> */}
           <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : 
            <CartDropdown />
        }
       
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
});

const mapDispatchToProps = dispatch =>({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);