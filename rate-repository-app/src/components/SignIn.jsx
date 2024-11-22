import { TextInput, View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useFormik } from 'formik';

const initialValues = {
    username: '',
    password: '',
  };

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: theme.colors.textSecondary,
        padding: 10
    },
    button: {
        backgroundColor: theme.colors.primary,
        height: 40,
        margin: 12,
        borderRadius: 4,
        padding: 10,
        alignItems: 'center'
    },
});

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values)
  } 

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View>
      <TextInput style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('masusernames')}
      />
      <TextInput style={styles.input} secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="textSecondary">Login</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;