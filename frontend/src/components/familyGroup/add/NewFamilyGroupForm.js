import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import FontAwesome from 'react-fontawesome';

import { withStyles } from 'material-ui-next/styles';

import Grid from 'material-ui-next/Grid';
import TextField from 'material-ui-next/TextField';
import Typography from 'material-ui-next/Typography';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
  } from 'material-ui-next/List';
  import Stepper, { Step, StepLabel } from 'material-ui-next/Stepper';
import Toolbar from 'material-ui-next/Toolbar';
import Button from 'material-ui-next/Button';

import * as actions from '../../../actions/familyGroupAction';


const styles = theme => ({

 rootStyle: {
      textAlign: 'center',
  },

  stepperRoot: {
    display: 'flex',
    paddingTop: 0,
    paddingLeft: 24,
    paddingBottom: 24,
    paddingRight: 24,
  },

  spacer: {
    flex: '1 1 100%',
  },

  actionsStyle: {
    flex: '1 0 auto',
  },

  buttonStyle: {
    marginRight: 8,
  },
  formControl: {
    marginLeft: 24,
    marginBottom: 15,
    marginRight: 10,
    width: '90%',
  },
  button: {
    textTransform: 'none',
    fontWeight: 400,
    marginTop: 10,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const renderTextField = ({ input, ...rest }) => (
  <TextField {...input} {...rest} style={{ width: 400 }} />
    );


const getSteps = () => ['Family Name', 'Grown Ups', 'Kids and Schedules'];

class NewFamilyGroupForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            adults: [],
            kids: [],
            activeStep: 0,

        };

        this.renderAdults = this.renderAdults.bind(this);
        this.renderAddAdult = this.renderAddAdult.bind(this);
        this.renderKids = this.renderKids.bind(this);
        this.renderAddKid = this.renderAddKid.bind(this);
        this.renderStepper = this.renderStepper.bind(this);
        this.renderName = this.renderName.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }


    componentWillMount() {
        if (this.state.adults.length === 0) {
            // Add this user as an adult
            const thisUser = {
                id: this.props.user.user.id,
                email: this.props.user.user.email,
                displayName: this.props.user.user.displayName,
            };

            this.setState({ adults: [...this.state.adults, thisUser] });
        }
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }

    renderAddAdult() {
        // TODO: Pull this into its own component
        return (
          <span>
            <Field name="addEmail" component={renderTextField} required label="Adult's email address" />
            <Button onClick={this.addAdult}>Add</Button>
          </span>
        );
    }

    renderAdults() {
        return (
          <div>
            <Typography type="subheading" gutterBottom className={this.props.classes.formControl}>
              Adults are the ones in charge; the only ones in the family who can modify a schedule or allocate some extra screen time.
            </Typography>
            <Grid container justify="center" alignItems="center" >
              <Grid item md={6}>
                {this.renderAddAdult()}
                <List>
                  {this.state.adults.map(adult => (

                    <ListItem key="adult.email">
                      <ListItemAvatar>
                        <FontAwesome name="user" />
                      </ListItemAvatar>
                      <ListItemText primary={adult.email} />
                    </ListItem>

                  ))}
                </List>
              </Grid>


            </Grid>
          </div>
          );
        }

    renderAddKid() {
        // TODO: Pull this into its own component
        return (
          <div>
            <div>
              <Field name="kidFirstname" component={renderTextField} required label="First name" />
            </div>
            <div>
              <Field name="kidSurname" component={renderTextField} required label="Last name" />
            </div>
            <div>
              <Button >Add</Button>
            </div>
          </div>
        );
    }

    renderKids() {
      return (<div>
        <Typography type="headline" align="center" gutterBottom style={{ marginTop: 30 }}>
              Kids
        </Typography>
        <Typography type="subheading" align="center" gutterBottom >
              List the kids whose screen time needs to be monitored and create a schedule for them
        </Typography>
        <Grid container justify="center" alignItems="center" >
          <Grid item md={6}>
            {this.renderAddKid()}
            <List>
              {this.state.kids.map(kid => (

                <ListItem>
                  <ListItemAvatar>
                    <FontAwesome name="user" />
                  </ListItemAvatar>
                  <ListItemText primary={kid.displayName} />
                </ListItem>

                  ))}
            </List>
          </Grid>


        </Grid>
      </div>);
    }

    renderStepper() {
      return (
        <Stepper className={this.props.classes.stepperRoot} activeStep={this.state.activeStep}>
          {getSteps().map((label, index) => {
                            const props = {};
                            const labelProps = {};

                            return (
                              <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                              </Step>
                            );
                        })}
        </Stepper>
      );
    }

    renderStep() {
      switch (this.state.activeStep) {
        case 0:
          return (
            this.renderName(this.props.user)
          );

        case 1:
          return this.renderAdults(this.props.user);

        default:
          return this.renderKids();
      }
    }

    handleNext() {
      console.log(this.props.familyGroupName);
      this.setState({ activeStep: this.state.activeStep + 1 });
    }


    renderName(user) {
      return (
        <div>
          <Typography type="subheading" gutterBottom className={this.props.classes.formControl}>
              First we need some information to identify your family.
          </Typography>
          <div>
            <Field
              className={this.props.classes.formControl}
              name="familyGroupName"
              component={renderTextField}
              required
              label="Give your family group a name"
              helperText={`eg: The ${user.user.surname} Family`}
            />
          </div>
          <div className={this.props.classes.formControl}>
            <Button raised className={this.props.classes.button} color="default" onClick={() => this.fileUpload.click()}>
              Upload a family picture
              <FontAwesome name="upload" style={{ marginLeft: 8 }} />
            </Button>
            <input
              type="file"
              ref={(fileUpload) => { this.fileUpload = fileUpload; }}
              style={{ visibility: 'hidden' }}
              onChange={this.groupImgUpload}
            />
          </div>
        </div>
       );
    }


    renderButtons() {
      return (
        <div>
          <Toolbar style={{ marginTop: 20 }}>
            <div className={this.props.classes.spacer} />
            <div className={this.props.classes.actionsStyle}>
              <Button
                disabled={this.state.activeStep === 0}
                // onClick={this.handleBack}
                className={this.props.classes.buttonStyle}
                style={{ textTransform: 'none' }}
              >
                                                Back
              </Button>

              {this.state.activeStep === 2 ?
                <Button
                  raised
                  color="primary"
                  // onClick={this.handleNext}
                  className={this.props.classes.buttonStyle}
                  type="submit"
                  style={{ textTransform: 'none' }}
                >
                                                    Finish
                </Button> :
                <Button
                  raised
                  color="primary"
                  onClick={this.handleNext}
                  className={this.props.classes.buttonStyle}
                  style={{ textTransform: 'none' }}
                >
                                                    Next
                </Button>}

            </div>
          </Toolbar>
        </div>

      );
    }

    render() {
        return (
          <form >
            {this.renderStepper()}
            {this.renderStep()}
            {this.renderButtons()}

          </form>
        );
    }
}

renderTextField.propTypes = {
    input: PropTypes.object.isRequired,
};

NewFamilyGroupForm.propTypes = {
    ...propTypes,
};
// Decorate with connect to read form values
/*
const selector = formValueSelector('NewFamilyForm'); // <-- same as form name
NewFamilyGroupForm = connect((state) => {
  const { familyGroupName } = selector(state, 'familyGroupName');
  console.log(familyGroupName);
  return {
    familyGroupName,
  };
})(NewFamilyGroupForm);
*/

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default withStyles(styles)(connect(mapStateToProps, actions)((reduxForm({ form: 'NewFamilyForm' })(NewFamilyGroupForm))));
