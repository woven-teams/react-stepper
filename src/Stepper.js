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
  activeBarColor, activeBorder, activeBorderColor, activeBorderStyle, activeColor, activeOpacity, activeStep, activeTitleColor, activeTitleOpacity, barHeight, barStyle, circleFontColor, circleFontSize, circleTop, completeBarColor, completeBarStyle, completeBorder, completeBorderColor, completeBorderStyle, completeColor, completeOpacity, completeTitleColor, completeTitleOpacity, defaultBarColor, defaultBorder, defaultBorderColor, defaultBorderStyle, defaultBorderWidth, defaultColor, defaultOpacity, defaultTitleColor, defaultTitleOpacity, disabledSteps, lineMarginOffset, size, steps, titleFontSize, titleTop,
}) {
  return (
    <div style={ styles.root }>
      <div style={ styles.stepper }>
        { steps.map((step, index) => (
          <Step
            key={index}
            active={!(disabledSteps || []).includes(index) && index === activeStep}
            activeBarColor={activeBarColor}
            activeBorder={activeBorder}
            activeBorderColor={activeBorderColor}
            activeBorderStyle={activeBorderStyle}
            activeColor={activeColor}
            activeOpacity={activeOpacity}
            activeTitleColor={activeTitleColor}
            activeTitleOpacity={activeTitleOpacity}
            barStyle={barStyle}
            barHeight={barHeight}
            circleFontColor={circleFontColor}
            circleFontSize={circleFontSize}
            circleTop={circleTop}
            completeBarColor={completeBarColor}
            completeBarStyle={completeBarStyle}
            completeBorder={completeBorder}
            completeBorderColor={completeBorderColor}
            completeBorderStyle={completeBorderStyle}
            completeColor={completeColor}
            completed={!(disabledSteps || []).includes(index) && index < activeStep}
            completeOpacity={completeOpacity}
            completeTitleColor={completeTitleColor}
            completeTitleOpacity={completeTitleOpacity}
            defaultBarColor={defaultBarColor}
            defaultBorder={defaultBorder}
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
            message={step.message}
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
  activeBarColor: PropTypes.string,
  activeBorder: PropTypes.string,
  activeBorderColor: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  activeColor: PropTypes.string,
  activeOpacity: PropTypes.string,
  activeStep: PropTypes.number,
  activeTitleColor: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  barHeight: PropTypes.number,
  barStyle: PropTypes.string,
  circleFontColor: PropTypes.string,
  circleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  completeBarColor: PropTypes.string,
  completeBarStyle: PropTypes.string,
  completeBorder: PropTypes.string,
  completeBorderColor: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  completeColor: PropTypes.string,
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
  lineMarginOffset: PropTypes.number,
  size: PropTypes.number,
  steps: PropTypes.array,
  titleFontSize: PropTypes.number,
  titleTop: PropTypes.number,
};

export default Stepper;
