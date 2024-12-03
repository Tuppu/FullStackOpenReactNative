import { View, StyleSheet, Pressable} from 'react-native';
import theme from '../../../theme';
import RepositoryItemDetails from '../RepositoryItemDetails/RepositoryItemDetails';
import RepositoryItemUser from '../RepositoryItemUser/RepositoryItemUser';
import * as Linking from 'expo-linking';
import Text from '../../misc/Text';

const styles = StyleSheet.create({
    repositoryItem: {
      backgroundColor: theme.colors.repositoryItemBackgroundColor,
      marginBottom: 10
    },
    button: {
      backgroundColor: theme.colors.primary,
      height: 40,
      margin: 12,
      borderRadius: 4,
      padding: 10,
      alignItems: 'center'
    }
  });

const RepositoryInfo = ({item, showGitHubLink=false}) => {

  const handleOnPress = (url) => {
    Linking.openURL(url);
  }

  return (
    <View style={styles.repositoryItem}>
      <View>
        <RepositoryItemUser item={item} />
        <RepositoryItemDetails item={item} />
      </View>
      {showGitHubLink && (
        <Pressable style={styles.button} onPress={() => handleOnPress(item.url)} >
          <Text color="textSecondary">Open in Github</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryInfo;