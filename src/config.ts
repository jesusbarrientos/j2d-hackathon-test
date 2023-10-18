import Joi from 'joi'

const envVarsSchema = Joi.object()
  .keys({
    VITE_API_URL: Joi.string().description('API url').default('https://rickandmortyapi.com/api'),
  })
  .unknown()

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(import.meta.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  apiUrl: envVars?.VITE_API_URL,
}

export default config
