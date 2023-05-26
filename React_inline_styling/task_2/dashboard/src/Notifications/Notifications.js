import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
		border: '1px rgb(221, 72, 72) dashed',
		padding: '5px'
	},

	notificationDiv: {
		display: 'flex',
		flexDirection: 'column',
		float: 'right',
		marginRight: '1rem'
	},

	button: {
		float: 'right',
		marginTop: '0.5rem',
		border: '0',
		background: 'white',
		position: 'absolute',
		right: '25px',
		top: '25px',
	},

	menuItem: {
		textAlign: 'right',
		paddingBottom: '0.5rem',
		fontWeight: 'bold'
	}
});

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
						<button
							className={`button ${css(styles.button)}`}
							aria-label="Close"
							onClick={() => console.log('Close button has been clicked')}>
								<img src={closeIcon} height="15px" width="15px" alt="close icon" />
						</button>
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
