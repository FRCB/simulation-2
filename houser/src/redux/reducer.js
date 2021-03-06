
const initialState = {
    imgUrl: '',
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    mortgage: '',
    rent: ''
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_IMGURL = 'UPDATE_IMGURL';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const CANCEL = "CANCEL";


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_IMGURL:
            return Object.assign({}, state, { imgUrl: action.payload });
        case UPDATE_NAME:
            return Object.assign({}, state, { propertyName: action.payload });
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.payload });
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, { mortgage: action.payload });
        case UPDATE_RENT:
            return Object.assign({}, state, { rent: action.payload });
        case CANCEL :
            return Object.assign({}, state, action.payload);
        default:
            return state
    }
};

export function updateName(propertyName) {
    return {
        type: UPDATE_NAME,
        payload: propertyName
    }
}

export function updateImgURL(imgUrl) {
    return {
        type: UPDATE_IMGURL,
        payload: imgUrl
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateMortage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function cancel() {
    return {
    type: CANCEL,
    payload: initialState
    }
}