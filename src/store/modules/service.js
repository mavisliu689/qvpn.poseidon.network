import * as types from '../types'
import * as serviceAPI from '@/apis/service.js'

const state = {
  isLoading: false,
  isError: false,
  errorMessages: [],
  domains: [],
  serviceName: ''
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
    state.serviceName = serviceName
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
  async createReverseProxy ({ commit }, { proxyPass, ServiceName }) {
    commit(types.CREATE_PROXYPASS_PENDING)
    try {
      const serviceName = await serviceAPI.createReverseProxy({ proxyPass, ServiceName })
      commit(types.CREATE_PROXYPASS_SUCCESS, serviceName)
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
