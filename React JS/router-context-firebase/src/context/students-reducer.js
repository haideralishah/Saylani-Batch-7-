export let data = {
    allStudents: ['Apple']
}


export function studentReducer(state, action) {
    switch (action.type) {
        // case "AUTH_USER": {
        //     return {
        //         ...state,
        //         authUser: action.payload
        //     }
        // }
        default:
            return state;
    }

}