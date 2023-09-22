import Contact from "@/components/contact";
import Hobby from "@/components/hobby";
import SelfIntroduction from "@/components/selfIntroduction";
import SkillSet from "@/components/skillSet";

export default function Home() {
  return (
    <>
    {/* OBJECT: Self introduction */}
    <div className="h-screen flex items-center px-4 md:px-0 md:w-2/3 mx-auto">
      <SelfIntroduction />
    </div>

    {/* OBJECT: Skill set */}
    <div className="py-16 md:min-h-screen">
      <div className="w-full flex flex-col md:flex-row">
        {/* OBJECT: Title */}
        <div className="w-full flex justify-center border-r border-slate-100/30 items-center pb-20 md:pb-0">
          <div className="font-semibold text-slate-200 text-4xl">スキルセット</div>
        </div>
        {/* OBJECT: Content */}
        <div className="w-full">
          <SkillSet />
        </div>
      </div>
    </div>

    {/* OBJECT: Hobby */}
    <div className="py-32 md:py-16 md:min-h-screen">
      <div className="w-full flex flex-col md:flex-row">
        {/* OBJECT: Title */}
        <div className="w-full flex justify-center items-center pb-20 md:pb-0 md:min-h-screen">
          <div className="font-semibold text-slate-200 text-4xl">趣味</div>
        </div>
        {/* OBJECT: Content */}
        <div className="w-full flex items-center border-l border-slate-100/30">
          <Hobby />
        </div>
      </div>
    </div>

    {/* OBJECT: Contact */}
    <div className="mx-10 md:mt-20 py-16 border-0 md:border-t border-slate-100/30">
      <div className="flex justify-center pb-20 md:pb-0">
          <div className="font-semibold text-slate-200 text-4xl">コンタクト</div>
      </div>
      {/* 連絡先 */}
      <Contact />
    </div>
    

    </>
  )
}
