/**
 * Firestoreのオブジェクトの型情報
 * */
export default interface DatabaseObject {
    date: DatabaseDateObject,
    temp: number,
    humid: number,
    cpu_temp:number,
}

interface DatabaseDateObject {
    seconds: number,
    nanoseconds: number
}