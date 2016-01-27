import React from 'react';

class Panel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="panel">
        {this.props.children}
      </div>
    );
  }
}
Panel.displayName = 'Panel';
Panel.propTypes = {
  children: React.PropTypes.node,
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};
Panel.defaultProps = {
  name: '',
  disabled: false,
  children: null,
  title: ''
};
export default Panel;
