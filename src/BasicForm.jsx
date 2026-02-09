import {Password} from '@mui/icons-material';
import {useFormik} from 'formik';
import {object, string} from 'yup';


let loginValidationSchema = object ({
  username: string ().required ('username is must').min (7),
  password: string ().required (),
});

export function BasicForm () {
  const formik = useFormik ({
    initialValues: {
      username: 'Ceol',
      password: 'hi-world',
    },
    validationSchema: loginValidationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-input">
        <input
          type="text"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="username"
        />
        {formik.touched.username && formik.errors.username
          ? formik.errors.username
          : null}
        <input
          type="text"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
        />
        {formik.touched.password && formik.errors.password
          ? formik.errors.password
          : null}

        <div className="form-button">

          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}
