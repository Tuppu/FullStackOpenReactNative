import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './Repository/RepositoryList';
import AppBar from './AppBar/AppBar';
import SignIn from './Signin/SignIn';
import SignOut from './Signin/SignOut';
import useSignIn from '../hooks/useSignIn';
import SingleRepository from './Repository/SingleRepository/SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;