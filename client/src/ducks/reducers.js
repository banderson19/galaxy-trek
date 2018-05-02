const initialState = {
    spaceship: {},
    destination: {},
    fuelLevel: 0,
    decreaseFuelLevel: 0,
    currentStep: 0,
    resetStep: 0,
    // steps: [
    //     {

    //     }
    // ],
    jewelsLbs: 5000,
    decreaseJewelsLbs: 0,
    increaseJewelsLbs: 0
}

const SET_SPACESHIP = 'SET_SPACESHIP';
const SET_DESTINATION = 'SET_DESTINATION';
const SET_FUEL_LEVEL = 'SET_FUEL_LEVEL';
const INCREMENT_STEP = 'INCREMENT_STEP';
const RESET_STEP = 'RESET_STEP';
const DECREASE_FUEL_LEVEL = 'DECREASE_FUEL_LEVEL';
const SET_JEWELS_LBS = 'SET_JEWELS_LBS';
const DECREASE_JEWELS_LBS = 'DECREASE_JEWELS_LBS';
const INCREASE_JEWELS_LBS = 'INCREASE_JEWELS_LBS';

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
            return Object.assign( {}, state, {currentStep: ++state.currentStep})

        case RESET_STEP:
            return Object.assign( {}, state, {currentStep: action.payload})

        case DECREASE_FUEL_LEVEL: 
            return Object.assign( {}, state, {decreaseFuelLevel: state.fuelLevel-=action.payload})

        case SET_JEWELS_LBS: 
            return Object.assign( {}, state, {jewels: action.payload})
        
        case DECREASE_JEWELS_LBS: 
            return Object.assign( {}, state, {decreaseJewelsLbs: state.jewelsLbs-=action.payload})
        
        case INCREASE_JEWELS_LBS:
            return Object.assign( {}, state, {increaseJewelsLbs: state.jewelsLbs+=action.payload})

        default: return state;
    }
}

export function setSpaceship (spaceship) {
    console.log('spaceship ---> ', spaceship)
    return {
        type: SET_SPACESHIP,
        payload: spaceship
    }
}
export function setDestination (destination) {
    console.log('destination ---> ', destination)
    return {
        type: SET_DESTINATION,
        payload: destination
    }
}
export function setFuelLevel (fuelLevel) {
    console.log('fuelLevel ---> ', fuelLevel)
    return {
        type: SET_FUEL_LEVEL,
        payload: fuelLevel
    }
}
export function incrementStep () {
    return {
        type: INCREMENT_STEP
    }
}
export function resetStep () {
    return {
        type: RESET_STEP,
        payload: resetStep
    }
}
export function decreaseFuelLevel(num) {
    console.log('deceased fuel level by ---> ', num)
    return {
        type: DECREASE_FUEL_LEVEL,
        payload: num
    }
}
export function setJewelsLbs(jewels) {
    console.log('jewels prop --> ', jewels)
    return {
        type: SET_JEWELS_LBS,
        payload: jewels
    }
}
export function decreaseJewelsLbs(num) {
    console.log('decreased jewels poundage by --> ', num)
    return {
        type: DECREASE_JEWELS_LBS,
        payload: num
    }
}
export function increaseJewelsLbs(num) {
    console.log('increased jewels poundage by --> ', num) 
    return {
        type: INCREASE_JEWELS_LBS,
        payload: num
    }
}


export default reducer;