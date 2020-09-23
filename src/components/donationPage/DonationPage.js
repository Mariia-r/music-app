import React from "react";
import {compose} from "redux";
import './DonationPage.scss';

const DonationPage = (props) => {
    return (
        <div className="donation-page">
            Donation Page
        </div>
    );
}

export default compose(React.memo)(DonationPage);

