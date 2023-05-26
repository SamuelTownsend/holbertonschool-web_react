import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
		margin: '5rem 0 0 2.5rem',
		border: '1px solid lightgrey',
		width: '100%',
		textAlign: 'left'
	},
	
	thead: {
		fontWeight: 'bold',
		':nth-child(1n) > :first-child': {
			textAlign: 'center'
		}
	}
});

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
	listCourses: [],
};

export default function CourseList({ listCourses }) {
	return (
		<table id="CourseList" className={`table ${css(styles.table)}`}>
			<thead className={`thead ${css(styles.thead)}`}>
				<CourseListRow
					textFirstCell='Available courses'
					isHeader={true} />
				<CourseListRow
					textFirstCell='Course name'
					isHeader={true}
					textSecondCell='Credit' />
			</thead>
			<tbody>
				{listCourses.length ? (listCourses.map((course) => (
					<CourseListRow key={course.id}
						textFirstCell={course.name}
						textSecondCell={course.credit} />))) : (
					<CourseListRow textFirstCell='No course available yet' />)}
			</tbody>
		</table>
	);
}
