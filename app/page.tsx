import Contact from "@/components/contact";
import Hobby from "@/components/hobby";
import SelfIntroduction from "@/components/selfIntroduction";
import SkillSet from "@/components/skillSet";

export default function Home() {
  return (
    <>
    {/* OBJECT: Self introduction */}
    <div className="h-screen flex items-center w-2/3 mx-auto">
      <SelfIntroduction />
    </div>

    {/* OBJECT: Skill set */}
    <div className="py-16 min-h-screen">
      <div className="w-full flex">
        {/* OBJECT: Title */}
        <div className="w-full flex justify-center border-r border-slate-100/30 items-center">
          {/* <div className="font-semibold text-slate-200 text-4xl">スキルセット</div> */}
          <div className="font-semibold text-slate-200 text-4xl border-x border-slate-100/30 px-6 py-2">スキルセット</div>
        </div>
        {/* OBJECT: Content */}
        {/* <div className="w-full"> */}
        <div className="w-full">
          <SkillSet />
        </div>
      </div>
    </div>

    {/* OBJECT: Hobby */}
    <div className="py-16 min-h-screen">
      <div className="w-full flex">
        {/* OBJECT: Content */}
        <div className="w-full flex items-center">
          <Hobby />
        </div>
        {/* OBJECT: Title */}
        <div className="w-full flex justify-center border-l border-slate-100/30 items-center min-h-screen">
          <div className="font-semibold text-slate-200 text-4xl border-x border-slate-100/30 px-6 py-2">趣味</div>
        </div>
      </div>
    </div>

    {/* OBJECT: Contact */}
    <div className="mx-10 mt-20 py-16 border-t border-slate-100/30">
      <div className="flex justify-center">
          <div className="font-semibold text-slate-200 text-4xl border-x border-slate-100/30 px-6 py-2">コンタクト</div>
      </div>
      {/* 連絡先 */}
      <Contact />
    </div>
    

    </>
  )
}
