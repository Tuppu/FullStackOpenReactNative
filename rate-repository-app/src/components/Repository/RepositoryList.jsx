import { useState } from 'react';
import { FlatList, StyleSheet, Pressable, Platform } from 'react-native';
import RepositoryInfo from './SingleRepository/RepositoryInfo';
import useRepositories from '../../hooks/useRepositories';
import { passiveSupport } from 'passive-events-support/src/utils'
import { useNavigate } from "react-router";
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "#e1e4e8"
  },
});

const RepositoryList = () => {
  
  const [selectedOrderBy, setSelectedOrderBy] = useState('latesRepos');

  let navigate = useNavigate();
  const onPressFunction = (id) => {
    navigate(`/${id}`);
  }

  let orderBy = 'CREATED_AT', orderDirection = 'ASC'

  switch (selectedOrderBy) {
    case 'highetRatedRepos':
      orderDirection = 'DESC'
      orderBy = 'RATING_AVERAGE'
      break;
    case 'lowestRatedRepos':
      orderDirection = 'ASC'
      orderBy = 'RATING_AVERAGE'
      break;
    case 'latesRepos':
    default:
      orderDirection = 'DESC'
      orderBy = 'CREATED_AT'
      break;
  } 

  const { data, error, loading } = useRepositories(orderBy, orderDirection);

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

  // Added non-passive event listener to a scroll-blocking 'wheel' event. Consider marking event handler as 'passive' to make the page more responsive
  Platform.OS === 'web' && passiveSupport({
    events: ['wheel']
  });
  
  return (
    <FlatList style={styles.flatList}
      data={repositoryNodes}
      renderItem={({item}) => 
        <Pressable onPress={() => onPressFunction(item.id)}>
          <RepositoryInfo item={item} />
        </Pressable>
        }
      ListHeaderComponent={() => 
        <Picker
          selectedValue={selectedOrderBy}
          onValueChange={(itemValue) =>
            setSelectedOrderBy(itemValue)
          }>
          <Picker.Item label="Latest repositories" value="latesRepos" />
          <Picker.Item label="Highest rated repositories" value="highetRatedRepos" />
          <Picker.Item label="Lowest rated repositories" value="lowestRatedRepos" />
        </Picker>
        }
    />
  );
};

export default RepositoryList;