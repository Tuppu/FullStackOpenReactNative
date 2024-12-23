import { TextInput, View, Pressable, StyleSheet, Platform} from 'react-native';
import Text from '../misc/Text';
import theme from '../../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useSignUp from '../../hooks/usSignUp';

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
  };

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white"
  },
  input: {
      height: 40,
      margin: 12,
      marginBottom: 4,
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
      .required('Username is required')
      .min(5, "Greater than or equal to 5")
      .max(30, "Less than or equal to 30"),
    password: yup
      .string()
      .required('Password is required')
      .min(5, "Greater than or equal to 5")
      .max(50, "Less than or equal to 50"),
      passwordConfirmation: yup
      .string()
      .required('Password confirmation is required')
      .oneOf([yup.ref('password')], "Password confirmation is not correct"),
  });

const SignUp = () => {

  const [createNewUser] = useSignUp();

  const onSubmit = (values)  => {
    createNewUser(values)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const returnForm =  
  <View style={styles.background}>
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

    <TextInput style={[styles.input, (formik.touched.passwordConfirmation && formik.errors.passwordConfirmation) && styles.inputError]} secureTextEntry
      placeholder="Password confirmation"
      value={formik.values.passwordConfirmation}
      onChangeText={formik.handleChange('passwordConfirmation')}
    />
    {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
      <Text style={styles.error}>{formik.errors.passwordConfirmation}</Text>
    )}

    <Pressable style={styles.button} onPress={formik.handleSubmit}>
      <Text color="textSecondary">Sign up</Text>
    </Pressable>
  </View>

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

export default SignUp;