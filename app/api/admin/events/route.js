import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

// 이벤트 파일 경로
const eventsFilePath = path.join(process.cwd(), 'lib', 'events.js');

// 모든 이벤트 가져오기
export async function GET() {
    try {
        // events.js 파일 내용 읽기
        const fileContent = await fs.readFile(eventsFilePath, 'utf8');

        // 객체 형태로 파싱 (이 부분은 간소화된 방식입니다. 실제로는 더 정교한 파싱이 필요할 수 있습니다)
        const eventsMatch = fileContent.match(/export\s+default\s+({[\s\S]+});?\s*$/);

        if (!eventsMatch) {
            throw new Error('이벤트 데이터를 찾을 수 없습니다');
        }

        // 여기서는 실제 객체로 변환하지 않고 원본 텍스트를 반환합니다
        return NextResponse.json({
            success: true,
            data: eventsMatch[1],
        });
    } catch (error) {
        console.error('이벤트 조회 오류:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// 새 이벤트 추가하기
export async function POST(request) {
    try {
        const { date, event } = await request.json();

        // 현재 이벤트 파일 읽기
        let fileContent = await fs.readFile(eventsFilePath, 'utf8');

        // 해당 날짜가 있는지 확인
        const dateRegex = new RegExp(`['"]${date}['"]:\\s*\\[([\\s\\S]*?)\\],`);
        const dateMatch = fileContent.match(dateRegex);

        if (!dateMatch) {
            return NextResponse.json({ success: false, message: '해당 날짜를 찾을 수 없습니다.' }, { status: 404 });
        }

        // 이벤트 객체를 문자열로 변환
        const eventString = `
        {
            id: ${event.id},
            time: '${event.time}',
            title: '${event.title.replace(/'/g, "\\'")}',
            link: '${event.link.replace(/'/g, "\\'")}',
            img: '${event.img.replace(/'/g, "\\'")}',
            companies: [
                ${event.companies
                    .map(
                        (company) => `{
                    name: '${company.name.replace(/'/g, "\\'")}',
                    link: '${company.link.replace(/'/g, "\\'")}',
                }`
                    )
                    .join(',\n                ')}
            ],
            category: '${event.category.replace(/'/g, "\\'")}',
        },`;

        // 해당 날짜의 마지막 이벤트 뒤에 새 이벤트 추가
        const existingEvents = dateMatch[1];
        const updatedEvents = existingEvents ? existingEvents + eventString : eventString;

        // 파일 내용 업데이트
        fileContent = fileContent.replace(dateRegex, `'${date}': [${updatedEvents}],`);

        // 파일 저장
        await fs.writeFile(eventsFilePath, fileContent, 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('이벤트 추가 오류:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// 이벤트 삭제하기
export async function DELETE(request) {
    try {
        const { date, eventId } = await request.json();

        // 현재 이벤트 파일 읽기
        let fileContent = await fs.readFile(eventsFilePath, 'utf8');

        // 해당 날짜가 있는지 확인
        const dateRegex = new RegExp(`['"]${date}['"]:\\s*\\[([\\s\\S]*?)\\],`);
        const dateMatch = fileContent.match(dateRegex);

        if (!dateMatch) {
            return NextResponse.json({ success: false, message: '해당 날짜를 찾을 수 없습니다.' }, { status: 404 });
        }

        // 삭제할 이벤트 정규식 패턴
        const eventRegex = new RegExp(`\\s*\\{[\\s\\S]*?id:\\s*${eventId}[\\s\\S]*?\\},`);

        // 해당 이벤트 삭제
        const updatedEvents = dateMatch[1].replace(eventRegex, '');

        // 파일 내용 업데이트
        fileContent = fileContent.replace(dateRegex, `'${date}': [${updatedEvents}],`);

        // 파일 저장
        await fs.writeFile(eventsFilePath, fileContent, 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('이벤트 삭제 오류:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// 이벤트 수정 API
export async function PUT(request) {
    try {
        const { date, event, oldDate } = await request.json();

        // 현재 이벤트 파일 읽기
        let fileContent = await fs.readFile(eventsFilePath, 'utf8');

        // 이벤트 날짜가 변경된 경우
        if (oldDate && oldDate !== date) {
            // 1. 이전 날짜에서 이벤트 삭제
            const oldDateRegex = new RegExp(`['"]${oldDate}['"]:\\s*\\[([\\s\\S]*?)\\],`);
            const oldDateMatch = fileContent.match(oldDateRegex);

            if (oldDateMatch) {
                const eventRegex = new RegExp(`\\s*\\{[\\s\\S]*?id:\\s*${event.id}[\\s\\S]*?\\},`);
                const updatedOldEvents = oldDateMatch[1].replace(eventRegex, '');

                fileContent = fileContent.replace(oldDateRegex, `'${oldDate}': [${updatedOldEvents}],`);
            }

            // 2. 새 날짜에 이벤트 추가
            const newDateRegex = new RegExp(`['"]${date}['"]:\\s*\\[([\\s\\S]*?)\\],`);
            const newDateMatch = fileContent.match(newDateRegex);

            if (newDateMatch) {
                // 이벤트 객체를 문자열로 변환
                const eventString = `
          {
              id: ${event.id},
              time: '${event.time}',
              title: '${event.title.replace(/'/g, "\\'")}',
              link: '${event.link.replace(/'/g, "\\'")}',
              img: '${event.img.replace(/'/g, "\\'")}',
              companies: [
                  ${event.companies
                      .map(
                          (company) => `{
                      name: '${company.name.replace(/'/g, "\\'")}',
                      link: '${company.link.replace(/'/g, "\\'")}',
                  }`
                      )
                      .join(',\n                ')}
              ],
              category: '${event.category.replace(/'/g, "\\'")}',
          },`;

                const existingEvents = newDateMatch[1];
                const updatedNewEvents = existingEvents ? existingEvents + eventString : eventString;

                fileContent = fileContent.replace(newDateRegex, `'${date}': [${updatedNewEvents}],`);
            } else {
                // 새 날짜가 없는 경우 날짜 생성
                const lastBraceIndex = fileContent.lastIndexOf('}');
                const eventString = `
          {
              id: ${event.id},
              time: '${event.time}',
              title: '${event.title.replace(/'/g, "\\'")}',
              link: '${event.link.replace(/'/g, "\\'")}',
              img: '${event.img.replace(/'/g, "\\'")}',
              companies: [
                  ${event.companies
                      .map(
                          (company) => `{
                      name: '${company.name.replace(/'/g, "\\'")}',
                      link: '${company.link.replace(/'/g, "\\'")}',
                  }`
                      )
                      .join(',\n                ')}
              ],
              category: '${event.category.replace(/'/g, "\\'")}',
          }`;

                const newDateSection = `    '${date}': [${eventString}],\n`;
                fileContent =
                    fileContent.substring(0, lastBraceIndex) + newDateSection + fileContent.substring(lastBraceIndex);
            }
        } else {
            // 같은 날짜 내에서 이벤트 수정
            const dateRegex = new RegExp(`['"]${date}['"]:\\s*\\[([\\s\\S]*?)\\],`);
            const dateMatch = fileContent.match(dateRegex);

            if (!dateMatch) {
                return NextResponse.json({ success: false, message: '해당 날짜를 찾을 수 없습니다.' }, { status: 404 });
            }

            // 이벤트 ID에 해당하는 부분 찾기
            const eventRegex = new RegExp(`(\\s*\\{[\\s\\S]*?id:\\s*${event.id}[\\s\\S]*?\\}),`);
            const eventMatch = dateMatch[1].match(eventRegex);

            if (!eventMatch) {
                return NextResponse.json(
                    { success: false, message: '해당 이벤트를 찾을 수 없습니다.' },
                    { status: 404 }
                );
            }

            // 새 이벤트 문자열 생성
            const newEventString = `
          {
              id: ${event.id},
              time: '${event.time}',
              title: '${event.title.replace(/'/g, "\\'")}',
              link: '${event.link.replace(/'/g, "\\'")}',
              img: '${event.img.replace(/'/g, "\\'")}',
              companies: [
                  ${event.companies
                      .map(
                          (company) => `{
                      name: '${company.name.replace(/'/g, "\\'")}',
                      link: '${company.link.replace(/'/g, "\\'")}',
                  }`
                      )
                      .join(',\n                ')}
              ],
              category: '${event.category.replace(/'/g, "\\'")}',
          }`;

            // 이벤트 업데이트
            const updatedDateContent = dateMatch[1].replace(eventRegex, `${newEventString},`);
            fileContent = fileContent.replace(dateRegex, `'${date}': [${updatedDateContent}],`);
        }

        // 파일 저장
        await fs.writeFile(eventsFilePath, fileContent, 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('이벤트 수정 오류:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
