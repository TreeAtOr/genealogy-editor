import { Reducer } from "redux";
import Id from "../../types/Id";
import IApplicationAction from "../actions/applicationActions";


interface IApplicationState {
    editedId: Id;
    isEditing: boolean;
    filtration:{
        merrage:boolean
    }
}
const appDefaultState: IApplicationState = {editedId:new Id(0),isEditing:false,filtration:{merrage:false}}
export const applicationReducer: Reducer<IApplicationState | undefined,IApplicationAction> = (state = appDefaultState, action) => {
    switch (action.type) {
        case "SelectCharacter": 
            if(state.isEditing) return state
            return {...state,editedId:action.payload?action.payload:new Id(0)}
        case "SwitchEditCharacter": return {...state,isEditing:action.payload?action.payload:!state.isEditing}
        case "SwichShowMerrages"  : return {...state,filtration:{...state.filtration,merrage:action.payload?action.payload:!state.filtration.merrage}}
        default                   : return state;
    }
}