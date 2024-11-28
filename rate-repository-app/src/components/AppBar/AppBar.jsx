import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import useMe from '../../hooks/useMe';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundColor,
    flexDirection: 'row',
  },
  item: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight /2,
  }
});

const AppBar = () => {
  const { data, error, loading} = useMe();

  if (loading) {
    return <></>
  }

  if (error) {
    console.log(error, 'error');
  }

  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab title="Repositories" path="/" />
      {!data.me && <AppBarTab title="Login" path="/login" />}
      {data.me && <AppBarTab title="Logout" path="/logout" />}
    </ScrollView>
  </View>;
};

export default AppBar;