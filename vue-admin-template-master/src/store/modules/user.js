import { loginApi, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
    return {
        user: null, // 存储登录后的用户信息
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    // SET_TOKEN: (state, token) => {
    //     state.token = token
    // },
    // SET_NAME: (state, name) => {
    //     state.name = name
    // },
    // SET_AVATAR: (state, avatar) => {
    //     state.avatar = avatar
    // },
    SET_USER: (state, payload) => {
        state.user = payload
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {

        // userInfo 是用户提交的数据
        return new Promise((resolve, reject) => {
            loginApi(userInfo).then((res) => {
                const { data } = res;
                if (data) {
                    // 说明data里面有数据
                    commit('SET_USER', data);
                    resolve();
                } else {
                    // 说明data是空的
                    reject(res)
                }
            }).catch(error => {
                reject(error)
            })
        })


        // const { username, password } = userInfo
        // return new Promise((resolve, reject) => {
        //   login({ username: username.trim(), password: password }).then(response => {
        //     const { data } = response
        //     commit('SET_TOKEN', data.token)
        //     setToken(data.token)
        //     resolve()
        //   }).catch(error => {
        //     reject(error)
        //   })
        // })
    },

    // 恢复登录状态
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            // 发送请求
            getInfo().then(res => {
                if (typeof res === 'string') {
                    // 未登录，或者token已经过期了
                    res = JSON.parse(res);
                    if (res.code === 401) {
                        reject(res.msg);
                    }
                } else {
                    // 说明这个token是ok的，将用户信息放入到仓库
                    commit('SET_USER', res.data);
                    resolve();
                }
            })

            // getInfo(state.token).then(response => {
            //     const { data } = response

            //     if (!data) {
            //         return reject('Verification failed, please Login again.')
            //     }

            //     const { name, avatar } = data

            //     commit('SET_NAME', name)
            //     commit('SET_AVATAR', avatar)
            //     resolve(data)
            // }).catch(error => {
            //     reject(error)
            // })
        })
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            // logout(state.token).then(() => {
            removeToken() // must remove  token  first
            resetRouter()
            commit('RESET_STATE')
            resolve()
                // }).catch(error => {
                // reject(error)
                // })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}