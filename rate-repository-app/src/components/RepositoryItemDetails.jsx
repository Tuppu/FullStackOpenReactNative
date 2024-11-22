import { View, StyleSheet } from 'react-native';
import RepositoryItemDetailsItem from './RepositoryItemDetailsItem';

const styles = StyleSheet.create({
    detailsColumn: {
      justifyContent: 'center',
      flexDirection: 'row'
    }
  });

const RepositoryItemDetails = ({item}) => {

  return(
    <View style={styles.detailsColumn}>
       <RepositoryItemDetailsItem title='Stars' count={item.stargazersCount} />
       <RepositoryItemDetailsItem title='Forks' count={item.forksCount} />
       <RepositoryItemDetailsItem title='Reviews' count={item.reviewCount} />
       <RepositoryItemDetailsItem title='Rating' count={item.ratingAverage} />
  </View>)
}

export default RepositoryItemDetails;