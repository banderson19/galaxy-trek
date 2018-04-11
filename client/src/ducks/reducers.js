const initialState = {
    spaceship: {}
}

const SET_SPACESHIP = 'SET_SPACESHIP';

function reducer(state = initialState, action) {
    switch(action.type) {
        case (SET_SPACESHIP):
            console.log('action---> ', action)
            return Object.assign( {}, state, {spaceship: action.payload});

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

export default reducer;