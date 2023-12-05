import { httpService } from "./httpService"

export const getAllStudents = async () => {
  return httpService.get("/users")
}

export const getStudentById = async (id: string) => {
  return httpService.get(`/users/${id}`)
}

export const createStudent = async (data: any) => {
  return httpService.post("/users", data)
}

export const updateStudent = async (id: string, data: any) => {
  return httpService.put(`/users/${id}`, data)
}

export const deleteStudent = async (id: string) => {
  return httpService.delete(`/users/${id}`)
}
