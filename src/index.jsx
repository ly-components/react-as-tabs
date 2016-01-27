import './index.less';
import React from 'react';
import Panel from './panel.jsx';
import Classnames from 'classnames';
const noop = () => {};

class ReactAsTabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: this._getActiveName(props)
    };
    this._handleNavClick = this._handleNavClick.bind(this);
    this._getActiveName = this._getActiveName.bind(this);
    this._getActivePanel = this._getActivePanel.bind(this);
    this._getNavs = this._getNavs.bind(this);
  }
  componentWillReceiveProps(props) {
    if (typeof props.active !== 'string') return;
    const active = this.state.active;
    this.setState({
      active: this._getActivePanel(props) || active
    });
  }
  _handleNavClick(e) {
    const name = e.target.getAttribute('data-name');
    const href = e.target.getAttribute('data-href');
    if (href) {
      e.stopPropagation();
      window.location.href = href;
      return;
    }
    name !== this.state.active && this.setState({
      active: name
    });
    this.props.onChange(name);
  }
  _getActiveName(props) {
    if (props.active) return props.active;
    let firstActivable = null;
    React.Children.forEach(props.children, child => {
      if (child.type === Panel && !firstActivable && !child.props.disabled)
        firstActivable = child.props.name;
    });
    return firstActivable;
  }
  _getActivePanel() {
    let panel = null;
    React.Children.forEach(this.props.children, child => {
      if (child.type === Panel && !panel && child.props.name === this.state.active)
        panel = React.cloneElement(child);
    });
    return panel;
  }
  _getNavs() {
    let navs = [];
    React.Children.forEach(this.props.children, child => {
      if (child.type === Panel) {
        const navClass = Classnames({
          nav: true,
          disabled: child.props.disabled,
          active: child.props.name === this.state.active
        });
        navs.push(<li className={navClass} data-href={child.props.href} data-name={child.props.name} key={child.props.name} onClick={child.props.disabled ? noop : this._handleNavClick} ref={`nav-${child.props.name}`}>{child.props.title}</li>);
      }
    });
    return navs;
  }
  render() {
    return (
      <div className="react-as-tabs">
        <ul className="nav-list">
          {this._getNavs()}
        </ul>
        {this._getActivePanel()}
      </div>
    );
  }
}

ReactAsTabs.displayName = 'ReactAsTabs';
ReactAsTabs.propTypes = {
  /**
   * current activated panel name
   */
  active: React.PropTypes.string,
  /**
   * panels
   */
  children: React.PropTypes.node,
  /**
   * callback when panel changes
   */
  onChange: React.PropTypes.func
};
ReactAsTabs.defaultProps = {
  children: null,
  onChange: noop
};
ReactAsTabs.Panel = Panel;
export default ReactAsTabs;
