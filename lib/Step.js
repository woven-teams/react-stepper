'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this));

    _this.getStyles = _this.getStyles.bind(_this);
    return _this;
  }

  _createClass(Step, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props,
          activeBorder = _props.activeBorder,
          activeBorderColor = _props.activeBorderColor,
          activeBorderStyle = _props.activeBorderStyle,
          activeColor = _props.activeColor,
          activeOpacity = _props.activeOpacity,
          activeTitleColor = _props.activeTitleColor,
          activeTitleOpacity = _props.activeTitleOpacity,
          barStyle = _props.barStyle,
          circleFontColor = _props.circleFontColor,
          circleFontSize = _props.circleFontSize,
          circleTop = _props.circleTop,
          completeBarColor = _props.completeBarColor,
          completeBorderColor = _props.completeBorderColor,
          completeBorderStyle = _props.completeBorderStyle,
          completeColor = _props.completeColor,
          completeOpacity = _props.completeOpacity,
          completeTitleColor = _props.completeTitleColor,
          completeTitleOpacity = _props.completeTitleOpacity,
          defaultBarColor = _props.defaultBarColor,
          defaultBorderColor = _props.defaultBorderColor,
          defaultBorderStyle = _props.defaultBorderStyle,
          defaultBorderWidth = _props.defaultBorderWidth,
          defaultColor = _props.defaultColor,
          defaultOpacity = _props.defaultOpacity,
          defaultTitleColor = _props.defaultTitleColor,
          defaultTitleOpacity = _props.defaultTitleOpacity,
          lineMarginOffset = _props.lineMarginOffset,
          size = _props.size,
          titleFontSize = _props.titleFontSize,
          titleTop = _props.titleTop,
          width = _props.width,


      return {
        step: {
          display: 'table-cell',
          paddingTop: circleTop,
          position: 'relative',
          width: width + '%'
        },
        activeCircle: {
          backgroundColor: activeColor,
          border: activeBorder,
          borderColor: activeBorderColor,
          borderStyle: activeBorderStyle,
          borderWidth: activeBorderColor ? defaultBorderWidth : 0,
          opacity: activeOpacity
        },
        activeTitle: {
          color: activeTitleColor,
          opacity: activeTitleOpacity
        },
        circle: {
          backgroundColor: defaultColor,
          borderColor: defaultBorderColor,
          borderRadius: '50%',
          borderStyle: defaultBorderStyle,
          borderWidth: defaultBorderColor ? defaultBorderWidth : 0,
          color: circleFontColor,
          display: 'block',
          fontSize: circleFontSize,
          height: size,
          margin: '0 auto',
          opacity: defaultOpacity,
          padding: 1,
          textAlign: 'center',
          width: size
        },
        completedBar: {
          borderTopStyle: barStyle,
          borderTopWidth: 1,
          borderTopColor: completeBarColor,
          opacity: completeOpacity
        }
        completedCircle: {
          backgroundColor: completeColor,
          borderColor: completeBorderColor,
          borderStyle: completeBorderStyle,
          borderWidth: completeBorderColor ? defaultBorderWidth : 0,
          opacity: completeOpacity
        },
        completedTitle: {
          color: completeTitleColor,
          opacity: completeTitleOpacity
        },
        index: {
          lineHeight: size + circleFontSize / 4 + 'px',
          color: circleFontColor
        },
        title: {
          color: defaultTitleColor,
          display: 'block',
          fontSize: titleFontSize,
          fontWeight: '300',
          marginTop: titleTop,
          opacity: defaultTitleOpacity,
          textAlign: 'center'
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
          top: circleTop + size / 2
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
          top: circleTop + size / 2
        },
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          icon = _props2.icon,
          index = _props2.index,
          active = _props2.active,
          completed = _props2.completed,
          first = _props2.first,
          isLast = _props2.isLast,
          href = _props2.href,
          onClick = _props2.onClick;


      var styles = this.getStyles();
      var circleStyle = Object.assign(styles.circle, completed ? styles.completedCircle : {}, active ? styles.activeCircle : {});
      var titleStyle = Object.assign(styles.title, completed ? styles.completedTitle : {}, active ? styles.activeTitle : {});
      var leftStyle = Object.assign(styles.leftBar, active || completed ? styles.completedBar : {});
      var rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

      var stepContent = icon ? _react2.default.createElement('img', { src: icon, alt: index + 1 }) : index + 1;

      return _react2.default.createElement(
        'div',
        { style: styles.step },
        _react2.default.createElement(
          'div',
          { style: circleStyle },
          active || completed ? _react2.default.createElement(
            'a',
            { href: href, onClick: onClick, style: styles.index },
            stepContent
          ) : _react2.default.createElement(
            'span',
            { style: styles.index },
            stepContent
          )
        ),
        active || completed ? _react2.default.createElement(
          'a',
          { href: href, onClick: onClick, style: titleStyle },
          title
        ) : _react2.default.createElement(
          'div',
          { style: titleStyle },
          title
        ),
        !first && _react2.default.createElement('div', { style: leftStyle }),
        !isLast && _react2.default.createElement('div', { style: rightStyle })
      );
    }
  }]);

  return Step;
}(_react.Component);

exports.default = Step;


Step.defaultProps = {
  activeBorder: '3px solid red',
  activeColor: '#5096FF',
  activeTitleColor: '#000',
  barStyle: 'solid',
  borderStyle: 'solid',
  circleFontColor: '#FFF',
  circleFontSize: 16,
  circleTop: 24,
  completeColor: '#5096FF',
  completeTitleColor: '#000',
  defaultBarColor: '#E0E0E0',
  defaultBorderColor: 'red',
  defaultBorderWidth: 3,
  defaultColor: '#E0E0E0',
  defaultTitleColor: '#757575',
  lineMarginOffset: 4,
  size: 32,
  titleFontSize: 16,
  titleTop: 8
};

Step.propTypes = {
  active: _propTypes.PropTypes.bool,
  activeBorder: _propTypes.PropTypes.string,
  activeBorderColor: _propTypes.PropTypes.string,
  activeBorderStyle: _propTypes.PropTypes.string,
  activeColor: _propTypes.PropTypes.string,
  activeOpacity: _propTypes.PropTypes.string,
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
  completed: _propTypes.PropTypes.bool,
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
  first: _propTypes.PropTypes.bool,
  index: _propTypes.PropTypes.number,
  isLast: _propTypes.PropTypes.bool,
  lineMarginOffset: _propTypes.PropTypes.number,
  size: _propTypes.PropTypes.number,
  title: _propTypes.PropTypes.string,
  titleFontSize: _propTypes.PropTypes.number,
  titleTop: _propTypes.PropTypes.number,
  width: _propTypes.PropTypes.number.isRequired
};
