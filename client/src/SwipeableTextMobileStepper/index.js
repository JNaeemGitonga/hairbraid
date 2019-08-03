import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import componentStyles from './SwipeableTextMobileStepper.module.css'
import { autoPlay } from 'react-swipeable-views-utils';
import * as mUi from '../SharedComnponents/components';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'braider 1',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/60693845-cd261f00-9ea9-11e9-98af-19703f946bdb.JPG',
  },
  {
    label: 'style 2',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/60693873-e929c080-9ea9-11e9-8a66-03f70d64057e.JPG',
  },
  {
    label: 'style 3',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'style 4',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/60693902-10808d80-9eaa-11e9-954d-1a7b4e3ffffd.JPG',
  },
  {
    label: 'style 5',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/60693927-2f7f1f80-9eaa-11e9-9436-b9c07b959efe.JPG',
  },
];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={ `${ classes.root } ${ componentStyles.wrap }` }>
        <mUi.Paper square elevation={0} className={classes.header}>
          <mUi.Typography>{tutorialSteps[activeStep].label}</mUi.Typography>
        </mUi.Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          { tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          )) }
        </AutoPlaySwipeableViews>
        {/* <mUi.MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <mUi.Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <mUi.KeyboardArrowLeft /> : <mUi.KeyboardArrowRight />}
            </mUi.Button>
          }
          backButton={
            <mUi.Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <mUi.KeyboardArrowRight /> : <mUi.KeyboardArrowLeft />}
              Back
            </mUi.Button>
          }
        /> */}
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default mUi.withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);