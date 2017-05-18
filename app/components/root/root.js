import './root.scss';

import React from 'react';
import {connect} from 'react-redux';

// import Movies from '../movies/movies';


class Root extends React.Component {

  constructor() {
    super();

        this.state = {

        }
    }


    render() {
        return (
            <div></div>
    );
  }
}

function mapStateToProps({movies, watchListData}) {
  return {
    keyName: value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    functionName(data) {
      dispatch({
        type: 'TEXT',

      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);

