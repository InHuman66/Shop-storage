import { Dispatch } from "redux"


export  type ItemType ={
    name: string
    value: number
    priority: number
    price: number
    status: string
    id: number
}


const initialState = {
    storageItems:[
        {name:"Bread", value: 25, priority: 1, price: 12.50, status: 'there is', id: 1 },
        {name:"Сheese", value: 25, priority: 3, price: 50, status: 'none', id: 2  },
        {name:"Onion", value: 25, priority: 5, price: 30, status: 'none', id: 3  },
        {name:"Chicken", value: 25, priority: 2, price: 23, status: 'there is', id: 4  },
    ],
    buyItems:[
    ]as Array<ItemType>
}
type ActionsType = ReturnType<typeof deleteItemAC>
                    | ReturnType<typeof addInBuyListItemAC>
                    | ReturnType<typeof deleteFromBuyListItemAC>
type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DELETE-ITEM':
            return {...state, storageItems: state.storageItems.filter(item => item.id !== action.id)}
        case 'ADD-IN-BUY-LIST-ITEM':
            const stateCopy = {...state}
            const findItem = stateCopy.storageItems.find( item=>item.id === action.id)
            const catchItem = stateCopy.buyItems.find( item=>item.id === action.id)
            if(findItem !== undefined){
                if (catchItem === undefined){
                    stateCopy.buyItems.push(findItem)
                }
            }
            return stateCopy
        case 'DELETE-FROM-BUY-LIST-ITEM':
            return {...state, buyItems: state.buyItems.filter(item => item.id !== action.id)}
        default:
            return state
    }
}
export type ItemsList = typeof initialState.storageItems
export const deleteItemAC = (id:number) => ({ type: 'DELETE-ITEM', id } as const)
export const addInBuyListItemAC = (id:number) => ({ type: 'ADD-IN-BUY-LIST-ITEM', id } as const)
export const deleteFromBuyListItemAC = (id:number) => ({ type: 'DELETE-FROM-BUY-LIST-ITEM', id } as const)

export const deleteTC = (id: number) => (dispatch: Dispatch) => {
        dispatch(deleteItemAC(id))
}

export const addInBuyListTC = (id:number) => (dispatch: Dispatch) => {
    dispatch(addInBuyListItemAC(id))
}

export const deleteFromBuyListTC = (id:number) => (dispatch: Dispatch) => {
    dispatch(deleteFromBuyListItemAC(id))
    console.log(id)
}
