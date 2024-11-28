import useSignOut from '../../hooks/useSignOut';

const SignOut = () => {
  useSignOut();
  
  return (<div>user signed out</div>);
};

export default SignOut;