import React, { Component } from 'react';
import ToggleStyle from './ToggleStyle';
import Aux from '../../../../hoc/Aux/Aux';
import ToggleIcon from './ToggleIcon';


// const DrawerToggle = props => (
//   <Aux>
//     <ToggleStyle
//       onClick={props.clicked}
//     >
//       <ToggleIcon />
//     </ToggleStyle>
//   </Aux>
// );

class DrawerToggle extends Component {
  state = {
    showIcon: false,

  };

  iconClosedHandler = () => {
    this.setState({ showIcon: false });
  };

  iconToggleHandler = () => {
    this.setState(prevState => ({ showIcon: !prevState.showIcon }
    ));
  };

  render() {
    return (
      <Aux>
        <ToggleStyle
          onClick={this.props.clicked}
        >
          <ToggleIcon
            toggleHandler={this.iconToggleHandler}
            open={this.state.showIcon}
            close={this.iconClosedHandler}
          />
        </ToggleStyle>
      </Aux>
    );
  }
}


export default DrawerToggle;
