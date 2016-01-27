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
  /**
   * children nodes of this panel
   */
  children: React.PropTypes.node,
  /**
   * whether this panel can be activated
   */
  disabled: React.PropTypes.bool,
  /**
   * if nav is a link, this is the url
   */
  href: React.PropTypes.string,
  /**
   * name of this panel, required
   */
  name: React.PropTypes.string.isRequired,
  /**
   * text of the nav, required
   */
  title: React.PropTypes.string.isRequired
};
Panel.defaultProps = {
  name: '',
  disabled: false,
  children: null,
  title: ''
};
export default Panel;
