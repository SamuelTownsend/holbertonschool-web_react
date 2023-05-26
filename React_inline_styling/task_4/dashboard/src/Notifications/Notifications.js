import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';

export default class Notifications extends React.Component {
	constructor() {
		super();
		this.markAsRead = this.markAsRead.bind(this);
	}
	
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	shouldComponentUpdate(newProps) {
		return (
			newProps.listNotifications.length > this.props.listNotifications.length
			);
	}

	render () {
		const { displayDrawer, listNotifications } = this.props;

		const floatDirection = displayDrawer ? 'left' : 'right';

		const styles = StyleSheet.create({
			notifications: {
				border: '1px rgb(221, 72, 72) dashed',
				padding: '5px',
				'@media (max-width: 900px)': {
					height: '100%',
					width: '100%',
					backgroundColor: 'white',
					position: 'absolute',
					border: 'none'
				}
			},
		
			notificationDiv: {
				display: 'flex',
				flexDirection: 'column',
				float: 'right',
				marginRight: '1rem',
				'@media (max-width: 900px)': {
					float: floatDirection
				}
			},
		
			button: {
				float: 'right',
				border: '0',
				background: 'white',
				'@media (max-width: 900px)': {
					marginTop: '10px',
					position: 'absolute'
				}
			},
		
			menuItem: {
				textAlign: 'right',
				paddingBottom: '0.5rem',
				fontWeight: 'bold',
				backgroundColor: '#fff8f8',
				display: displayDrawer ? 'none' : 'block',
				'@media (max-width: 900px)': {
					display: 'none'
				},
				':hover': {
					cursor: 'pointer',
					animationName: [
						{ 
							'0%': {transform: 'translateY(0px)'},
					 		'10%': {transform: 'translateY(-5px)'},
							'35%': {transform: 'translateY(5px)'},
							'60%': {transform: 'translateY(0px)'}
						},
						{
							from: {opacity: 0.5},
							to: {opacity: 1}
						}],
					animationDuration: '0.5s, 1s',
					animationIterationCount: 3
				}
			}
		});

		return (
			<div id="notificationDiv"
				className={`notificationDiv ${css(styles.notificationDiv)}`}>
				<div className={`menuItem ${css(styles.menuItem)}`}
					id='menuItem'>
					Your Notifications
				</div>
				{displayDrawer && (
					<div className={`Notifications ${css(styles.notifications)}`}
						id='Notifications'>
						<button
							className={`button ${css(styles.button)}`}
							aria-label="Close"
							onClick={() => console.log('Close button has been clicked')}>
								<img src={closeIcon} height="15px" width="15px" alt="close icon" />
						</button>
						{listNotifications.length ?
							(<p>Here is the list of notifications</p>) : 
							(<p>No new notification for now</p>)}
						{listNotifications ? (
							listNotifications.map((notification) => (
								<NotificationItem key={notification.id}
									type={notification.type}
									value={notification.value}
									html={notification.html}
									markAsRead={() => this.markAsRead(notification.id)} />))) :
								(<tr>No course available yet</tr>)}
					</div>
				)}
			</div>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
}
