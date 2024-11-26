import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import Text from '../misc/Text';

const styles = StyleSheet.create({
  item: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight /2,
  }
});

const AppBarTab = ({title, path}) => {


  return (
    <View>
      <Pressable>
        <Link to={path} >
          <Text style={styles.item} color="textSecondary">{title}</Text>
        </Link>
      </Pressable>
    </View>);
};

export default AppBarTab;