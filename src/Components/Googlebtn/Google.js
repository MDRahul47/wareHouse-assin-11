
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Google.css';

const Google = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }

    if (user || user1) {
        navigate('/booking')
    }

    
    return (
        <div>

             <button  onClick={() => signInWithGoogle()}  className='btn'>Google</button> <br /> 
            {errorElement}
             <button  onClick={() => signInWithGithub()}  className='btn-y'>Github</button>
        </div>
    );
};

export default Google;