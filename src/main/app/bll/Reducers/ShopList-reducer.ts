import { Dispatch } from "redux"


export  type ItemType ={
    name: string
    value: number
    priority: string
    price: number
    status: string
    id: number
    itemInBuyList: boolean
}
export type elemInBuyList ={
    id: number
    value: number
}


export type filterValueType = 'All' | 'None' | 'There is'
export type sortValueType =  'Normal' | 'Smallest' | 'Biggest'

const initialState = {
    StatusFilter: '',
    storageItems:[
        {name:"Bread", value: 25, priority: '1', price: 12.50, status: 'there is', id: 1, itemInBuyList: false},
        {name:"Сheese", value: 25, priority: '5', price: 50, status: 'none', id: 2, itemInBuyList: false},
        {name:"Onion", value: 25, priority: '2', price: 30, status: 'none', id: 3, itemInBuyList: false},
        {name:"Chicken", value: 25, priority: '3', price: 23, status: 'there is', id: 4, itemInBuyList: false},
    ],
    buyItems:[]as Array<ItemType>,
    sortFilterItems:[] as Array<ItemType>,
}



type ActionsType = ReturnType<typeof deleteItemAC>
                    | ReturnType<typeof addInBuyListItemAC>
                    | ReturnType<typeof deleteFromBuyListItemAC>
                    | ReturnType<typeof editPriorityItemAC>
                    | ReturnType<typeof  sortFilterItemAC>
type InitialStateType = typeof initialState


export const shopListReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DELETE-ITEM':
            return {...state, storageItems: state.storageItems.filter(item => item.id !== action.id), buyItems:  state.buyItems.filter(item => item.id !== action.id), sortFilterItems:  state.sortFilterItems.filter(item => item.id !== action.id)}
        case 'ADD-IN-BUY-LIST-ITEM':
            const copyBuyItems = [...state.buyItems]
            const copyStorage = [...state.storageItems]
            const findItem = copyStorage.find( item=>item.id === action.id)
            if(findItem !== undefined){
                findItem.itemInBuyList = true
                copyBuyItems.push(findItem)
            }
            return {...state,  storageItems: copyStorage, buyItems: copyBuyItems };
        case 'DELETE-FROM-BUY-LIST-ITEM':
            let copyStorageItems = [...state.storageItems]
            let findItems = copyStorageItems.find( item=>item.id === action.id)
            if (findItems){
                findItems.itemInBuyList = false
            }
            return {...state, buyItems:[...state.buyItems.filter(item => item.id !== action.id)], storageItems:  copyStorageItems}
        case 'EDIT-PRIORITY-ITEM':
            let copyBuyList = [...state.buyItems]
            let copyStorageItem = [...state.storageItems]
            let copySortItems =[...state.sortFilterItems]
            let findProduct = copyStorageItem.find( item=>item.id === action.id)
            let findProductInBuyList = copyBuyList.find( item=>item.id === action.id)
            let findSortItem = copySortItems.find( item=>item.id === action.id)
            if (findProduct){
                findProduct .priority = action.value
            }
            if (findProductInBuyList ){
                findProductInBuyList.priority = action.value
            }
            if (findSortItem ){
                findSortItem.priority = action.value
            }
            return {...state, storageItems: copyStorageItem, buyItems: copyBuyList, sortFilterItems: copySortItems }
        case 'SORT-FILTER-ITEMS':
            let filterItems = [] as Array<ItemType>;
            let sort = ()=>{
                if(action.sort === 'Normal'){
                    filterItems = filterItems
                }else if(action.sort === 'Smallest'){
                    filterItems = [...filterItems].sort((a, b)=> Number(a.priority) - Number(b.priority))
                }
                else if(action.sort === 'Biggest'){
                    filterItems = [...filterItems].sort((a, b)=> Number(b.priority)- Number(a.priority))
                }
            }

            if(action.filter === 'All'){
                filterItems = [...state.storageItems]
                sort()
            }else if(action.filter === 'None'){
                filterItems = [...state.storageItems].filter(item=> item.status === 'none')
                sort()
            }
            else if(action.filter === 'There is'){
                filterItems = [...state.storageItems].filter(item=> item.status === 'there is')
                sort()
            }
            return {...state, sortFilterItems: filterItems}
        default:
            return state
    }
}
export type ItemsList = typeof initialState.storageItems
export const deleteItemAC = (id:number) => ({ type: 'DELETE-ITEM', id } as const)
export const addInBuyListItemAC = (id:number) => ({ type: 'ADD-IN-BUY-LIST-ITEM', id } as const)
export const deleteFromBuyListItemAC = (id:number) => ({ type: 'DELETE-FROM-BUY-LIST-ITEM', id } as const)
export const editPriorityItemAC = (value:string, id:number) => ({ type: 'EDIT-PRIORITY-ITEM', value , id} as const)
export const sortFilterItemAC = (filter: filterValueType, sort: sortValueType) => ({ type: 'SORT-FILTER-ITEMS', filter, sort} as const)


export const deleteTC = (id: number) => (dispatch: Dispatch) => {
        dispatch(deleteItemAC(id))
}

export const addInBuyListTC = (id:number) => (dispatch: Dispatch) => {
    dispatch(addInBuyListItemAC(id))
}

export const deleteFromBuyListTC = (id:number) => (dispatch: Dispatch) => {
    dispatch(deleteFromBuyListItemAC(id))
}
export const editPriorityTC = (value:string, id:number) => (dispatch: Dispatch) => {
    dispatch(editPriorityItemAC(value, id))
}
export const sortFilterItemTC = (filter: filterValueType, sort:sortValueType) => (dispatch: Dispatch) => {
    dispatch(sortFilterItemAC(filter, sort))
}

