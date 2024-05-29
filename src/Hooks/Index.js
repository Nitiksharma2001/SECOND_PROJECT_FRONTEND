import { useEffect, useState } from 'react'

const TryCatch = ({ fetchData }) => {
  const [finalData, setFinalData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const getData = async () => {
    setIsLoading(true)
    try {
      const { data, message } = await fetchData()
      setMessage(message)
      setFinalData(data)
    } catch (err) {
      setMessage(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { finalData, isLoading, message }
}

export default TryCatch
