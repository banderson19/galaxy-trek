const initialState = {
    spaceship: {},
    destination: {}
}

const SET_SPACESHIP = 'SET_SPACESHIP';
const SET_DESTINATION = 'SET_DESTINATION';

function reducer(state = initialState, action) {
    switch(action.type) {
        case (SET_SPACESHIP):
            console.log('action---> ', action)
            return Object.assign( {}, state, {spaceship: action.payload});
        
        case (SET_DESTINATION):
            console.log('action---> ', action)
            return Object.assign( {}, state, {destination: action.payload});

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

export default reducer;