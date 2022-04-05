import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiPage() {
  const [dogUrl, setDogUrl] = useState("")

  useEffect(() => {
    const openAPI = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random")
      setDogUrl(result.data.message)
    }
    openAPI()
  }, [])

  return (
    <div>
      <img src={dogUrl} />
    </div>
  )
}