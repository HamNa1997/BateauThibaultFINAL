export const addcart = (data) => {
    return {
        type:'ADD_EL',
        data,
    }
}
export const changeok = (data) =>{
    return {
        type:'CHANGE_OK',
        data,
    }
}

export const deletecart = (data ) => {
    return {
        type : 'DELETE_EL',
        data,
    }
}

export const changeqty = (data) =>{
    return{
        type: 'CHANGE_QTY',
        data,
    }
}

export const incqty = (data) =>{
    return{
        type: 'INC_QTY',
        data,
    }
}

export const decqty = (data) =>{
    return{
        type: 'DEC_QTY',
        data,
    }
}

export const changesomm = (data) =>{
    return{
        type:'CHANGE_SOMME',
        data,
    }
}

export const changepoint = (data) =>{
    return{
        type:'CHANGE_POINT',
        data,
    }
}

export const initshop = (data) =>{
    return{
        type:'INIT',
        data,
    }
}