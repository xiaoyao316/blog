import actions from './actions.js';
import mutations from './mutations.js';

export const state = {
  menuList: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
