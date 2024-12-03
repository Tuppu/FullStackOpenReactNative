import { View, StyleSheet } from 'react-native';
import Text from '../../../misc/Text';
import theme from '../../../../theme';

const styles = StyleSheet.create({
    reviewRating: {
        margin: 14,
        height: 50,
        width:50,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center'
    },
    reviewRatingText: {
        padding: 3
    }
});

const ReviewRating = ({ scores }) => {

    return (
        <View style={styles.reviewRating}>
            <Text style={styles.reviewRatingText} color="primary" fontWeight="bold">{scores}</Text>
        </View>
    );
  };

export default ReviewRating;