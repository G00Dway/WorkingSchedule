import {getHomeArray,deleteWork,updateWork,addWork,getDaysOfWeek} from "./reducer";

export function getFetchHomeArray(){
    return function (dispatch){
        fetch('http://localhost:5000/work')
            .then(res=>res.json())
            .then(data=>dispatch(getHomeArray(data)))
    }
}


export function getFetchDaysOfWeek(){
    return function (dispatch){
        fetch('http://localhost:5000/days-of-week')
            .then(res=>res.json())
            .then(data=>dispatch(getDaysOfWeek(data)))
    }
}

export function fetchDelete(object){
    return function (dispatch){
        fetch(`http://localhost:5000/delete-admin/${object.id}`,{method:'DELETE'})
            .then(res=>res.text())
            .then(data=>dispatch(deleteWork(data)))
    }
}

export function fetchUpdate(updateObj, updateData) {
    const obj = { ...updateObj, ...updateData };
    return function(dispatch) {
        fetch(`http://localhost:5000/change-work/${updateObj.id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(res => res.text())
            .then(data => dispatch(updateWork(data)))
            .catch(error => console.error('Error updating data:', error));
    };
}

export function fetchAdd(obj){
    return function (dispatch){
        fetch(`http://localhost:5000/add-work`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
            .then(res=>res.text())
            .then(data=>dispatch(addWork(data)))

    }
}