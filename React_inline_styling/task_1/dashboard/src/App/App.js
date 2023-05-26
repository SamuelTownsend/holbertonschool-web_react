import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    padding: '2% 3%',
	  height: '480px',
	  fontFamily: 'Arial, Helvetica, sans-serif',
	  borderTop: 'medium solid rgb(221, 72, 72)',
	  borderTopColor: 'rgb(221, 72, 72)'
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'rgb(221, 72, 72)'
  },

  footer: {
    textAlign: 'center',
	  borderTop: 'solid rgb(221, 72, 72)',
	  fontStyle: 'italic',
	  fontFamily: 'Arial, Helvetica, sans-serif',
  }
});

const listCourses = [
  { id: '1', name: 'ES6', credit: 60},
  { id: '2', name: 'Webpack', credit: 20},
  { id: '3', name: 'React', credit: 40},
]

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
]

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.ctrlKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ctrlKeyPress);
  }
  
  ctrlKeyPress = (event) => {
    if (event.ctrlKey && event.key === 'h') {
        window.alert('Logging you out')
        this.props.logOut();
      }
  }

  render () {
    const {isLoggedIn} = this.props;
    return (
      <React.Fragment>
        <div className="App">
          <Notifications listNotifications={listNotifications} />
          <div className={`App-header ${css(styles.header)}`}>
            <Header />
          </div>
          <div className={`App-body ${css(styles.body)}`}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>)}
            <BodySection title="News from the School">
              <p>Lorem Ipsum</p>
            </BodySection>
          </div>
          <div className={`App-footer ${css(styles.footer)}`}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};
