import { Formik } from "formik"
import { useState } from "react"
import ClipBoardSection from "../components/clipboard"
import { createStudent } from "../service/studentApi"

const CreateStudent = () => {
  const [submittedData, setSubmittedData] = useState<any | null>(null)
  const [copyButton, setCopyButton] = useState<any | null>(false)
  function onSubmit(values: any, { setSubmitting, resetForm }: any) {
    createStudent(values)
      .then(() => {
        setSubmittedData(values)
        setCopyButton(false)
        resetForm()
      })
      .catch((error) => {
        console.error("Error submitting form:", error)
      })
      .finally(() => {
        setSubmitting(false)
        setCopyButton(false)
      })
  }

  const handleCopy = () => {
    const copyText = document.getElementById("codeSnippet") as HTMLPreElement
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(copyText)
    selection?.removeAllRanges()
    selection?.addRange(range)
    document.execCommand("copy")
    selection?.removeAllRanges()
    setCopyButton(true)
  }

  return (
    <section className="py-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <div className="bg-white p-6 shadow rounded hover:shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Student</h2>
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
          onSubmit={onSubmit}
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
      <div className="bg-white p-6 ">
        <ClipBoardSection
          handleCopy={handleCopy}
          copyButton={copyButton}
          submittedData={submittedData}
        />
      </div>
    </section>
  )
}

export default CreateStudent
