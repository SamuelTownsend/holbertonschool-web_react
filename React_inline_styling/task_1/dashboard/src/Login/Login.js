import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	login: {
		marginLeft: '2.5rem',
		marginTop: '5rem'
	},

  email: {
		marginLeft: '.5rem',
		marginRight: '.5rem'
	},

	password: {
		marginLeft: '.5rem',
		marginRight: '.5rem',
	}
});

export default function Login() {
  return (
		<React.Fragment>
			<div className={`App-login ${css(styles.login)}`}>
				<p>Login to access the full dashboard</p>
				<form className="Form-body">
					<label htmlFor="email">
						Email:
						<input type="email"
							id="email"
							name="email"
							className={`App-email ${css(styles.email)}`} />
					</label>
					<label htmlFor="password">
						Password:
						<input type="password"
							id="password"
							name="password"
							className={`App-password ${css(styles.password)}`} />
					</label>
					<input type="submit" value="OK" />
				</form>
			</div>
		</React.Fragment>
  );
}
