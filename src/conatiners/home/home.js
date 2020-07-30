import {
  Router,
  Switch,
  withRouter,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as React from 'react';
import  DashBoard  from '../dashboard/dashBoard';
// import routepaths from '../../routes/routes';
//   import navlinks from '../../routes/NavLinks';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // listner gor max idle time

  }






  render() {
    return (
      <div >

        {/* <SideBar
            open={this.state.open}
            applicationName={'Kredifi Admin'}
            handleDrawer={this.handleDrawer}
            sidebarContent={navlinks}
            handleSidebarClick={this.handleSidebarClick}
          /> */}
          <Switch>
          <Route exact path="/" component={DashBoard} key="AppHome" />
          </Switch>
        {/* <Router routes={routes} location={this.props.location} fallbackPath="/404"/> */}

      </div>
    );
  }

}
const mapStateToProps = ({

}) => ({

});
export default withRouter(connect(mapStateToProps, {

})(HomePage));
