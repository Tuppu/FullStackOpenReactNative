import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      margin: 8
    },
  });

const RepositoryListHeader = ({selectedOrderBy, funcSetSelectedOrderBy, searchQuery, funcSetSearchQuery}) => {

  return (
    <>
        <Searchbar style={styles.header}
            placeholder="Search"
            onChangeText={funcSetSearchQuery}
            value={searchQuery}
        />
        <Picker style={styles.header}
            selectedValue={selectedOrderBy}
            onValueChange={funcSetSelectedOrderBy}>
            <Picker.Item label="Latest repositories" value="latesRepos" />
            <Picker.Item label="Highest rated repositories" value="highetRatedRepos" />
            <Picker.Item label="Lowest rated repositories" value="lowestRatedRepos" />
        </Picker>
    </>
  );
};

export default RepositoryListHeader;