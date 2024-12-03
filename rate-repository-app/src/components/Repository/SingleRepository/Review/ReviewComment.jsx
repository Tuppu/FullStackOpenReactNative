import { View, StyleSheet } from 'react-native';
import Text from '../../../misc/Text';
import { format } from 'date-fns'

const styles = StyleSheet.create({

    repositoryReviewComment: {
        flexDirection: 'column',
        flex: 1,
        margin: 5
    },
    repositoryReviewUsername: {
        paddingTop: 15
    },
    repositoryReviewText: {
        marginTop: 4
    }
  });

const ReviewComment = ({ review }) => {
    const createdAtDate = format(new Date(review.createdAt), "dd.MM.yyyy");

    return (
        <View style={styles.repositoryReviewComment}>
            <Text style={styles.repositoryReviewUsername} fontWeight="bold">{review.user.username}</Text>
            <Text color="text3rd">{createdAtDate}</Text>
            <Text style={styles.repositoryReviewText}>{review.text}</Text>
        </View>
    );
  };

export default ReviewComment;