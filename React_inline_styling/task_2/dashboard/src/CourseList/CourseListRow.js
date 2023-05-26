import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	th: {
		borderBottom: '1px solid lightgrey',
		padding: '0.5rem',
	}
});

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

const headerStyle = '#deb5b545'

const regularStyle = '#f5f5f5ab'

export default function CourseListRow ({ isHeader, textFirstCell,
																				 textSecondCell}) {
		return (
			<tr style={{ backgroundColor: isHeader ? headerStyle : regularStyle}}>
				{isHeader && textSecondCell === null && (
					<th className={`th ${css(styles.th)}`}
						colSpan={2}>{textFirstCell}</th>
				)}
				{isHeader && textSecondCell && (
					<>
						<th className={`th ${css(styles.th)}`}>{textFirstCell}</th>
						<th className={`th ${css(styles.th)}`}>{textSecondCell}</th>
					</>
				)}
				{!isHeader && (
					<>
						<td>{textFirstCell}</td>
						<td>{textSecondCell}</td>
					</>
				)}
			</tr>
	)
}
