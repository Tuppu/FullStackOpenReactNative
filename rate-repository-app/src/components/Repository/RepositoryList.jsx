import { useState } from 'react';
import { Platform } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import { passiveSupport } from 'passive-events-support/src/utils'
import { useNavigate } from "react-router";
import { RepositoryListContainer } from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  
  const [selectedOrderBy, setSelectedOrderBy] = useState('latesRepos');
  const funcSetSelectedOrderBy = (selectedOrderBy) => { setSelectedOrderBy(selectedOrderBy) };

  const [searchQuery, setSearchQuery] = useState('');
  const funcSetSearchQuery = (searchQuery) => { setSearchQuery(searchQuery) };
  const [searchQueryDebounced] = useDebounce(searchQuery, 500);

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

  const { data, error, loading } = useRepositories(orderBy, orderDirection, searchQueryDebounced);

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
    <RepositoryListContainer repositoryNodes={repositoryNodes} onPressFunction={onPressFunction}
     selectedOrderBy={selectedOrderBy} funcSetSelectedOrderBy={funcSetSelectedOrderBy}
     searchQuery={searchQuery} funcSetSearchQuery={funcSetSearchQuery} />
  );
};

export default RepositoryList;