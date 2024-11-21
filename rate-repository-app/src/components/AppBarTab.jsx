import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  item: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight /2,
  }
});

const AppBarTab = ({title}) => {

  const onPressFunction = () => {
    console.log('onPress() not yet implemented!');
  }

  return (
    <View>
      <Pressable onPress={onPressFunction}>
        <Text style={styles.item} color="textSecondary">{title}</Text>
      </Pressable>
    </View>);
};

export default AppBarTab;