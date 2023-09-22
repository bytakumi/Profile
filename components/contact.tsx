import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Link from 'next/link';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';


export default function Contact() {
    return (
        <>
        <div className="flex justify-center md:pt-8">
            <div className="grid grid-cols-4 gap-6">
                <div className="text-5xl md:text-6xl text-slate-200">
                    <Link href="https://github.com/ibnr2hc" target="_blank">
                        <FaGithubSquare />
                    </Link>
                </div>
                <div className="text-5xl md:text-6xl text-slate-200">
                    <Link href="https://www.instagram.com/suzuki__takumi/" target="_blank">
                        <FaInstagramSquare />
                    </Link>
                </div>
                <div className="text-5xl md:text-6xl text-slate-200">
                    <Link href="https://www.linkedin.com/in/takumi-suzuki/" target="_blank">
                        <FaLinkedin />
                    </Link>
                </div>
                <div className="text-5xl md:text-6xl text-slate-200">
                    <Popover>
                        <PopoverTrigger>
                            <RiMailFill />
                        </PopoverTrigger>
                        <PopoverContent side="right">
                            <span className="text-slate-800 flex justify-center">ibnr2hc@gmail.com</span>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
        </>
    )
}
