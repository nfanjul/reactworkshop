import React from 'react';

class SubMenu extends React.Component {
  render() {
    return <div>
      <div>Children ({this.props.children.length}):</div>
      {this.props.children}
    </div>;
  }
}