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
      'https://user-images.githubusercontent.com/26694930/62828649-a0a4a780-bbb9-11e9-8a73-0bef96f27fc6.JPEG',
  },
  {
    label: 'not wuite right',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/62828691-87e8c180-bbba-11e9-85dd-2749e9becf9e.jpg',
  },
  {
    label: 'style 3',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/62828636-54596780-bbb9-11e9-82e6-0d346b47c007.JPEG',
  },
  {
    label: 'style 4',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/62828702-ce3e2080-bbba-11e9-9300-273e5a58e626.jpg',
  },
  {
    label: 'style 5',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/62828706-e4e47780-bbba-11e9-8b23-ecf913fb557a.jpg',
  },
  {
    label: 'style 6',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/62828712-07769080-bbbb-11e9-9970-f44e18fa109f.jpg',
  },
  {
    label: 'style 7',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/62828716-1e1ce780-bbbb-11e9-8585-a803edb4f76f.jpg',
  },
  {
    label: 'style 8',
    imgPath:
      'https://user-images.githubusercontent.com/26694930/62828727-3ab91f80-bbbb-11e9-9925-53c245ff45cd.JPEG',
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
        {/* <mUi.Paper square elevation={0} className={classes.header}> //* maybe we want this in the future, maybe not
          <mUi.Typography>{tutorialSteps[activeStep].label}</mUi.Typography>
        </mUi.Paper> */}
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