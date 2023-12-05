// UpdateStudent.tsx
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { myDataActions } from "../features/studentSlice"
import { updateStudent } from "../service/studentApi"

const UpdateStudent: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  useSelector((state: any) => state.students || {})
  const handleSubmit = (values: any) => {
    // Dispatch the updateData action
    dispatch(myDataActions.updateData({ id: parseInt(id), ...values }))
    updateStudent(id, values)
    navigate("/")
  }

  return (
    <div className="container mx-auto my-4 px-4 lg:px-20">
      <h1 className="text-3xl font-bold mb-6">Update Student Information</h1>
      <div className="bg-white p-6 shadow rounded hover:shadow-lg">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }}
          validate={(values) => {
            const errors: any = {}
            if (!values.firstName) {
              errors.firstName = "Required"
            }
            if (!values.lastName) {
              errors.lastName = "Required"
            }
            if (!values.email) {
              errors.email = "Required"
            }
            if (!values.phone) {
              errors.phone = "Required"
            }
            if (!values.message) {
              errors.message = "Required"
            }
            return errors
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 mt-5"
            >
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default UpdateStudent
