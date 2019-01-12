import React from 'react';
import Aux from '../../hoc/Aux';
import ContentStyle from './Layout_Style';

const Layout = props => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <ContentStyle>{props.children}</ContentStyle>
  </Aux>

);

export default Layout;
