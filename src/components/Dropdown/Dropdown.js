import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle">
          Watch
        </button>

        <div className="Dropdown__menu">burger menu</div>
      </div>
    );
  }
}

export default Dropdown;
