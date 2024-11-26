import { View, StyleSheet} from 'react-native';
import theme from '../../theme';
import RepositoryItemDetails from './RepositoryItemDetails/RepositoryItemDetails';
import RepositoryItemUser from './RepositoryItemUser/RepositoryItemUser';

const styles = StyleSheet.create({
    repositoryItem: {
      backgroundColor: theme.colors.repositoryItemBackgroundColor
    },
  });

const RepositoryItem = ({item}) => {
    return (
      <View style={styles.repositoryItem}>
        <RepositoryItemUser item={item} />
        <RepositoryItemDetails item={item} />
      </View>
    );
  };
  
  export default RepositoryItem;