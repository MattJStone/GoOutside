import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card, { CardHeader, CardContent, CardMedia } from 'material-ui-next/Card';
import Button from 'material-ui-next/Button';
import IconButton from 'material-ui-next/IconButton';
import Grid from 'material-ui-next/Grid';
import FontAwesomeIcon from 'react-fontawesome';
import grey from 'material-ui-next/colors/grey';

import NewFamilyGroup from '../familyGroup/add/NewFamilyGroupPage';

const cardStyle = {
      height: 220,
      width: 350,
      textAlign: 'center',
  };


const newFamilyStyleIcon = {
    fontSize: '3em',
    color: grey[500],
    textAlign: 'center',
    verticalAlign: 'middle',
  };

const newFamilyStyle = {
  textAlign: 'center',
  verticalAlign: 'middle',
};

const buildFamilyDesc = (theFamily) => {
  let parents = '';
  theFamily.members.adults.map((adult) => {
    parents += `${adult.displayName}, `;
  });

  let kids = '';
  theFamily.members.kids.map((kid) => {
    kids += `${kid.displayName}, `;
  });

  return (
    <div>
      <p>{theFamily.members.adults.length > 0 ? `Grown ups: ${parents.substr(0, parents.length - 2)}` : ''}</p>
      <p>{theFamily.members.kids.length > 0 ? `Kiddies: ${kids.substr(0, kids.length - 2)}` : ''}</p>
    </div>
  );
};

class FamilyGroupCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdd: false,
    };

    this.renderFamilyGroup = this.renderFamilyGroup.bind(this);
    this.renderAddNewFamily = this.renderAddNewFamily.bind(this);
    this.toggleShowAdd = this.toggleShowAdd.bind(this);
  }


  toggleShowAdd() {
    this.setState({ showAdd: !this.showAdd });
  }

 renderFamilyGroup(theFamily) {
   return (
     <Card key={this.props.key} style={{ minWidth: 350 }}>
       <CardHeader
         title={<h4>{theFamily.name}</h4>}
         action={
           <IconButton aria-label="More" aria-haspopup="true" onClick={this.handleClick} >
             <FontAwesomeIcon name="edit" />
           </IconButton>
        }
       />
       <CardMedia
         style={cardStyle}
         image={theFamily.logo ? theFamily.logo : '/stockImages/family1.jpg'}
         title={theFamily.name}
       />
       <CardContent>
         {buildFamilyDesc(theFamily)}
       </CardContent>
     </Card>
);
 }


 renderAddNewFamily() {
  return (

    <div>
      <NewFamilyGroup showModal={this.state.showAdd} />
      <Card key="-1">

        <CardMedia>
          <div style={newFamilyStyleIcon}>
            <Button
              variant="fab"
              color="primary"
              aria-label="add"
              style={newFamilyStyleIcon}
              onClick={this.toggleShowAdd}
            >
              <FontAwesomeIcon name="plus-circle" />
            </Button>

          </div>
        </CardMedia>
        <CardContent style={newFamilyStyle}>
          <h3>
            Start a new family
          </h3>
          <p>
            Create a new family to rule over...
          </p>
        </CardContent>
      </Card>
    </div>
);
 }

render() {
  const { theFamily, key } = this.props;

  console.log(theFamily);


  return (
    <Grid item xs={6} md={3} lg={3} key={key}>
      {theFamily.id !== 'empty'
        ? this.renderFamilyGroup(theFamily)
        : this.renderAddNewFamily()}
    </Grid>
      );
    }
}

FamilyGroupCard.propTypes = {
  theFamily: PropTypes.object.isRequired,
};

export default FamilyGroupCard;
