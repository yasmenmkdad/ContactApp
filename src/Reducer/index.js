import { contactsReducer } from "./contacts-reducer"

export default (state,action)=>{
    return {
        users:contactsReducer(state.users,action),
    }
}
