import ReviewItem from '../Repository/SingleRepository/Review/ReviewItem';
import { View, Pressable, StyleSheet, Alert } from 'react-native';
import theme from '../../theme';
import Text from '../misc/Text';
import { useNavigate } from "react-router";
import useDeleteReview from '../../hooks/useDeleteReview';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: 40,
    margin: 12,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    flex: 0.5
  },
  buttonDelete: {
    backgroundColor: '#d73a4a',
    height: 40,
    margin: 12,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    flex: 0.5
  },
  buttonBar: {
    flexDirection: 'row',
    backgroundColor: "white"
  },
});

const MyReview = ({item, refetch}) => {

  const [deleteReview] = useDeleteReview();

  const navigate = useNavigate();

  const onClickView = () => {
    navigate(`/${item.node.repositoryId}`);
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete', onPress: () => {
          deleteReview(item?.node?.id);
          refetch();
        }
      },
    ]);

  return (
    <View>
      <ReviewItem review={item.node} />
      <View style={styles.buttonBar}>
        <Pressable style={styles.button} onPress={onClickView}>
          <Text color="textSecondary">View repositories</Text>
        </Pressable>
        <Pressable style={styles.buttonDelete} onPress={createTwoButtonAlert}>
          <Text color="textSecondary">Delete review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyReview;