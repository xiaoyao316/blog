import actions from './actions.js';
import mutations from './mutations.js';

export const state = {
  menuList: [],
  test: 1,
  pageSize: 2,
  dialogVisible: false,
  menuForm: {
    name: '',
    name_sub: '',
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
