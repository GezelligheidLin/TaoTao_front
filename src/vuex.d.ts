//vuex.d.ts

import {Store} from 'vuex'
import {state} from '../store'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store : Store<state>
    }
}
