export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser: null,

}

export function reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }

        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_DRINK": {
            return {
                ...state,
                drink: action.payload
            }
        }

        case "REGISTER_USER": {
            let usersClone = state.users.slice(0);
            usersClone.push(action.payload);
            return {
                ...state,
                users: usersClone
            }
        }
        default:
            return state;

    }
}