import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flatList: {
    backgroundColor: "#e1e4e8"
  }
});

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'});

  if (loading) {
    return <></>
  }

  if (error) {
    console.log(error, 'error');
  }

  const repositories = data.repositories;
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList style={styles.flatList}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item} />}
    />
  );
};

export default RepositoryList;