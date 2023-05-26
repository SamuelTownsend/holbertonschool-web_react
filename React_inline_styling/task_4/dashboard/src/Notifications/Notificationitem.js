import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

export default function NotificationItem({type, html, value, markAsRead}) {
	const styles = StyleSheet.create({
		li: {
			color: type === 'urgent' ? 'rgb(255, 60, 0)' : 'rgb(1, 1, 170)',
			'@media (max-width: 900px)': {
				width: '100%',
				borderBottom: '1px solid black',
				fontSize: '20px',
				padding: '10px 8px'
			}
		}
	});

	if (value) {
		return <li className={`li ${css(styles.li)}`}
							data-priority={type}
							onClick={markAsRead}>
							{value}
					 </li>;
	}
	return <li data-priority={type}
		dangerouslySetInnerHTML={html}
		onClick={markAsRead}
		className={`li ${css(styles.li)}`} />;
}

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
	type: 'default',
}

// export default React.memo(NotificationItem)
// commented this out because although it makes the function "pure"
// it breaks several tests and I've had it up to here with fiddling
// with these tests
