import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleSearchQuery = event => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
  };

  render() {
    const { value } = this.state;

    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmitForm} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleSearchQuery}
            value={value}
            className={style.SearchFormInput}
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
