import { FlatList, StyleSheet, Pressable } from 'react-native';
import RepositoryListHeader from './RepositoryListHeader';
import React from 'react';
import RepositoryInfo from './SingleRepository/RepositoryInfo';

const styles = StyleSheet.create({
    flatList: {
      backgroundColor: "#e1e4e8"
    },
  });

export class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        const { selectedOrderBy, funcSetSelectedOrderBy, searchQuery, funcSetSearchQuery } = this.props;
  
        return (
            <RepositoryListHeader selectedOrderBy={selectedOrderBy} funcSetSelectedOrderBy={funcSetSelectedOrderBy}
            searchQuery={searchQuery} funcSetSearchQuery={funcSetSearchQuery} />
        );
    };
  
    render() {
        const { repositoryNodes, onPressFunction, onEndReach} = this.props;

        return (
          <FlatList style={styles.flatList}
            data={repositoryNodes}
            renderItem={({item}) => 
              <Pressable onPress={() => onPressFunction(item.id)}>
                <RepositoryInfo item={item} />
              </Pressable>
              }
            ListHeaderComponent={this.renderHeader}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
          />
        );
    }
  }