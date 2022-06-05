export const contactsReducer = (state={},action)=>{
    switch (action.type){
        case 'GET_ALL':{
            return {...state,list:action.payload}
        }
        case 'GET_DETAILS':{
            console.log("inGetDetails");
            return {...state,details:action.payload}
        }
        case 'DELETED':{
            console.log("Deleted successfully");
        }
        case 'Updated':{
            console.log("Updated successfully");
            return {...state,list:action.payload}
        }
        case 'ADDED':{
            console.log("Added successfully");
        }
        // case 'CLEAR':{
        //     return {
        //         ...state,
        //         details:null,      
        //     }
        // }
        default:{
            return state;
        }
    }
}

