import fastify from 'fastify'
import { appRoutes } from './http/router'
import { ZodError } from 'zod'
import { env } from './env'
import cors from '@fastify/cors'

export const app = fastify()

app.register(appRoutes)

app.register(cors, {
  origin: true,
})

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // ToDo: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
