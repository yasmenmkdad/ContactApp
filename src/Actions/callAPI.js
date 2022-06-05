export const URL = 'http://www.apicontacts.somee.com/api/contacts';

export const getContactsList = async () =>{
    let response = await fetch(URL);
    let payload = await response.json()
    return {
        type:'GET_ALL',
        payload
    }
}

export const getContactDetails = async (id) =>{
    console.log("inDetails1")
    let response = await fetch(`${URL}/${id}`);
    let payload = await response.json()
    console.log("payload",payload)
    return {
        type:'GET_DETAILS',
        payload
    }
}
export const DeleteContact = async (id) =>{
    let response = await fetch(`${URL}/${id}`,{method:'DELETE'});
    return {
        type:'GET_DETAILS'
    }
}

export const UpdateContact = async (id,updatedContact) =>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedContact)
    };
    let response = await fetch(`${URL}/${id}`,requestOptions)
    let payload = await response.json()
    return {
        type:'Updated',
        payload
    }
}

export const AddContact = async (newContact) =>{
    console.log("InAddContact")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContact)
    };
    let response = await fetch(`${URL}`,requestOptions)
    return {
        type:'ADDED',
    }
}