// APIまとめ
import api from '@/ts/API'

export const state = () => ({
    // 温度計のレスポンスをVuexで保持しておく。API未実装
    tempList: Array()
})

export const getters = {
    // 温度計配列を返す
    tempList: (state) => {
        return state.tempList
    }
}

export const mutations = {
    // TypeScriptの意味ない
    setTempList(state, databaseObject) {
        state.tempList = databaseObject
    }
}

export const actions = {
    /** センサーのデータを取得する */
    async getSensorData(context){
        const tempList = Array();        
        const response = await api.getSensor()
        tempList.push(response)
        context.commit("setTempList", tempList)
      },
}

