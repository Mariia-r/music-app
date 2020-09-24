const SET_DONATION_VALUE = "SET_DONATION_VALUE";

let initialState = {
    donation: 25,
}

const donationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DONATION_VALUE: {
            return {
                ...state,
                donation: state.donation + action.donation
            }
        }
        default:
            return state;
    }
};

export const acSetSDonation = (donation) => {
    return { type: SET_DONATION_VALUE, donation }
};

export default donationReducer;