import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import useRepository from '../../../hooks/useRepository';
import { useParams } from 'react-router';
import ReviewItem from './Review/ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flatList: {
    backgroundColor: "#e1e4e8"
  }
});

const SingleRepository = () => {

  const id = useParams().id;
  const { repository, error, loading, fetchMore } = useRepository(id, {first: 2});
  
  const onEndReach = () => {
    fetchMore();
  };

  if (loading) {
    return <></>
  }

  if (error) {
    console.log(error, 'error');
  }


  const reviews = repository.reviews;

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList style={styles.flatList}
      data={reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => 
        <RepositoryInfo item={repository} showGitHubLink />
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;