import { View, StyleSheet } from 'react-native';
import theme from '../../../../theme';
import ReviewRating from './ReviewRating';
import ReviewComment from './ReviewComment';

const styles = StyleSheet.create({
    repositoryReviewScore: {
        flexDirection: 'row',
        backgroundColor: theme.colors.repositoryItemBackgroundColor,
      },
      repositoryReviewComment: {
        flexDirection: 'column',
        flex: 1,
        margin: 5
    },
    repositoryReviewRating: {
        margin: 14,
        height: 50,
        width:50,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center'
    },
    repositoryReviewRatingText: {
        padding: 3
    },
    repositoryReviewUsername: {
        paddingTop: 15
    },
    repositoryReviewText: {
        marginTop: 4
    }
  });


const ReviewItem = ({ review }) => {

    return (
    <View key={review.id} style={styles.repositoryReviewScore}>
        <ReviewRating scores={review.rating} />
        <ReviewComment review={review} />
    </View>);
  };

export default ReviewItem;