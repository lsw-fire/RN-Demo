import React,{AsyncStorage} from 'react-native';

// 数据对应的key
var STORAGE_KEY = 'I_AM_KEY';

export default class AppContext {

    // 获取
    static async getValue() {
        console.log('Demo._get()');
        try {// try catch 捕获异步执行的异常
            let value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null){
                console.log('_get() success: ' ,value);
            } else {
                console.log('_get() no data');
            }
            return value;
        } catch (error) {
            console.log('_get() error: ',error.message);
        }
        return "";
    }

    // // 保存
    static async save(value) {
        console.log('Demo._save()');
        try {
            await AsyncStorage.setItem(STORAGE_KEY, value);
            console.log('_save success: ',value);
        } catch (error) {
            console.log('_save error: ',error.message);
        }
    }

    // // 删除
    // static async _remove() {
    //     console.log('Demo._remove()');
    //     try {
    //         await AsyncStorage.removeItem(STORAGE_KEY);
    //         console.log('_remove() success');
    //     } catch (error) {
    //         console.log('_remove() error: ', error.message);
    //     }
    // }

    
}
