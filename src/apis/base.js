import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const timeout = 60000

const instance = axios.create({
  timeout,
  crossdomain: true
})

const fakeInstance = axios.create({
  baseURL: 'http://localhost',
  timeout
})

const mock = new MockAdapter(fakeInstance)

export { instance as default, instance, fakeInstance, mock }
