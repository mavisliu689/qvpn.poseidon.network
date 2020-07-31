import * as types from '../types'
import * as serviceAPI from '@/apis/service.js'

const state = {
  isLoading: false,
  isError: false,
  errorMessages: [],
  domains: [],
  serverName: ''
}

const getters = {

}

const mutations = {
  [types.FETCH_SERVICES_PENDING] (state) {
    state.isLoading = true
  },
  [types.FETCH_SERVICES_SUCCESS] (state, domains) {
    state.isLoading = false
    state.isError = false
    state.domains = [...domains]
  },
  [types.FETCH_SERVICES_FAILURE] (state, e) {
    state.isLoading = false
    state.isError = true
    state.errorMessages = [e, ...state.errorMessages]
  },
  [types.CREATE_PROXYPASS_PENDING] (state) {
    state.isLoading = true
  },
  [types.CREATE_PROXYPASS_SUCCESS] (state, serviceName) {
    state.isLoading = false
    state.isError = false
    state.serverName = serviceName.server_name
  },
  [types.CREATE_PROXYPASS_FAILURE] (state, e) {
    state.isLoading = false
    state.isError = true
    state.errorMessages = [e, ...state.errorMessages]
  }
}

const actions = {
  async fetchDomainByService ({ commit }, { service }) {
    commit(types.FETCH_SERVICES_PENDING)
    try {
      const domains = await serviceAPI.fetchDomainByService({ service })
      commit(types.FETCH_SERVICES_SUCCESS, domains)
    } catch (e) {
      commit(types.FETCH_SERVICES_FAILURE, e.message)
    }
  },
  async createReverseProxy ({ commit }, { proxyPass, serviceName }) {
    commit(types.CREATE_PROXYPASS_PENDING)
    try {
      const serviceNameResult = await serviceAPI.createReverseProxy({ proxyPass, serviceName })
      commit(types.CREATE_PROXYPASS_SUCCESS, serviceNameResult)
    } catch (e) {
      commit(types.CREATE_PROXYPASS_FAILURE, e.message)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
