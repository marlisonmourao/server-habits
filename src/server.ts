import './lib/dayjs'
import Fastify from "fastify"
import cors from '@fastify/cors'
import { appRoutes } from "./routes"
import { notificationRoutes } from './notification-routes'

const app = Fastify()

app.register(appRoutes)
app.register(cors)
app.register(notificationRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0'
}).then(() => {
  console.log('Server running')
})