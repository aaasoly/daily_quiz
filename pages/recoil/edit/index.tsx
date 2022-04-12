import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { isEditState } from "../../../src/commons/store"
import Write from "../../../src/components/unit/board/recoil/write"

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState)

  useEffect(() => {
    setIsEdit(true);
  }, []);
  
  return <Write isEdit={true}/>
}