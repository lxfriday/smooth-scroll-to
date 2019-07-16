# @lxfriday/smooth-scroll-to

javascript scroll for anywhere

## install

```bash
npm i @lxfriday/smooth-scroll-to -S
# or
yarn add @lxfriday/smooth-scroll-to
```

## params
`smoothScrollTo(ref, pos[, rate])`

- `ref` {`HTMLElement`} `required`, the component you want to scroll
- `pos` {`number`} `required`, the component you want to scroll
- `rate` {`numbger`} scroll speed, bigger means faster

## usage
// use in react

```jsx harmony
import React, { Component } from 'react';
import smoothScrollTo from '@lxfriday/smooth-scroll-to';

class Scroll extends Component {
  handleScroll = () => {
    smoothScrollTo(this.scroll, 1000)
  }
  
  render() {
    return (
      <div ref={r => (this.scroll = r)} style={{ height: 700 }}>
        <button onClick={this.handleScroll}>scroll go</button>
        <div style={{ height: 5000 }}>
          <div style={{ height: 300, backgroundColor: 'red' }} />
          <div style={{ height: 300, backgroundColor: 'green' }} />
          <div style={{ height: 300, backgroundColor: 'yellow' }} />
          <div style={{ height: 300, backgroundColor: 'red' }} />
          <div style={{ height: 300, backgroundColor: 'green' }} />
          <div style={{ height: 300, backgroundColor: 'yellow' }} />
          <div style={{ height: 300, backgroundColor: 'red' }} />
          <div style={{ height: 300, backgroundColor: 'green' }} />
          <div style={{ height: 300, backgroundColor: 'yellow' }} />
          <div style={{ height: 300, backgroundColor: 'red' }} />
          <div style={{ height: 300, backgroundColor: 'green' }} />
          <div style={{ height: 300, backgroundColor: 'yellow' }} />
          <div style={{ height: 300, backgroundColor: 'red' }} />
          <div style={{ height: 300, backgroundColor: 'green' }} />
          <div style={{ height: 300, backgroundColor: 'yellow' }} />
        </div>
      </div>
    )
  }
}
```


