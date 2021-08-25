import axios from 'axios'

export const moduleMembers = {
  state: {
    members: [],
    member: {
      name: '',
      age: ''
    }
  },
  mutations: {
    membersRead(state, members) {
      state.members = members
    }
  },
  actions: {
    membersCreate(thisStore) {
      axios.post('http://localhost:3100/api/v1/members', thisStore.state.member).then(function(response) {
        console.log('Done membersCreate', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersRead(thisStore) {
      axios.get('http://localhost:3100/api/v1/members').then(function(response) {
        console.log('Done membersRead', response)
        thisStore.commit('membersRead', response.data.members)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersUpdate(thisStore, memberUpdate) {
      debugger
      axios.patch('http://localhost:3100/api/v1/members', memberUpdate).then(function(response) {
        console.log('Done membersUpdate', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersDelete(thisStore, index) {
      debugger
      thisStore.state.members.splice(index, 1)
      console.log('Done membersDelete', moduleMembers.state.members)
    }
  }
}
