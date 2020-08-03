import {
  Switch,
  withRouter,
  Route,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles ,withWidth} from '@material-ui/core';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as React from 'react';
import DashBoard from '../dashboard/dashBoard';
import StarredMail from '../starred/starred';
import PrimarySearchAppBar from '../../components/appHeader/appHeader';
import Sidebar from '../../components/sidebar/sidebar';
import links from '../../routes/NavLinks';
import styles from './home.style';
// import routepaths from '../../routes/routes';
//   import navlinks from '../../routes/NavLinks';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
open:true
    };
  }

  componentDidMount() {
    // listner gor max idle time

  }



  handleSidebarClick() {

  }


  render() {
    const { classes } = this.props;
    const mainClassCss = classNames(
      classes.content,
      this.state.open ? classes.contentOpen : classes.contentClose,
    );
    return (
      <div style={{
        display: 'flex',
        flexGrow: 1,
        // height: '97vh',
        width:'100%',
        position: 'relative',
        zIndex: 1
      }}>
        <PrimarySearchAppBar />
        <Sidebar open={this.state.open}
          applicationName={'Kredifi Admin'}
          handleDrawer={this.handleDrawer}
          sidebarContent={links}
          handleSidebarClick={this.handleSidebarClick} />
        <main className={mainClassCss}>
          <div className={classes.toolbar} />
          <div style={{ marginTop: '60px' }}>
            <Switch>
              <Route exact path="/" component={DashBoard} key="AppHome" />
              <Route exact path="/starred" component={StarredMail} key="AppHome" />
            </Switch>
          </div>
        </main>
      </div >
    );
  }

}
const mapStateToProps = ({

}) => ({

});
export default withRouter(connect(mapStateToProps, {

})(withWidth()(withStyles(styles)(HomePage))));
