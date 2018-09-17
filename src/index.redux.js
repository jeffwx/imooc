const ADD_GUN = addGun;
const REMOVE_GUN = removeGun;

//1. 新建stroe
//通过reducer建立
//根据老的state和action，生成新的state
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return 10;//default
    }
}

export function addGun() {
    return {type: ADD_GUN};
}

export function removeGun() {
    return {type: REMOVE_GUN};
}

export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun());
        }, 2000);
    }
}