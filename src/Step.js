import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Step extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {
      activeBorder, activeBorderColor, activeBorderStyle, activeColor, activeOpacity, activeTitleColor, activeTitleOpacity, barStyle, circleFontColor, circleFontSize, circleTop, completeBarColor, completeBorderColor, completeColor, completeOpacity, completeTitleColor, completeTitleOpacity, defaultBarColor, defaultBorder, defaultBorderColor, defaultBorderStyle,completeBorderStyle, defaultBorderWidth, defaultColor, defaultOpacity, defaultTitleColor, defaultTitleOpacity, lineMarginOffset, size, titleFontSize, titleTop, width
    } = this.props;

    return {
      step: {
        display: 'table-cell',
        paddingTop: circleTop,
        position: 'relative',
        width: `${width}%`,
      },
      activeCircle: {
        backgroundColor: activeColor,
        border: activeBorder,
        borderColor: activeBorderColor,
        borderStyle: activeBorderStyle,
        borderWidth: (activeBorderColor ? defaultBorderWidth : 0),
        opacity: activeOpacity,
      },
      activeTitle: {
        color: activeTitleColor,
        opacity: activeTitleOpacity,
      },
      circle: {
        backgroundColor: defaultColor,
        border: defaultBorder,
        borderColor: defaultBorderColor,
        borderRadius: '50%',
        borderStyle: defaultBorderStyle,
        borderWidth: (defaultBorderColor ? defaultBorderWidth : 0),
        color: circleFontColor,
        display: 'block',
        fontSize: circleFontSize,
        height: size,
        margin: '0 auto',
        opacity: defaultOpacity,
        padding: 1,
        textAlign: 'center',
        width: size,
      },
      completedBar: {
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        borderTopColor: completeBarColor,
        opacity: completeOpacity,
      },
      completedCircle: {
        backgroundColor: completeColor,
        borderColor: completeBorderColor,
        borderStyle: completeBorderStyle,
        borderWidth: (completeBorderColor ? defaultBorderWidth : 0),
        opacity: completeOpacity,
      },
      completedTitle: {
        color: completeTitleColor,
        opacity: completeTitleOpacity,
      },
      index: {
        lineHeight: `${size + circleFontSize / 4}px`,
        color: circleFontColor
      },
      leftBar: {
        borderTopColor: defaultBarColor,
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        height: 1,
        left: 0,
        marginRight: size / 2 + lineMarginOffset,
        opacity: defaultOpacity,
        position: 'absolute',
        right: '50%',
        top: circleTop + size / 2,
      },
      rightBar: {
        borderTopColor: defaultBarColor,
        borderTopStyle: barStyle,
        borderTopWidth: 1,
        height: 1,
        left: '50%',
        marginLeft: size / 2 + lineMarginOffset,
        opacity: defaultOpacity,
        position: 'absolute',
        right: 0,
        top: circleTop + size / 2,
      },
      title: {
        color: defaultTitleColor,
        display: 'block',
        fontSize: titleFontSize,
        fontWeight: '300',
        marginTop: titleTop,
        opacity: defaultTitleOpacity,
        textAlign: 'center',
      },
    };
  }

  render() {
    const { title, icon, index, active, completed, first, isLast, href, onClick } = this.props;

    const styles = this.getStyles();
    const circleStyle = Object.assign(
      styles.circle,
      completed ? styles.completedCircle : {},
      active ? styles.activeCircle : {},
    );
    const titleStyle = Object.assign(
      styles.title,
      completed ? styles.completedTitle : {},
      active ? styles.activeTitle : {},
    );
    const leftStyle = Object.assign(styles.leftBar, (active || completed) ? styles.completedBar : {});
    const rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

    const stepContent = icon ? <img src={icon} alt={index + 1} /> : index + 1;

    return (
      <div style={ styles.step }>
        <div style={ circleStyle }>
        {active || completed ? (
          <a href={href} onClick={onClick} style={ styles.index }>{ stepContent }</a>
        ) : (
          <span style={ styles.index }>{ stepContent }</span>
        )}
        </div>
        {active || completed ? (
          <a href={href} onClick={onClick} style={ titleStyle }>{ title }</a>
        ) : (
          <div style={ titleStyle }>{ title }</div>
        )}
        { !first && <div style={ leftStyle }></div> }
        { !isLast && <div style={ rightStyle }></div> }
      </div>
    );
  }
}

Step.defaultProps = {
  activeColor: 'red',
  activeTitleColor: '#000',
  barStyle: 'solid',
  borderStyle: 'solid',
  circleFontColor: '#FFF',
  circleFontSize: 16,
  circleTop: 24,
  completeTitleColor: '#000',
  defaultBarColor: '#E0E0E0',
  defaultBorder: '3px solid green',
  defaultColor: '#E0E0E0',
  defaultTitleColor: '#757575',
  lineMarginOffset: 4,
  size: 32,
  titleFontSize: 16,
  titleTop: 8,
};

Step.propTypes = {
  active: PropTypes.bool,
  activeBorder: PropTypes.string,
  activeBorderColor: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  activeColor: PropTypes.string,
  activeOpacity: PropTypes.string,
  activeTitleColor: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  barStyle: PropTypes.string,
  circleFontColor: PropTypes.string,
  circleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  completeBarColor: PropTypes.string,
  completeBorderColor: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  completeColor: PropTypes.string,
  completed: PropTypes.bool,
  completeOpacity: PropTypes.string,
  completeTitleColor: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  defaultBarColor: PropTypes.string,
  defaultBorder: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  defaultBorderWidth: PropTypes.number,
  defaultColor: PropTypes.string,
  defaultOpacity: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  first: PropTypes.bool,
  index: PropTypes.number,
  isLast: PropTypes.bool,
  lineMarginOffset: PropTypes.number,
  size: PropTypes.number,
  title: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleTop: PropTypes.number,
  width: PropTypes.number.isRequired,
};
