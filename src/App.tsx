import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import "./App.css"
import StudentCrud from "./pages/ListStudents"
import { default as PersonStudentDetail } from "./pages/StudentDetail"
import UpdateStudent from "./pages/UpdateStudent"
import CreateStudent from "./pages/createStudent"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center text-white">
                  <span className="text-2xl font-bold">Student CRUD</span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 justify-between ">
                    <div>
                      <Link
                        to="/"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </Link>
                      <Link
                        to="/create-student"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Create Student
                      </Link>
                    </div>
                    <div className="">
                      <a
                        href="https://www.linkedin.com/in/muhammad-shumail-ansari/"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Linkedin Profile
                      </a>
                      <a
                        href="https://github.com/muhammad-shumail"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Github Profile
                      </a>
                      <a
                        href="https://github.com/muhammad-shumail/super-soft-technology-project"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Github Repo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<StudentCrud />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/student/:id" element={<PersonStudentDetail />} />
          <Route path="/update-student/:id" element={<UpdateStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
