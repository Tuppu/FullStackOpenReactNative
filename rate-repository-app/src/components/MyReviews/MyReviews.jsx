import { FlatList, View, StyleSheet } from 'react-native';
import useRepository from '../../hooks/useMeWithReviews';
import MyReview from './MyReview';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flatList: {
    backgroundColor: "#e1e4e8"
  }
});

const MyReviews = () => {

  const { data, error, loading, refetch } = useRepository();

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
      renderItem={({ item }) => <MyReview item={item} refetch={refetch} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;