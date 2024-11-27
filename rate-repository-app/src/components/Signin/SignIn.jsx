import { TextInput, View, Pressable, StyleSheet } from 'react-native';
import Text from '../misc/Text';
import theme from '../../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import AuthStorage from '../../utils/authStorage';
import { Platform } from 'react-native';

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
        padding: 10,
        width: '-webkit-fill-available'
    },
    error: {
      color: '#d73a4a',
      paddingLeft: 10
    },
    inputError: {
      borderColor: '#d73a4a',
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

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { authenticate } = await signIn({ username, password });
      AuthStorage.setAccessToken(authenticate.accessToken);
    } catch (e) {
      console.log(e);
    }
  } 

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const returnForm =  
  <>
    <TextInput style={[styles.input, (formik.touched.username && formik.errors.username) && styles.inputError]}
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
    {formik.touched.username && formik.errors.username && (
      <Text style={styles.error}>{formik.errors.username}</Text>
    )}
    <TextInput style={[styles.input, (formik.touched.password && formik.errors.password) && styles.inputError]} secureTextEntry
      placeholder="Password"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
    />
    {formik.touched.password && formik.errors.password && (
      <Text style={styles.error}>{formik.errors.password}</Text>
    )}
    <Pressable style={styles.button} onPress={formik.handleSubmit}>
      <Text color="textSecondary">Login</Text>
    </Pressable>
  </>

  if (Platform.OS !== 'web') {
    return (
      <View>
        {returnForm}
      </View>
    );
  } else {
    return (
      <form>
        {returnForm}
      </form>
    );
  }
};

export default SignIn;