import { Pressable, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router';
import theme from '../../theme';
import Text from '../misc/Text';
import * as Linking from 'expo-linking';

const handleOnPress = (url) => {
  console.log(url, 'url');
  Linking.openURL(url);
}

const RepositorySingleItem = () => {
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      height: 40,
      margin: 12,
      borderRadius: 4,
      padding: 10,
      alignItems: 'center'
    },
  });

  const id = useParams().id;
  const { data, error, loading } = useRepository(id);

  if (loading) {
    return <></>
  }

  if (error) {
    console.log(error, 'error');
  }

  const repository = data.repository;

  return (
    <>
      <RepositoryItem item={repository} />
      <Pressable style={styles.button} onPress={() => handleOnPress(repository.url)} >
        <Text color="textSecondary">Open in Github</Text>
      </Pressable>
    </>
  );
};

export default RepositorySingleItem;