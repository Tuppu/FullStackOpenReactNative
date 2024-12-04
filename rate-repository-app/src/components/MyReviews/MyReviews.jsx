import { FlatList, View, StyleSheet } from 'react-native';
import useRepository from '../../hooks/useMeWithReviews';
import ReviewItem from '../Repository/SingleRepository/Review/ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flatList: {
    backgroundColor: "#e1e4e8"
  }
});

const MyReviews = () => {

  const { data, error, loading } = useRepository();

  if (loading) {
    return <></>
  }

  if (error) {
    console.log(error, 'error');
  }

  const reviews = data?.me?.reviews;

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList style={styles.flatList}
      data={reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;