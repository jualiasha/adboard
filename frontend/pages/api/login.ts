import nc from "next-connect"
import { sessionMiddleware } from "../../middlewares/session"
import { authUser } from "../../utils/api"

export default nc()
  .use(sessionMiddleware)
  .post(async (req: any, res: any) => {
    const { email, password } = req?.body

    try {
      const user = await authUser(req?.session?.user)
        .post(`/auth/local`, {
          identifier: email,
          password,
        })
        .then((res) => res.data)
        .then((data) => ({
          ...data.user,
          strapiToken: data.jwt,
        }))

      if (!user.confirmed) {
        return res.status(401).json({
          statusCode: 401,
          message: "User not confirmed",
        })
      }

      req.session.set("user", user)
      await req.session.save()
      res.json(user)
    } catch (error) {
      const { response: fetchResponse } = error
      if (fetchResponse) {
        return res
          .status(fetchResponse?.status || 500)
          .json(error.response?.data)
      }
      res.status(500).json(error)
    }
  })
