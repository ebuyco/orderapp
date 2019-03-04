import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import ContentStyle from './Layout_Style';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/SideBar/SideBar';
import Chevron from '../../components/Navigation/Chevron/Chevron';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    showSideBar: false,
    showChevron: false
  }

  sideBarClosedHandler = () => {
    this.setState({ showSideBar: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideBar: !prevState.showSideBar }
    ));
  }

  chevronCloseHandler = () => {
    this.setState({ showChevron: false });
  }

   chevronToggleHandler = () => {
     this.setState(prevState => ({ showChevron: !prevState.showChevron }
     ));
   }


   render() {
     return (
       <Aux>
         <Toolbar
           chevronToggleClicked={this.chevronToggleHandler}
           drawerToggleClicked={this.sideDrawerToggleHandler}
         />
         <Chevron
           open={this.state.showChevron}
           closed={this.chevronCloseHandler}
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
