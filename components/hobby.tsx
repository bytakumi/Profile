import { FaWalking } from 'react-icons/fa'
import { MdLibraryMusic, MdSportsHandball } from 'react-icons/md'

type HobbyProps = {
    content: string,  // Hobby content
    icon: any,  // Hobby icon
}

const hobbies: HobbyProps[] = [
    {
        content: "疲れた時の筋トレ",
        icon: <MdSportsHandball />,
    }, {
        content: "迷子になりそうな散歩",
        icon: <FaWalking />,
    }, {
        content: "あまり興味のない音楽のライブ",
        icon: <MdLibraryMusic />,
    }
]

export default function Hobby() {
    return (
        <>
        <div className="flex justify-center mx-auto text-slate-200">
            <div className="flex flex-col">
                <div className="font-bold text-2xl grid grid-cols-1 gap-4">
                    {hobbies.map((hobby, i) => {
                        return (
                            <div key={i} className="flex gap-2 items-center justify-center md:justify-start">{hobby.icon}{hobby.content}</div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
