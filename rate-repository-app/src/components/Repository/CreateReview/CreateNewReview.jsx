import { TextInput, View, Pressable, StyleSheet, Platform} from 'react-native';
import Text from '../../misc/Text';
import theme from '../../../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useCreateReview from '../../../hooks/useCreateReview';

const initialValues = {
    reposityOwnerName: '',
    repositoryName: '',
    ratingScores: '',
    reviewComment: '',
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
    reposityOwnerName: yup
      .string()
      .required('Reposity owner name is required'),
    repositoryName: yup
      .string()
      .required('Repository name is required'),
    ratingScores: yup
      .number()
      .required('Rating is required')
      .min(0, "Greater than or equal to 0")
      .max(100, "Less than or equal to 100"),
    reviewComment: yup
      .string()
      .optional(undefined),
  });

const CreateNewReview = () => {

  const [createNewReview] = useCreateReview();

  const onSubmit = (values)  => {
    createNewReview(values)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const returnForm =  
  <View style={styles.background}>
    <TextInput style={[styles.input, (formik.touched.reposityOwnerName && formik.errors.reposityOwnerName) && styles.inputError]}
      placeholder="Reposity owner name"
      value={formik.values.reposityOwnerName}
      onChangeText={formik.handleChange('reposityOwnerName')}
    />
    {formik.touched.reposityOwnerName && formik.errors.reposityOwnerName && (
      <Text style={styles.error}>{formik.errors.reposityOwnerName}</Text>
    )}

    <TextInput style={[styles.input, (formik.touched.repositoryName && formik.errors.repositoryName) && styles.inputError]}
      placeholder="Repository name"
      value={formik.values.repositoryName}
      onChangeText={formik.handleChange('repositoryName')}
    />
    {formik.touched.repositoryName && formik.errors.repositoryName && (
      <Text style={styles.error}>{formik.errors.repositoryName}</Text>
    )}

    <TextInput style={[styles.input, (formik.touched.ratingScores && formik.errors.ratingScores) && styles.inputError]}
      placeholder="Rating between 0 and 100"
      value={formik.values.ratingScores}
      onChangeText={formik.handleChange('ratingScores')}
    />
    {formik.touched.ratingScores && formik.errors.ratingScores && (
      <Text style={styles.error}>{formik.errors.ratingScores}</Text>
    )}

    <TextInput style={[styles.input, (formik.touched.reviewComment && formik.errors.reviewComment) && styles.inputError]}
      placeholder="Review" multiline
      value={formik.values.reviewComment}
      onChangeText={formik.handleChange('reviewComment')}
    />
    {formik.touched.reviewComment && formik.errors.reviewComment && (
      <Text style={styles.error}>{formik.errors.reviewComment}</Text>
    )}

    <Pressable style={styles.button} onPress={formik.handleSubmit}>
      <Text color="textSecondary">Create a review</Text>
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

export default CreateNewReview;