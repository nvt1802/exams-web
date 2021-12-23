import { FC, Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ILoginProps } from "./type"
import Action from "redux/actions"

const MainPage: FC<ILoginProps> = () => {
  const dispatch = useDispatch()

  const state = useSelector((state) => state)
  console.log("+", state)

  useEffect(() => {
    dispatch(
      Action.LoginAction.getInfoUserAsyncAction.request({
        email: "abc@gmail.com",
        password: "abcd1234",
      })
    )
  }, [])

  return (
    <Fragment>
      <div>MAIN</div>
    </Fragment>
  )
}

export default MainPage
