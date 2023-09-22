import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function SelfIntroduction() {
    const age = getCurrentYearsSince(1995, 10, 3);
    const career = getCurrentYearsAndMonthsSince(2016, 1, 1);

    return (
        <>
        <div className="w-full">
            <Card className="p-0 bg-gray-200/20 backdrop-blur-lg border-gray-200/20">
                {/* OBJECT: About me (name, age, etc...) */}
                <Card className="bg-transparent backdrop-blur-lg border-gray-200/20">
                    <CardHeader>
                        <div className="flex justify-center items-center">
                            <Image src="/photo.jpeg" width={90} height={90} className="rounded-md" alt="face photo" />
                            <div className="flex flex-col ml-4 gap-1">
                                {/* OBJECT: Photo */}
                                <div className="font-bold text-3xl text-slate-900">
                                    鈴木 拓海
                                    <span className="ml-2 text-sm">
                                        {/* TODO: 年齢を動的にする */}
                                        ({age})
                                    </span>
                                </div>
                                {/* OBJECT: Career */}
                                <div className="text-slate-700 text-xs">
                                    {/* TODO: 経歴は動的にする */}
                                    システムエンジニア({career}) - 東京都
                                </div>
                            </div>
                        </div>
                        </CardHeader>
                    </Card>
                <CardContent>
                    {/* OBJECT: Self introduction */}
                    <div className="pt-6 text-sm tracking-wide leading-relaxed text-slate-900">
                        一個人が作るWebサービスでも全世界に影響を与えられる規模感に感動し、プライベートの時間でもWebサービスを作っています。<br />
                        新しい技術に触れることも好きです。<br />
                        しかし、Webサービスを作る際に新しい技術を使おうとするが故にサービスの開発速度が遅くなることが弱点です。
                    </div>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

const getCurrentYearsSince = (year: number, month: number, day: number): string => {
    const startDate = new Date(year, month - 1, day);
    const now = new Date();
    const years = now.getFullYear() - startDate.getFullYear();

    return `${years}`;
};

const getCurrentYearsAndMonthsSince = (year: number, month: number, day: number): string => {
    const startDate = new Date(year, month - 1, day);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return `${years}年${months}ヶ月`;
};
