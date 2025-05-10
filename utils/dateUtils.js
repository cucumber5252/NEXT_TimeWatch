// utils/dateUtils.js
export function getKSTDateString() {
    const utcDate = new Date();
    const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

    // YYYY-MM-DD HH:mm:ss 형식 (밀리초 제외)
    const kstDateString = kstDate.toISOString().replace('T', ' ').split('.')[0];

    // YYYY-MM-DD HH:mm:ss.sss 형식 (밀리초 포함)
    const kstDateStringWithMs = kstDate.toISOString().replace('T', ' ').replace('Z', '');

    // 오늘 날짜 (YYYY-MM-DD)
    const todayString = kstDate.toISOString().split('T')[0];

    // 이번 달 (YYYY-MM)
    const monthString = todayString.slice(0, 7);

    // 이번 해 (YYYY)
    const yearString = todayString.slice(0, 4);

    // 어제 날짜 계산 (KST 기준 하루 전)
    const yesterdayDate = new Date(kstDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayString = yesterdayDate.toISOString().split('T')[0];

    return {
        kstDate, // Date 객체 그대로 반환
        kstDateString, // 밀리초 제외 ("YYYY-MM-DD HH:mm:ss")
        kstDateStringWithMs, // 밀리초 포함 ("YYYY-MM-DD HH:mm:ss.sss")
        todayString,
        monthString,
        yearString,
        yesterdayString,
    };
}
