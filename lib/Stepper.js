'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: '100%',
    minHeight: 0,
    padding: 0
  },
  stepper: {
    display: 'table',
    width: '100%',
    margin: '0 auto'
  }
};

function Stepper(_ref) {
  var activeStep = _ref.activeStep,
      steps = _ref.steps,
      disabledSteps = _ref.disabledSteps,
      activeColor = _ref.activeColor,
      completeColor = _ref.completeColor,
      defaultColor = _ref.defaultColor,
      circleFontColor = _ref.circleFontColor,
      activeTitleColor = _ref.activeTitleColor,
      completeTitleColor = _ref.completeTitleColor,
      defaultTitleColor = _ref.defaultTitleColor,
      size = _ref.size,
      circleFontSize = _ref.circleFontSize,
      titleFontSize = _ref.titleFontSize,
      circleTop = _ref.circleTop,
      titleTop = _ref.titleTop,
      completeOpacity = _ref.completeOpacity,
      activeOpacity = _ref.activeOpacity,
      defaultOpacity = _ref.defaultOpacity,
      completeTitleOpacity = _ref.completeTitleOpacity,
      activeTitleOpacity = _ref.activeTitleOpacity,
      defaultTitleOpacity = _ref.defaultTitleOpacity,
      barStyle = _ref.barStyle,
      defaultBorderColor = _ref.defaultBorderColor,
      completeBorderColor = _ref.completeBorderColor,
      activeBorderColor = _ref.activeBorderColor,
      defaultBorderStyle = _ref.defaultBorderStyle,
      completeBorderStyle = _ref.completeBorderStyle,
      activeBorderStyle = _ref.activeBorderStyle,
      defaultBarColor = _ref.defaultBarColor,
      completeBarColor = _ref.completeBarColor,
      lineMarginOffset = _ref.lineMarginOffset,
      defaultBorderWidth = _ref.defaultBorderWidth;

  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      'div',
      { style: styles.stepper },
      steps.map(function (step, index) {
        return _react2.default.createElement(_Step2.default, {
          key: index,
          active: !(disabledSteps || []).includes(index) && index === activeStep,
          activeBorderColor: activeBorderColor,
          activeBorderStyle: activeBorderStyle,
          activeColor: activeColor,
          activeOpacity: activeOpacity,
          activeTitleColor: activeTitleColor,
          activeTitleOpacity: activeTitleOpacity,
          barStyle: barStyle,
          circleFontColor: circleFontColor,
          circleFontSize: circleFontSize,
          circleTop: circleTop,
          completeBarColor: completeBarColor,
          completeBorderColor: completeBorderColor,
          completeBorderStyle: completeBorderStyle,
          completeColor: completeColor,
          completed: !(disabledSteps || []).includes(index) && index < activeStep,
          completeOpacity: completeOpacity,
          completeTitleColor: completeTitleColor,
          completeTitleOpacity: completeTitleOpacity,
          defaultBarColor: defaultBarColor,
          defaultBorderColor: defaultBorderColor,
          defaultBorderStyle: defaultBorderStyle,
          defaultBorderWidth: defaultBorderWidth,
          defaultColor: defaultColor,
          defaultOpacity: defaultOpacity,
          defaultTitleColor: defaultTitleColor,
          defaultTitleOpacity: defaultTitleOpacity,
          first: index === 0,
          href: step.href,
          icon: step.icon,
          index: index,
          isLast: index === steps.length - 1,
          lineMarginOffset: lineMarginOffset,
          onClick: step.onClick,
          size: size,
          title: step.title,
          titleFontSize: titleFontSize,
          titleTop: titleTop,
          width: 100 / steps.length
        });
      })
    )
  );
}

Stepper.defaultProps = {
  activeStep: 0
};

Stepper.propTypes = {
  activeBorderColor: _propTypes.PropTypes.string,
  activeBorderStyle: _propTypes.PropTypes.string,
  activeColor: _propTypes.PropTypes.string,
  activeOpacity: _propTypes.PropTypes.string,
  activeStep: _propTypes.PropTypes.number,
  activeTitleColor: _propTypes.PropTypes.string,
  activeTitleOpacity: _propTypes.PropTypes.string,
  barStyle: _propTypes.PropTypes.string,
  circleFontColor: _propTypes.PropTypes.string,
  circleFontSize: _propTypes.PropTypes.number,
  circleTop: _propTypes.PropTypes.number,
  completeBarColor: _propTypes.PropTypes.string,
  completeBorderColor: _propTypes.PropTypes.string,
  completeBorderStyle: _propTypes.PropTypes.string,
  completeColor: _propTypes.PropTypes.string,
  completeOpacity: _propTypes.PropTypes.string,
  completeTitleColor: _propTypes.PropTypes.string,
  completeTitleOpacity: _propTypes.PropTypes.string,
  defaultBarColor: _propTypes.PropTypes.string,
  defaultBorderColor: _propTypes.PropTypes.string,
  defaultBorderStyle: _propTypes.PropTypes.string,
  defaultBorderWidth: _propTypes.PropTypes.number,
  defaultColor: _propTypes.PropTypes.string,
  defaultOpacity: _propTypes.PropTypes.string,
  defaultTitleColor: _propTypes.PropTypes.string,
  defaultTitleOpacity: _propTypes.PropTypes.string,
  lineMarginOffset: _propTypes.PropTypes.number,
  size: _propTypes.PropTypes.number,
  steps: _propTypes.PropTypes.array,
  titleFontSize: _propTypes.PropTypes.number,
  titleTop: _propTypes.PropTypes.number
};

exports.default = Stepper;