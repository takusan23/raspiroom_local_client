// HTTP Client
import axios from 'axios'
import DatabaseObject from './DetabaseObject'

/** URL */
const BASE_URL = `http://raspberrypi.local:4545/api`

/**
 * APIをまとめたもの
 */
export default {

    /**
     * 温度を返すAPIを叩く関数
     */
    async getSensor() {
        const response = await axios.get(`${BASE_URL}/sensor`)
        return response.data as DatabaseObject
    },

    /**
     * 赤外線を送信するAPIを叩く関数
     */
    async postIr(device: string, isOn: boolean) {
        const response = await axios.post(`${BASE_URL}/send_ir`, {
            device: device,
            isOn: isOn,
        })
        return response.status === 200
    },

    /** オブジェクトで現在の赤外線(LED)の状態を返す */
   async getIrData(){
        const response = await axios.get(`${BASE_URL}/current_ir`)
        return response.data
    }

}