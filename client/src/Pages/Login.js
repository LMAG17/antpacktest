import React from 'react'
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../redux/actions';

function Login({ state, getUsers, createUser, updateUser, deleteUser, getPosts, createPost, updatePost, deletePost, }) {
    console.log("state", state);
    return (
        <div>

            <button onClick={() => {
                getUsers()
            }}>
                getUsers
            </button>

            <button onClick={() => {
                createUser({
                    "name": "Luis Miguel",
                    "email": "Luis@gmail.com",
                    "city": "Bogota",
                    "company": "VALID",
                    "avatar": "Yop"
                })
            }}>
                createUser
            </button>

            <button onClick={() => {
                updateUser({
                    "id": 1,
                    "name": "Luis Miguel2",
                    "email": "Luis@gmail.com2",
                    "city": "Bogota2",
                    "company": "VALID2",
                    "avatar": "Yop2"
                })
            }}>
                updateUser
            </button>

            <button onClick={() => {
                deleteUser(1)
            }}>
                deleteUser
            </button>

            <button onClick={() => {
                getPosts()
            }}>
                getPost
            </button>

            <button onClick={() => {
                createPost({
                    "userId": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                })
            }}>
                creatPost
            </button>

            <button onClick={() => {
                updatePost({
                    "id":1,
                    "userId": 1,
                    "title": "Prueba update",
                    "body": "Prueba update 2"
                })
            }}>
                updatPost
            </button>

            <button onClick={() => {
                deletePost(1)
            }}>
                deletPost
            </button>
        </div>
    )
}



const mapStateToProps = (state) => ({
    state,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
