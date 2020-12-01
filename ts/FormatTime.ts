/**
 * 秒（UnixTime）をきれいな文字列に変換する関数
 */
export default function toFormatTime(seconds: number): string {
    const date = new Date(seconds * 1000);
    return date.toLocaleString();
}