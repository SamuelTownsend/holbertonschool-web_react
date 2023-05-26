import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  logo: {
		width: '240px',
		height: '240px'
	},

	header: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'rgb(221, 72, 72)'
  },
});

export default function Header() {
  return (
		<React.Fragment>
			<img src={logo} className={`App-logo ${css(styles.logo)}`} alt="logo" />
			<h1>School Dashboard</h1>
		</React.Fragment>
  );
}
