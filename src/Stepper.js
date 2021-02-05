import React from 'react';
import { PropTypes } from 'prop-types';

import Step from './Step';

const styles = {
  root: {
    width: '100%',
    minHeight: 0,
    padding: 0,
  },
  stepper: {
    display: 'table',
    width: '100%',
    margin: '0 auto',
  },
};

function Stepper({
  activeBorder,
  activeStep, steps, disabledSteps,
  activeColor, completeColor, defaultColor, circleFontColor,
  activeTitleColor, completeTitleColor, defaultTitleColor,
  size, circleFontSize, titleFontSize,
  circleTop, titleTop, completeOpacity, activeOpacity, defaultOpacity,
  completeTitleOpacity, activeTitleOpacity, defaultTitleOpacity, barStyle,
  defaultBorderColor, completeBorderColor, activeBorderColor, defaultBorderStyle,
  completeBorderStyle, activeBorderStyle, defaultBarColor, completeBarColor, lineMarginOffset, defaultBorderWidth
}) {
  return (
    <div style={ styles.root }>
      <div style={ styles.stepper }>
        { steps.map((step, index) => (
          <Step
            key={index}
            active={!(disabledSteps || []).includes(index) && index === activeStep}
            activeBorder={activeBorder}
            activeBorderColor={activeBorderColor}
            activeBorderStyle={activeBorderStyle}
            activeColor={activeColor}
            activeOpacity={activeOpacity}
            activeTitleColor={activeTitleColor}
            activeTitleOpacity={activeTitleOpacity}
            barStyle={barStyle}
            circleFontColor={circleFontColor}
            circleFontSize={circleFontSize}
            circleTop={circleTop}
            completeBarColor={completeBarColor}
            completeBorderColor={completeBorderColor}
            completeBorderStyle={completeBorderStyle}
            completeColor={completeColor}
            completed={!(disabledSteps || []).includes(index) && index < activeStep}
            completeOpacity={completeOpacity}
            completeTitleColor={completeTitleColor}
            completeTitleOpacity={completeTitleOpacity}
            defaultBarColor={defaultBarColor}
            defaultBorderColor={defaultBorderColor}
            defaultBorderStyle={defaultBorderStyle}
            defaultBorderWidth={defaultBorderWidth}
            defaultColor={defaultColor}
            defaultOpacity={defaultOpacity}
            defaultTitleColor={defaultTitleColor}
            defaultTitleOpacity={defaultTitleOpacity}
            first={index === 0}
            href={step.href}
            icon={step.icon}
            index={index}
            isLast={index === steps.length - 1}
            lineMarginOffset={lineMarginOffset}
            onClick={step.onClick}
            size={size}
            title={step.title}
            titleFontSize={titleFontSize}
            titleTop={titleTop}
            width={100 / steps.length}
          />
        )) }
      </div>
    </div>
  );
}

Stepper.defaultProps = {
  activeStep: 0,
};

Stepper.propTypes = {
  activeBorder: PropTypes.string,
  activeBorderColor: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  activeColor: PropTypes.string,
  activeOpacity: PropTypes.string,
  activeStep: PropTypes.number,
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
  completeOpacity: PropTypes.string,
  completeTitleColor: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  defaultBarColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  defaultBorderWidth: PropTypes.number,
  defaultColor: PropTypes.string,
  defaultOpacity: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  lineMarginOffset: PropTypes.number,
  size: PropTypes.number,
  steps: PropTypes.array,
  titleFontSize: PropTypes.number,
  titleTop: PropTypes.number,
};

export default Stepper;
