//import { login, getInfo,loginByCode } from '@/assets/api/user';
import { getToken, setToken, removeToken } from '@/assets/scripts/utils/auth';
import router, { resetRouter } from '@/router';

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    rolesype:[]
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles;
    },
    SET_ROLESTYPE: (state, rolesype) => {
        state.rolesype = rolesype;
    }
};

const actions = {
    login({ commit }) {
        commit('SET_TOKEN', '11'); 
        setToken('999');
        // return new Promise((resolve, reject) => {
        //     login(param).then(response => {
        //         const { data } = response;

        //         commit('SET_TOKEN', data.token);
        //         setToken(data.token);
        //         resolve()
        //     }).catch(error => {
        //         reject(error);
        //     });
        // });
    },
    loginByCode({ commit }, param) {
        return new Promise((resolve, reject) => {
            loginByCode(param).then(response => {
                const { data } = response;

                commit('SET_TOKEN', data.token);
                setToken(data.token);
                resolve()
            }).catch(error => {
                reject(error);
            });
        });
    },
    getInfo({ commit}) { 
        return new Promise((resolve, reject) => {
            const data = {
                roles: '1'
            };
            if (!data) {
                reject('验证失败，请重新登录。')
            }

                
            data.roles = [data.role];
                

            const { roles } = data;

            if (!roles || roles.length <= 0) {
                reject('getInfo: roles must be a non-null array!')
            }

            commit('SET_ROLES', roles)

            resolve(data)
        });
    },
    logout({ commit, dispatch }) {
        commit('SET_TOKEN', '');
        commit('SET_ROLES', []);
        removeToken();
        resetRouter();

        dispatch('tagsView/delAllViews', null, { root: true }); 
    },
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', []);
            removeToken();
            resolve();
        })
    },
    changeRoles({ commit, dispatch }, role) {
        /* eslint-disable-next-line */
        return new Promise(async resolve => {
            const token = role + '-token';

            commit('SET_TOKEN', token);
            setToken(token);

            const { roles } = await dispatch('getInfo');

            resetRouter();

            // generate accessible routes map based on roles
            const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true });

            // dynamically add accessible routes
            router.addRoutes(accessRoutes);

            // reset visited views and cached views
            dispatch('tagsView/delAllViews', null, { root: true });

            resolve();
        })
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};