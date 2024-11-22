import { View, StyleSheet} from 'react-native';
import { DisplayImage } from './ImageDisplay';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    repositoryItemUser: {
        flexDirection: 'row',
    },
    repositoryItemUserInfo: {
        flexDirection: 'column',
        flex: 1
    },
    fullName: {
      paddingTop: 15,
      fontWeight: "bold",
      margin: 4
    },
    description: {
        margin: 4,
    },
    languageTag: {
        backgroundColor: theme.colors.primary,
        padding: 4,
        alignSelf: 'baseline',
        borderRadius: 4,
        margin: 4
    }
  });

const RepositoryItemUser = ({item}) => {
    return (
      <View style={styles.repositoryItemUser}>
        <DisplayImage imgUri={item.ownerAvatarUrl} />
        <View style={styles.repositoryItemUserInfo}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.languageTag} color="textSecondary">{item.language}</Text>
        </View>
      </View>
    );
  };
  
  export default RepositoryItemUser;