/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class DashBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    };

componentDidMount() {
    window.scrollTo(0, 0);
}



render() {
    // const { classes } = this.props;
    return (
        <div>
            DashBoard coming soon
     
      </div>
    );
}
}

const mapStateToProps = ({
    
}) => ({
 
});
export default withRouter(connect(mapStateToProps, {
 
})(DashBoard));