import React, { Component } from 'react';

const INITIAL_QUERY = {
  value: '',
};

class Searchbar extends Component {
  state = {
    ...INITIAL_QUERY,
  };

  handleSearchQuery = event => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmitForm} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleSearchQuery}
            value={value}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
