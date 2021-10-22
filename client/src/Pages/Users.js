import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../redux/actions';
import { Link } from 'react-router-dom';

function Users({ state, getUsers, deleteUser, goToEditUser }) {

    const { loading, users } = state;

    useEffect(() => {
        getUsers();
    }, [])

    return (
        loading ? <div>
            Cargando...
        </div> : <div>
            <table>
                <thead>
                    <th>id</th>
                    <th>avatar</th>
                    <th>name</th>
                    <th>email</th>
                    <th>city</th>
                    <th>company</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                    <th><button onClick={() => {
                        goToEditUser()
                    }}><Link to="/createUser">Crear</Link></button></th>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td><img src={user.avatar} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                                <td>{user.company}</td>
                                <td><button onClick={() => {
                                    goToEditUser(user)
                                }}><Link to="/createUser">Editar</Link></button></td>
                                <td><button onClick={() => {
                                    deleteUser(user.id)
                                }}>Borrar</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



const mapStateToProps = (state) => ({
    state,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
