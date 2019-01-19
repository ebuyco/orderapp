import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import ContentStyle from './Layout_Style';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    showSideBar: false
  }

  sideBarClosedHandler = () => {
    this.setState({ showSideBar: false });
  }

   sideDrawerToggleHandler = () => {
     this.setState(prevState => ({ showSideBar: !prevState.showSideBar }
     ));
   }

   render() {
     return (
       <Aux>
         <Toolbar
           drawerToggleClicked={this.sideDrawerToggleHandler}
         />
         <Sidebar
           open={this.state.showSideBar}
           closed={this.sideBarClosedHandler}
         />
         <ContentStyle role='main'>
           {this.props.children}
         </ContentStyle>
         <Footer />
       </Aux>

     );
   }
}
export default Layout;
