import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getStudentById } from "../service/studentApi"

const PersonStudentDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStudentById(id)
        setData([response.data])
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [id])


  return (
    <div className="p-4">
      {data &&
        data.map((person: any) => (
          <div
            key={person.id}
            className="bg-white grid grid-cols-5 grid-rows-1 gap-4 my-4"
          >
            <div className="col-span-2 w-full bg-slate-50">
              <div className="mb-4">
                <span className="block text-xl font-bold">{person.name}</span>
                <span className="block text-sm text-gray-500">
                  {person.email}
                </span>
              </div>
              <div className="mb-4">
                <span className="block text-xl font-bold">{person.phone}</span>
                <span className="block text-sm text-gray-500">
                  {person.website}
                </span>
              </div>
              <div className="mb-4">
                <span className="block text-xl font-bold">
                  {person.company.name}
                </span>
                <span className="block text-sm text-gray-500">
                  {person.company.catchPhrase}
                </span>
                <span className="block text-sm text-gray-500">
                  {person.company.bs}
                </span>
              </div>
              <div className="mb-4">
                <span className="block text-xl font-bold">
                  {person.address.street}
                </span>
                <span className="block text-sm text-gray-500">
                  {person.address.suite}
                </span>
                <span className="block text-sm text-gray-500">
                  {person.address.city}
                </span>
                <span className="block text-sm text-gray-500">
                  {person.address.zipcode}
                </span>
                <span className="block text-sm text-gray-500">
                  {person.address.geo.lat}
                </span>
                <span className="block text-sm text-gray-500">
                  {person.address.geo.lng}
                </span>
              </div>
            </div>
            <div className="col-span-3 col-start-3">
              <div className="mb-4">
                <div className="mb-4">
                  <div className="responsive-map">
                    <iframe
                      title="Google Map"
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d${person.address.geo.lng}!3d${person.address.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889`}
                      width="600"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="mb-4">
                  <a
                    href={`https://www.google.com/maps/place/${person.address.geo.lat},${person.address.geo.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PersonStudentDetail
