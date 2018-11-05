import {connect} from 'react-redux';
import StatelessLogin from '../components/Login';
import {login} from '../actions';
import {setAuth} from '../global';
import io from '../socket';

function mapStateToProps(state, ownProps){
    return {
        email: state.email
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onLoginClick: (email) => {
            if(email.trim()===''){
                return;
            }
            dispatch(login(email));
            setAuth(true);
            io.emit('login', {userid:1, username:email});
            ownProps.history.push("/home");
        }
    }
}


const Login = connect(mapStateToProps, mapDispatchToProps)(StatelessLogin);

export default Login;
