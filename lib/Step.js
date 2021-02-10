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
          activeBarColor = _props.activeBarColor,
          activeBorder = _props.activeBorder,
          activeBorderColor = _props.activeBorderColor,
          activeBorderStyle = _props.activeBorderStyle,
          activeColor = _props.activeColor,
          activeOpacity = _props.activeOpacity,
          activeTitleColor = _props.activeTitleColor,
          activeTitleOpacity = _props.activeTitleOpacity,
          barHeight = _props.barHeight,
          barStyle = _props.barStyle,
          circleFontColor = _props.circleFontColor,
          circleFontSize = _props.circleFontSize,
          circleTop = _props.circleTop,
          completeBarColor = _props.completeBarColor,
          completeBarStyle = _props.completeBarStyle,
          completeBorder = _props.completeBorder,
          completeBorderColor = _props.completeBorderColor,
          completeColor = _props.completeColor,
          completeOpacity = _props.completeOpacity,
          completeTitleColor = _props.completeTitleColor,
          completeTitleOpacity = _props.completeTitleOpacity,
          defaultBarColor = _props.defaultBarColor,
          defaultBorder = _props.defaultBorder,
          defaultBorderColor = _props.defaultBorderColor,
          defaultBorderStyle = _props.defaultBorderStyle,
          completeBorderStyle = _props.completeBorderStyle,
          defaultBorderWidth = _props.defaultBorderWidth,
          defaultColor = _props.defaultColor,
          defaultOpacity = _props.defaultOpacity,
          defaultTitleColor = _props.defaultTitleColor,
          defaultTitleOpacity = _props.defaultTitleOpacity,
          lineMarginOffset = _props.lineMarginOffset,
          size = _props.size,
          titleFontSize = _props.titleFontSize,
          titleTop = _props.titleTop,
          width = _props.width;


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
          opacity: activeOpacity
        },
        activeTitle: {
          color: activeTitleColor,
          opacity: activeTitleOpacity
        },
        circle: {
          backgroundColor: defaultColor,
          border: defaultBorder,
          borderRadius: '50%',
          color: circleFontColor,
          display: 'block',
          fontSize: circleFontSize,
          height: size,
          opacity: defaultOpacity,
          padding: 0,
          textAlign: 'center',
          width: size
        },
        activeBar: {
          borderTopStyle: 'dotted',
          borderTopWidth: '4px',
          borderTopColor: completeBarColor
        },
        completedBar: {
          borderTopStyle: 'solid',
          borderTopWidth: '2px',
          borderTopColor: completeBarColor,
          opacity: completeOpacity,
          top: circleTop + size / 2
        },
        completedCircle: {
          backgroundColor: completeColor,
          border: completeBorder,
          opacity: completeOpacity,
          padding: 1
        },
        completedTitle: {
          color: completeTitleColor,
          opacity: completeTitleOpacity
        },
        index: {
          lineHeight: size + circleFontSize / 4 + 'px',
          color: circleFontColor
        },
        barStyle: {
          borderTopColor: defaultBarColor,
          borderTopStyle: 'dotted',
          borderTopWidth: '4px',
          height: 1,
          left: '-85%',
          marginLeft: '3px',
          marginRight: size / 2 + lineMarginOffset + 1,
          opacity: defaultOpacity,
          position: 'absolute',
          right: '93%',
          top: circleTop + size / 2 - 1
        },
        // rightBar: {
        //   borderTopColor: defaultBarColor,
        //   borderTopStyle: barStyle,
        //   borderTopWidth: barHeight,
        //   display: 'none',
        //   height: 2,
        //   left: '50%',
        //   marginLeft: size / 2 + lineMarginOffset,
        //   opacity: defaultOpacity,
        //   position: 'absolute',
        //   right: '0',
        //   top: circleTop + size / 2,
        // },
        title: {
          color: defaultTitleColor,
          display: 'block',
          fontSize: titleFontSize,
          fontWeight: '300',
          marginTop: titleTop,
          opacity: defaultTitleOpacity,
          textAlign: 'left'
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          active = _props2.active,
          completed = _props2.completed,
          first = _props2.first,
          href = _props2.href,
          icon = _props2.icon,
          index = _props2.index,
          isLast = _props2.isLast,
          message = _props2.message,
          mouseover = _props2.mouseover,
          onClick = _props2.onClick,
          title = _props2.title;


      var styles = this.getStyles();
      var circleStyle = Object.assign(styles.circle, completed ? styles.completedCircle : {}, active ? styles.activeCircle : {});
      var titleStyle = Object.assign(styles.title, completed ? styles.completedTitle : {}, active ? styles.activeTitle : {});

      var barStyleSet = Object.assign(styles.barStyle, completed ? styles.completedBar : {}, active ? styles.activeBar : {});

      // const leftStyle = Object.assign(styles.leftBar, (active || completed) ? styles.completedBar : {});
      // const rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

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
        !first && _react2.default.createElement('div', { style: barStyleSet })
      );
    }
  }]);

  return Step;
}(_react.Component);

exports.default = Step;


Step.defaultProps = {
  activeColor: 'red',
  activeTitleColor: '#000',
  borderStyle: 'solid',
  circleFontColor: '#FFF',
  circleFontSize: 16,
  circleTop: 24,
  completeTitleColor: '#000',
  defaultBarColor: '#E0E0E0',
  defaultColor: '#E0E0E0',
  defaultTitleColor: '#757575',
  lineMarginOffset: 4,
  size: 32,
  titleFontSize: 16,
  titleTop: 8
};

Step.propTypes = {
  active: _propTypes.PropTypes.bool,
  activeBarColor: _propTypes.PropTypes.string,
  activeBorder: _propTypes.PropTypes.string,
  activeBorderColor: _propTypes.PropTypes.string,
  activeBorderStyle: _propTypes.PropTypes.string,
  activeColor: _propTypes.PropTypes.string,
  activeOpacity: _propTypes.PropTypes.string,
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
  completed: _propTypes.PropTypes.bool,
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