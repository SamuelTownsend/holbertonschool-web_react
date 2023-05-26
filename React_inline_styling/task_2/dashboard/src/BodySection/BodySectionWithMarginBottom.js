import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px'
	}
});

export default class BodySectionWithMarginBottom extends React.Component {
	render () {
		return (
			<div className={`bodySectionWithMargin ${css(styles.bodySectionWithMargin)}`}>
				<BodySection {...this.props} />
			</div>
		);
	}
}

BodySectionWithMarginBottom.protoTypes = {
	title: PropTypes.string.isRequired,
};
