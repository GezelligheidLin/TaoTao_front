// index.ts
import {createStore, Store} from 'vuex'
import {InjectionKey} from 'vue'

export const key: InjectionKey<Store<state>> = Symbol('key')

export type state = {
    Type: string
    HomeTypeIndex: number
    HomeLunBoId: string
    userId:string
}
export default createStore({
    state: {
        Type: '',
        HomeTypeIndex: 0,
        HomeLunBoId: '',
        userId:'',
    },
    mutations: {
        changeHomeTypeIndex(state, number) {
            state.HomeTypeIndex = number
        },
        changeHomeLunBoId(state, id) {
            state.HomeLunBoId = id
        },
        changeUserId(state, id) {
            state.userId = id
        }
    }
})
