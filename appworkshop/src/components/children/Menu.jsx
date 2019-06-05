import React from 'react';
import SubMenu from './SubMenu';

class Menu extends React.Component {
  render() {
    return <div>
      <div>First <code>Example</code>:</div>
      <SubMenu>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
        <div>sus sub <code>Example</code> with different children:</div>
        <SubMenu>
          <div>Option 1.1</div>
          <div>Option 1.2</div>
        </SubMenu>
      </SubMenu>
      <div>Second <code>Example</code> with different children:</div>
      <SubMenu>
        <div>Option A</div>
        <div>Option B</div>
      </SubMenu>
    </div>;
  }
}

export default Menu;