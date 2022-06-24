
// Add item
export const Add = (item) => {
    return {
        type: "ADD_CART",
        paload: item
    }
}


// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}
