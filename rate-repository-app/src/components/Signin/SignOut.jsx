import useSignOut from '../../hooks/useSignOut';

const SignOut = () => {
  useSignOut();
  
  return (<>user signed out</>);
};

export default SignOut;