import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './Repository/RepositoryList';
import AppBar from './AppBar/AppBar';
import SignIn from './Signin/SignIn';
import SignOut from './Signin/SignOut';
import useSignIn from '../hooks/useSignIn';
import SingleRepository from './Repository/SingleRepository/SingleRepository';
import CreateNewReview from './Repository/CreateReview/CreateNewReview';
import SignUp from './Signin/SignUp';
import MyReviews from './MyReviews/MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8"
  },
});

const Main = () => {

  const [signIn] = useSignIn();

  const onSubmit = (values) => {
    const { username, password } = values;
    try {
      signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/login" element={<SignIn onSubmit={onSubmit}></SignIn>} />
        <Route path="/logout" element={<SignOut />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createReview" element={<CreateNewReview />} />
        <Route path="/myReviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;