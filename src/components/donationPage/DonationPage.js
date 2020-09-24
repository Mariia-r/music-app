import React, {useState} from "react";
import {compose} from "redux";
import './DonationPage.scss';
import {connect} from "react-redux";
import {acSetSDonation} from "../../store/donation-reducer";

const DonationPage = ({donation, acSetSDonation}) => {
    const [donationUser, setDonationUser] = useState("");
    let remainNeededDonat = 1000 - donation;

    const setFormatUserDonation = (value) => {
        const formattedUserDonation = value.replace(/\D/,'')
        setDonationUser(formattedUserDonation);
    }

    const sendDonation = () => {
        acSetSDonation(Number(donationUser));
    }

    return (
        <div className="donation-page container">
            <div className="donation-range-wrapper">
                {remainNeededDonat > 0 &&
                <div className="donation-remain">
                    <span>&#36;{remainNeededDonat}</span> still needed for this project.
                </div>}
                <input type="range" id="donation" className="donation-range-input" min="0" max="1000" step="1" disabled value={donation}/>
            </div>
            <div className="donation-content">
                <span>
                    <span style={{color: "#FF4500", fontWeight: "bold"}}>Only 3 days left</span> to fund this project
                </span>
                <p>
                    Join the 42 other donors who have already supported this project. Every dollar helps.
                </p>
                <div className="donation-form">
                    <span className="prefix-input">&#36;</span>
                    <input type="text" value={donationUser} onChange={e => {setFormatUserDonation(e.target.value)}}/>
                    <button className="btn donation-btn" onClick={() => {sendDonation()}}>Give Now</button>
                </div>
                <span style={{color: "blue"}}>{donationUser && donationUser !== "0" && `Why give $${donationUser}?`}</span>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        donation: state.donationPage.donation
    }
}

export default compose(
    connect(mapStateToProps, {acSetSDonation}),
    React.memo
)(DonationPage);

