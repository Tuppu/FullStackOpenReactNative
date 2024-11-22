import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  detailRow: {
    flexGrow: 1,
    padding: 4,
    alignItems: 'center'
  },
  title: {
    padding: 4
  },
  value: {
    fontWeight: "bold",
    padding: 4
  },
});

const RepositoryItemDetailsItem = ({title, count}) => {
  const valueParsed = (rawValue) => {
    if (rawValue < 1000) return rawValue;
      else return ((rawValue / 1000) + 0.05).toFixed(1) + 'k'
    }

  return (  
    <View style={styles.detailRow}>
      <Text style={styles.value}>{valueParsed(count)}</Text>  
      <Text style={styles.title}>{title}</Text>  
    </View>
  )
}

export default RepositoryItemDetailsItem;