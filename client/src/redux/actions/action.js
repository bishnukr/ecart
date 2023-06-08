export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

//remove items
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

//remove Individual Item
export const REMOVE = (id) => {
    return {
        type: "RMV_ONE",
        payload: id
    }
}