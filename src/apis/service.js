import {
  instance,
  mock
} from './base.js'

if (process.env.NODE_ENV !== 'production') {
  const fakedServiceDomain = [{
    domain: 'disney.3qqq.io',
    launcher_count: 21
  }, {
    domain: 'ru.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'liechtenstein.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'india.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'slovakia.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'cn.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'sk.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'latvia.3qqq.io',
    launcher_count: 2
  }, {
    domain: 'hungary.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'ua.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'australia.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'v2ray.3qqq.io',
    launcher_count: 233
  }, {
    domain: 'us.3qqq.io',
    launcher_count: 84
  }, {
    domain: 'france.3qqq.io',
    launcher_count: 3
  }, {
    domain: 'netherlands.3qqq.io',
    launcher_count: 7
  }, {
    domain: 'finland.3qqq.io',
    launcher_count: 36
  }, {
    domain: 'germany.3qqq.io',
    launcher_count: 10
  }, {
    domain: 'canada.3qqq.io',
    launcher_count: 9
  }, {
    domain: 'taiwan.3qqq.io',
    launcher_count: 22
  }, {
    domain: 'unitedkingdom.3qqq.io',
    launcher_count: 4
  }, {
    domain: 'russia.3qqq.io',
    launcher_count: 5
  }, {
    domain: 'hk.3qqq.io',
    launcher_count: 19
  }, {
    domain: 'singapore.3qqq.io',
    launcher_count: 19
  }, {
    domain: 'switzerland.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'greatbritain.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'japan.3qqq.io',
    launcher_count: 3
  }, {
    domain: 'ukraine.3qqq.io',
    launcher_count: 2
  }, {
    domain: 'jp.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'russianfederation.3qqq.io',
    launcher_count: 6
  }, {
    domain: 'gb.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'china.3qqq.io',
    launcher_count: 1
  }, {
    domain: 'southkorea.3qqq.io',
    launcher_count: 1
  }]

  const fakedReverseProxy = { service_name: 'jellysh.3q.vc' }

  mock.onGet('/domain').reply(200, fakedServiceDomain)
  mock.onPost('/reverse_proxy').reply(200, fakedReverseProxy)
}

export const fetchDomainByService = async ({ service }) => {
  try {
    const response = await instance.get(`/v1/domain?service=${service}`)
    return response.data
  } catch (e) {
    throw new Error(e.message)
  }
}

export const createReverseProxy = async ({ proxyPass, ServiceName }) => {
  try {
    const response = await instance.post('/v1/reverse_proxy', {
      proxy_pass: proxyPass,
      service_name: ServiceName
    })
    return response.data
  } catch (e) {
    throw new Error(e.message)
  }
}
