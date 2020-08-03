/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchstarredMail,clearStarred } from '../dashboard/dashboard.action';
import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class StarredMail extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const { EmailDetails } = this.props;
        window.scrollTo(0, 0);
        var starred = [];
        console.log(EmailDetails);
        EmailDetails && EmailDetails.mails && EmailDetails.mails.map(x => {
            if (x.stareed) {
                starred.push(x);
            }
        })
        console.log(starred, 'star')
        this.props.fetchstarredMail(starred);
    }
    componentWillUnmount(){
        this.props.clearStarred();
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


    render() {
        const { starredEmail } = this.props;
        return (
            <Grid container >
                <Grid item xs={12}>
                    {starredEmail.length > 0 && starredEmail.map((mail) => {
                        return (
                            <Accordion style={{ width: '100 %' }} expanded={false}>
                                <AccordionSummary
                                >
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => { event.stopPropagation() }}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox checked={mail.stareed}/>}
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
    starredEmail: DashBoardReducer.starredEmail,
    EmailDetails: DashBoardReducer.emailDetails,
    email: DashBoardReducer.email,
});
export default withRouter(connect(mapStateToProps, { fetchstarredMail,clearStarred })(StarredMail));