import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

// 이벤트 파일 경로
const eventsFilePath = path.join(process.cwd(), 'lib', 'events.js');

// 새 날짜 추가하기
export async function POST(request) {
    try {
        const { date } = await request.json();

        // 날짜 형식 검증
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            return NextResponse.json(
                { success: false, message: '날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식으로 입력하세요.' },
                { status: 400 }
            );
        }

        // 현재 이벤트 파일 읽기
        let fileContent = await fs.readFile(eventsFilePath, 'utf8');

        // 해당 날짜가 이미 있는지 확인
        const dateExists = fileContent.includes(`'${date}':`);

        if (dateExists) {
            return NextResponse.json({ success: false, message: '해당 날짜가 이미 존재합니다.' }, { status: 400 });
        }

        // 파일의 마지막 부분 찾기 (export default 문의 닫는 중괄호 위치)
        const lastBraceIndex = fileContent.lastIndexOf('}');

        if (lastBraceIndex === -1) {
            return NextResponse.json({ success: false, message: '파일 구조를 파싱할 수 없습니다.' }, { status: 500 });
        }

        // 새 날짜와 빈 배열 추가
        const newDateSection = `    '${date}': [],\n`;

        // 파일 내용 업데이트
        const updatedContent =
            fileContent.substring(0, lastBraceIndex) + newDateSection + fileContent.substring(lastBraceIndex);

        // 파일 저장
        await fs.writeFile(eventsFilePath, updatedContent, 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('날짜 추가 오류:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
