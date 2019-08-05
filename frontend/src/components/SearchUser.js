import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from 'store/connectIn/selectors';


class SearchUser extends Component {
  state = { isLoading: false, results: [], value: '' };

  handleResultSelect = (e, { result }) => this.setState({ value: result.first_name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState({ isLoading: false, results: [], value: '' })

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.first_name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.users, isMatch),
      });
    }, 300)
  };

  resultRenderer = ({ _id, first_name }) => {
    // console.log(result);
    return <Label as={Link} key={_id} to={`/user/${_id}`} content={first_name} />
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        resultRenderer={this.resultRenderer}
      />
    )
  }
}
const mapStateToProps = state => ({
  users: getAllUsers(state),
});


export default connect(mapStateToProps)(SearchUser);
