import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../src/index.jsx';

const Panel = Tabs.Panel;

ReactDOM.render(
  <Tabs onChange={key => console.log(key)}>
    <Panel name="nav1" title="Panel1">
      content1
    </Panel>
    <Panel name="nav2" title="Panel2">
      content2
    </Panel>
    <Panel disabled name="nav3" title="Panel3">
      content3
    </Panel>
    <Panel href="https://github.com/LingyuCoder" name="nav4" title="Link" />
  </Tabs>
  , document.getElementById('demo'));
