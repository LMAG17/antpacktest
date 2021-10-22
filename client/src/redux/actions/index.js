
export const API_BASE = "http://localhost:3001";
export const API_USERS = "/users";
export const API_POSTS = "/posts";
export const API_READ = "/";
export const API_CREATE = "/create";
export const API_UPDATE = "/update";
export const API_DELETE = "/delete";


function loading() {
    return {
        type: 'LOADING',
    }
}


function success() {
    return {
        type: 'SUCCESS',
    }
}

function failure() {
    return {
        type: 'FAILURE',
    }
}

function receiveUsers(users) {
    return {
        type: 'RECEIVE_USERS',
        users
    }
}

function receivePosts(posts) {
    return {
        type: 'RECEIVE_USERS',
        posts
    }
}

//-------------------------------USERS-------------------------------------------------

export function getUsers() {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_USERS + API_READ
        fetch(api)
            .then(async res => {
                const inJsonResponse = await res.json()
                dispatch(receiveUsers(inJsonResponse.apiUsers))
            })
            .catch(e => console.log(e));
    }
}

export function createUser(data) {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_USERS + API_CREATE
        try {
            fetch(api, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch(success())
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function updateUser(data) {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_USERS + API_UPDATE
        try {
            fetch(api, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch(success())
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteUser(id) {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_USERS + API_DELETE
        try {
            fetch(api, {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch(success())
        } catch (error) {
            dispatch(failure())
        }
    }
}

//-------------------------------POSTS-------------------------------------------------

export function getPosts() {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_POSTS + API_READ
        fetch(api)
            .then(async res => {
                const inJsonResponse = await res.json()
                dispatch(receivePosts(inJsonResponse.apiPosts))
            })
            .catch(e => console.log(e));
    }
}

export function createPost(data) {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_POSTS + API_CREATE
        try {
            fetch(api, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch(success())
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function updatePost(data) {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_POSTS + API_UPDATE
        try {
            fetch(api, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch(success())
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deletePost(id) {
    return function (dispatch) {
        dispatch(loading())
        const api = API_BASE + API_POSTS + API_DELETE
        try {
            fetch(api, {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            dispatch(success())
        } catch (error) {
            dispatch(failure())
        }
    }
}
