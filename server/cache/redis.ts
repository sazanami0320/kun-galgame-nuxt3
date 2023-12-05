import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  const storage = useStorage()
  const config = useRuntimeConfig()

  const driver = redisDriver({
    base: 'redis',
    host: config.REDIS_HOST,
    port: parseInt(config.REDIS_PORT),
  })

  storage.mount('redis', driver)
})
