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
  var activeBarColor = _ref.activeBarColor,
      activeBorder = _ref.activeBorder,
      activeBorderColor = _ref.activeBorderColor,
      activeBorderStyle = _ref.activeBorderStyle,
      activeColor = _ref.activeColor,
      activeOpacity = _ref.activeOpacity,
      activeStep = _ref.activeStep,
      activeTitleColor = _ref.activeTitleColor,
      activeTitleOpacity = _ref.activeTitleOpacity,
      barHeight = _ref.barHeight,
      barStyle = _ref.barStyle,
      circleFontColor = _ref.circleFontColor,
      circleFontSize = _ref.circleFontSize,
      circleTop = _ref.circleTop,
      completeBarColor = _ref.completeBarColor,
      completeBarStyle = _ref.completeBarStyle,
      completeBorder = _ref.completeBorder,
      completeBorderColor = _ref.completeBorderColor,
      completeBorderStyle = _ref.completeBorderStyle,
      completeColor = _ref.completeColor,
      completeOpacity = _ref.completeOpacity,
      completeTitleColor = _ref.completeTitleColor,
      completeTitleOpacity = _ref.completeTitleOpacity,
      defaultBarColor = _ref.defaultBarColor,
      defaultBorder = _ref.defaultBorder,
      defaultBorderColor = _ref.defaultBorderColor,
      defaultBorderStyle = _ref.defaultBorderStyle,
      defaultBorderWidth = _ref.defaultBorderWidth,
      defaultColor = _ref.defaultColor,
      defaultOpacity = _ref.defaultOpacity,
      defaultTitleColor = _ref.defaultTitleColor,
      defaultTitleOpacity = _ref.defaultTitleOpacity,
      disabledSteps = _ref.disabledSteps,
      lineMarginOffset = _ref.lineMarginOffset,
      size = _ref.size,
      steps = _ref.steps,
      titleFontSize = _ref.titleFontSize,
      titleTop = _ref.titleTop;

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
          activeBarColor: activeBarColor,
          activeBorder: activeBorder,
          activeBorderColor: activeBorderColor,
          activeBorderStyle: activeBorderStyle,
          activeColor: activeColor,
          activeOpacity: activeOpacity,
          activeTitleColor: activeTitleColor,
          activeTitleOpacity: activeTitleOpacity,
          barStyle: barStyle,
          barHeight: barHeight,
          circleFontColor: circleFontColor,
          circleFontSize: circleFontSize,
          circleTop: circleTop,
          completeBarColor: completeBarColor,
          completeBarStyle: completeBarStyle,
          completeBorder: completeBorder,
          completeBorderColor: completeBorderColor,
          completeBorderStyle: completeBorderStyle,
          completeColor: completeColor,
          completed: !(disabledSteps || []).includes(index) && index < activeStep,
          completeOpacity: completeOpacity,
          completeTitleColor: completeTitleColor,
          completeTitleOpacity: completeTitleOpacity,
          defaultBarColor: defaultBarColor,
          defaultBorder: defaultBorder,
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
          message: step.message,
          mouseover: step.mouseover,
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
  activeBarColor: _propTypes.PropTypes.string,
  activeBorder: _propTypes.PropTypes.string,
  activeBorderColor: _propTypes.PropTypes.string,
  activeBorderStyle: _propTypes.PropTypes.string,
  activeColor: _propTypes.PropTypes.string,
  activeOpacity: _propTypes.PropTypes.string,
  activeStep: _propTypes.PropTypes.number,
  activeTitleColor: _propTypes.PropTypes.string,
  activeTitleOpacity: _propTypes.PropTypes.string,
  barHeight: _propTypes.PropTypes.number,
  barStyle: _propTypes.PropTypes.string,
  circleFontColor: _propTypes.PropTypes.string,
  circleFontSize: _propTypes.PropTypes.number,
  circleTop: _propTypes.PropTypes.number,
  completeBarColor: _propTypes.PropTypes.string,
  completeBarStyle: _propTypes.PropTypes.string,
  completeBorder: _propTypes.PropTypes.string,
  completeBorderColor: _propTypes.PropTypes.string,
  completeBorderStyle: _propTypes.PropTypes.string,
  completeColor: _propTypes.PropTypes.string,
  completeOpacity: _propTypes.PropTypes.string,
  completeTitleColor: _propTypes.PropTypes.string,
  completeTitleOpacity: _propTypes.PropTypes.string,
  defaultBarColor: _propTypes.PropTypes.string,
  defaultBorder: _propTypes.PropTypes.string,
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