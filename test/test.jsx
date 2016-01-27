import 'should';
import Tabs from '../src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
const Panel = Tabs.Panel;
mocha.ui('bdd');
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('should show first activable panel when no specific active name', function() {
    let cp = ReactDOM.render(
      <Tabs>
        <Panel disabled name="nav1" title="Panel1">
          content1
        </Panel>
        <Panel name="nav2" title="Panel2">
          content2
        </Panel>
      </Tabs>
      , container);
    ReactDOM.findDOMNode(cp).querySelector('.panel').innerHTML.should.be.eql('content2');
  });
  it('should switch to other activable panel', function() {
    let cp = ReactDOM.render(
      <Tabs>
        <Panel name="nav1" title="Panel1">
          content1
        </Panel>
        <Panel name="nav2" title="Panel2">
          content2
        </Panel>
        <Panel disabled name="nav3" title="Panel3">
          content3
        </Panel>
      </Tabs>
      , container);
    TestUtils.Simulate.click(cp.refs['nav-nav2']);
    ReactDOM.findDOMNode(cp).querySelector('.panel').innerHTML.should.be.eql('content2');
    TestUtils.Simulate.click(cp.refs['nav-nav1']);
    ReactDOM.findDOMNode(cp).querySelector('.panel').innerHTML.should.be.eql('content1');
    TestUtils.Simulate.click(cp.refs['nav-nav3']);
    ReactDOM.findDOMNode(cp).querySelector('.panel').innerHTML.should.be.eql('content1');
  });
});
if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}
