// GetStudents.tsx
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { studentActions } from "../features/studentSlice"
import { deleteStudent } from "../service/studentApi"

const GetStudents = ({ data }: { data: any[] }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getCurrentStudents = (id: number) => {
    console.log("id: " + id)
    // Navigate to a new page with the student id as a parameter
    navigate("/student/" + id, { replace: false })
  }

  const handleDelete = (id: string) => {
    // Dispatch the deleteData action
    deleteStudent(id)
    dispatch(studentActions.deleteData(id))
  }

  const handleUpdate = (student: any) => {
    navigate("/update-student/" + student.id, { state: student })
  }

  return (
    <div className="py-8 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Users</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((student: any) => (
          <div
            key={student.id}
            className="bg-white p-6 shadow rounded hover:shadow-lg"
          >
            <div className="mb-4">
              <span className="block text-xl font-bold">{student.name}</span>
              <span className="block text-sm text-gray-500">
                {student.email}
              </span>
            </div>
            <div className="mb-4">
              <span className="block text-xl font-bold">{student.phone}</span>
              <span className="block text-sm text-gray-500">
                {student.website}
              </span>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => getCurrentStudents(student.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                View Details
              </button>
              <div>
                <button
                  onClick={() => handleUpdate(student)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetStudents
