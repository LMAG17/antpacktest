import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../redux/actions';
import { Link } from "react-router-dom";

function Home({ state }) {
    console.log("state", state);
    return (
        <div>
            <div>
                Administra tus Usuarios
                <button><Link id="brand" to="/users">Usuarios</Link></button>
            </div>
            <div>
                Administra tus Publicaciones
                <button><Link id="brand" to="/posts">Publicaciones</Link></button>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    state,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
