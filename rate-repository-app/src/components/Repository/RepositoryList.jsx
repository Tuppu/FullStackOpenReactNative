import { FlatList, StyleSheet, View, Pressable, Platform } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { passiveSupport } from 'passive-events-support/src/utils'
import { useNavigate } from "react-router";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flatList: {
    backgroundColor: "#e1e4e8"
  }
});

const RepositoryList = () => {
  
  let navigate = useNavigate();
  const onPressFunction = (id) => {
    navigate(`/${id}`);
  }

  const { data, error, loading } = useRepositories();

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

  // Added non-passive event listener to a scroll-blocking 'wheel' event. Consider marking event handler as 'passive' to make the page more responsive
  Platform.OS === 'web' && passiveSupport({
    events: ['wheel']
  });

  



  return (
    <FlatList style={styles.flatList}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
        <Pressable onPress={() => onPressFunction(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
        }
    />
  );
};

export default RepositoryList;