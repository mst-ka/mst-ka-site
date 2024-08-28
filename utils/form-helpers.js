/**
 * Click event handler for form submission buttons that scrolls to the first
 * textfield element with errors present. The presence of errors is determined
 * by the Yup validation schema passed to the Formik object associated with
 * said form.
 * @param formikErrors - Formik errors object
 * @return void
 */
export const scrollToErrors = (formikErrors) => {
  const errorKeys = Object.keys(formikErrors);
  if (errorKeys.length > 0) {
    setTimeout(() => {
      document.getElementsByName(errorKeys[0])[0].focus();
    }, 10);
  }
};
