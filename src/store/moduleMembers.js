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
      // debugger
      thisStore.state.members.push({
        name: thisStore.state.member.name,
        age: thisStore.state.member.age
      })
      console.log('Done membersCreate', moduleMembers.state.members)
    },
    membersRead(thisStore) {
      const members = [{
        name: '홍길동',
        age: 20
      }, {
        name: '춘향이',
        age: 16
      }]
      thisStore.commit('membersRead', members)
      console.log('Done membersRead', moduleMembers.state.members)
    },
    membersUpdate(thisStore, memberUpdate) {
      debugger
      thisStore.state.members[memberUpdate.index] = memberUpdate.member
      console.log('Done membersUpdate', moduleMembers.state.members)
    },
    membersDelete(thisStore, index) {
      debugger
      thisStore.state.members.splice(index, 1)
      console.log('Done membersDelete', moduleMembers.state.members)
    }
  }
}
