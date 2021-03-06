import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import ContactUs from './pages/contact/contact.component'
import About from './pages/about/about.component'
import Privacy from './pages/privacy/privacy.component'
import Terms from './pages/terms/terms.component'
import Admin from './pages/admin/admin.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
// import { selectCollections} from './redux/shop/shop.selector'; //upload purposes

import "./App.css";

class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      
      setCurrentUser(userAuth)
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactUs} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path="/about" component={About} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/admin" component={Admin} />
          <Route 
          exact path="/signin" 
          render={() => 
            this.props.currentUser ? (

              <Redirect to='/' />
              ) : (
                <SignInAndSignUp/>
                )
              } 
            />
        </Switch>
      </div>
    )
  }  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
}) 

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);