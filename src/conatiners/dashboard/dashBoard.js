/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { data } from './dashboard.utils';
import { fetchUserDetails, updateEmailDetails } from './dashboard.action';
import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.getHeaderCotent = this.getHeaderCotent.bind(this);
        this.addStarToEmail = this.addStarToEmail.bind(this);
    };

    componentDidMount() {
        const { email } = this.props;
        window.scrollTo(0, 0);
        const filterUser = [...data].filter(x => x.Email === email);
        console.log(filterUser, 'filterUserfilterUser')
        this.props.fetchUserDetails(filterUser[0]);
    }

    getHeaderCotent(mail) {
        return (
            <Grid container alignItems="center" style={{ fontSize: '16px' }}>
                <Grid item xs={2}>
                    <Grid container justify={'flex-start'}>
                        {`${mail.firstName} ${mail.lastName}`}
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container justify={'center'}>
                        {mail.subject}
                    </Grid>
                </Grid>
            </Grid>
        )

    }
    addStarToEmail(mail) {
        const { EmailDetails } = this.props;
        EmailDetails.mails.map((x) => {
            if (x.emailid === mail.emailid) {
                x.stareed = !x.stareed;
            }
        });
        this.props.updateEmailDetails(EmailDetails);
    }

    render() {
        const { EmailDetails } = this.props;
        return (
            <Grid container >
                <Grid item xs={12}>
                    {EmailDetails.mails && EmailDetails.mails.length > 0 && EmailDetails.mails.map((mail) => {
                        return (
                            <Accordion style={{ width: '100 %' }} expanded={false}>
                                <AccordionSummary
                                >
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => { event.stopPropagation(); this.addStarToEmail(mail) }}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label={''}
                                    />
                                    {this.getHeaderCotent(mail)}
                                </AccordionSummary>
                            </Accordion>
                        )
                    })}

                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = ({
    DashBoardReducer
}) => ({
    EmailDetails: DashBoardReducer.emailDetails,
    email: DashBoardReducer.email,
});
export default withRouter(connect(mapStateToProps, { fetchUserDetails, updateEmailDetails })(DashBoard));