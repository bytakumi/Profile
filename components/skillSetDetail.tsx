import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export type SkillProps = {
    categoryName: string,  // Category name (Language, Infra, etc...)
    skillDetailList: SkillDetailProps[],  // Skill detail list
}

export type SkillDetailProps = {
    name: string,  // Skill name
    star: number,  // Skill level (1 ~ 5)
}

export default function SkillSetDetail({ categoryName, skillDetailList }: SkillProps) {
    return (
        <>
        <div className="flex justify-center flex-col md:w-3/5 mx-auto">
            {/* OBJECT: Category (Language, Infra, etc...) */}
            <div className="border-b borer-slate-100/20 pb-1 mb-4 flex justify-center w-4/5 mx-auto">
                <div className="px-2 text-slate-100 text-base font-bold">
                    {categoryName}
                </div>
            </div>

            {/* OBJECT: Skill (Python, TypeScript, etc...) */}
            <div>
                {skillDetailList.map((v) => skillDetail({ name: v.name, star: v.star}))}
            </div>
        </div>
        </>
    )
}

function skillDetail({ name, star }: SkillDetailProps) {
    const outlineStarNumber = 5 - star;
    return (
        <>
        <div className="flex w-full justify-center">
            <div className="w-full flex items-center justify-end">
                {range(1, star).map((_, i) => 
                    <span key={i} className="text-amber-300"><AiFillStar /></span>
                )}
                {range(1, outlineStarNumber).map((_, i) => 
                    <span key={i} className="text-amber-300/30"><AiOutlineStar /></span>
                )}
            </div>
            <div className="w-full text-left pl-4 text-slate-100">{name}</div>
        </div>
        </>
    )
}

// Generate array from start to end. e.g. range(1, 5) => [1, 2, 3, 4, 5]
export const range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);
