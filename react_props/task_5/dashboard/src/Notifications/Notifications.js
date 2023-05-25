import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
}

export default function Notifications({ displayDrawer, listNotifications }) {
	return (
		<div id="notificationDiv">
			<div className="menuItem">Your Notifications</div>
			{displayDrawer && (
				<div className="Notifications">
					{listNotifications.length ?
						(<p>Here is the list of notifications</p>) : 
						(<p>No new notification for now</p>)}
					{listNotifications ? (
						listNotifications.map((notification) => (
							<NotificationItem key={notification.id}
								type={notification.type}
								value={notification.value}
								html={notification.html} />))) :
							(<tr>No course available yet</tr>)}
					<button
						style={{
							border: 0,
							background: 'white',
							position: 'absolute',
							right: '25px',
							top: '25px',
						}}
						aria-label="Close"
						onClick={() => console.log('Close button has been clicked')}>
							<img src={closeIcon} height="15px" width="15px" alt="close icon" />
					</button>
				</div>
			)}
		</div>
	);
}
