// utils/timeapi.js
import axios from 'axios';

/**
 * timeapi.io에서 KST(한국 표준시) 시간 가져오기 (오프셋 적용 오류 수정)
 * @param {number} secondsOffset - 현재 시간에서 몇 초를 빼거나 더할지 (예: -86400 → 24시간 전)
 * @returns {Object} { kstDateString: "YYYY-MM-DD HH:mm:ss", todayString: "YYYY-MM-DD", monthString: "YYYY-MM" }
 */
export async function getKSTDate(secondsOffset = 0) {
    try {
        const response = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul');
        let kstDateString = response.data.dateTime.replace('T', ' ').split('.')[0]; // "YYYY-MM-DD HH:mm:ss"

        if (secondsOffset !== 0) {
            // ✅ KST 문자열을 UTC 기준 `Date` 객체로 변환 후 KST 보정
            let kstDate = new Date(`${kstDateString} GMT+0900`);
            kstDate.setTime(kstDate.getTime() + secondsOffset * 1000); // ✅ 초 단위로 보정

            // ✅ 조정된 시간을 KST 문자열로 변환
            const year = kstDate.getFullYear();
            const month = String(kstDate.getMonth() + 1).padStart(2, '0'); // 1월=0, 2월=1 → +1 필요
            const day = String(kstDate.getDate()).padStart(2, '0');
            const hours = String(kstDate.getHours()).padStart(2, '0');
            const minutes = String(kstDate.getMinutes()).padStart(2, '0');
            const seconds = String(kstDate.getSeconds()).padStart(2, '0');

            kstDateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }

        return {
            kstDateString, // ✅ KST 문자열 유지
            todayString: kstDateString.split(' ')[0], // "YYYY-MM-DD" 형식
            monthString: kstDateString.slice(0, 7), // "YYYY-MM" 형식
        };
    } catch (error) {
        console.error('❌ Failed to fetch KST time:', error);
        throw new Error('Failed to fetch KST time');
    }
}
