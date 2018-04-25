const initialState = {
    spaceship: {},
    destination: {},
    fuelLevel: 0,
    currentStep: 0,
    steps: [
        {

        }
    ]
}

const SET_SPACESHIP = 'SET_SPACESHIP';
const SET_DESTINATION = 'SET_DESTINATION';
const SET_FUEL_LEVEL = 'SET_FUEL_LEVEL';
const INCREMENT_STEP = 'INCREMENT_STEP';

function reducer(state = initialState, action) {
    switch(action.type) {
        case (SET_SPACESHIP):
            console.log('action---> ', action)
            return Object.assign( {}, state, {spaceship: action.payload});
        
        case (SET_DESTINATION):
            console.log('action---> ', action)
            return Object.assign( {}, state, {destination: action.payload});
        
        case SET_FUEL_LEVEL:
            console.log('action---> ', action)
            return Object.assign( {}, state, {fuelLevel: action.payload});
        case INCREMENT_STEP:
            return Object.assign({}, state, {currentStep: ++state.currentStep})
        

        default: return state;
    }
}

export function setSpaceship (spaceship) {
    console.log('prop ---> ', spaceship)
    return {
        type: SET_SPACESHIP,
        payload: spaceship
    }
}

export function setDestination (destination) {
    console.log('prop ---> ', destination)
    return {
        type: SET_DESTINATION,
        payload: destination
    }
}

export function setFuelLevel (fuelLevel) {
    console.log('prop---> ', fuelLevel)
    return {
        type: SET_FUEL_LEVEL,
        payload: fuelLevel
    }
}

export function incrementStep () {
    return {
        type: INCREMENT_STEP,
    }
}


export default reducer;