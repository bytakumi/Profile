import SkillSetDetail, { SkillProps } from "./skillSetDetail"

const skills: SkillProps[] = [
    {
        categoryName: "バックエンド",
        skillDetailList: [
            {
                name: "Python",
                star: 5,
            }, {
                name: "Nodejs",
                star: 4,
            }, {
                name: "Django",
                star: 3,
            }, {
                name: "Flask",
                star: 3,
            }, {
                name: "tRPC",
                star: 2,
            }, {
                name: "Go",
                star: 2,
            },
        ]
    }, {
        categoryName: "フロントエンド",
        skillDetailList: [
            {
                name: "HTML5",
                star: 4,
            }, {
                name: "CSS3",
                star: 4,
            }, {
                name: "TypeScript",
                star: 4,
            }, {
                name: "Nextjs",
                star: 3,
            }, {
                name: "TailwindCSS",
                star: 3,
            }, {
                name: "React",
                star: 2,
            }, {
                name: "Bulma",
                star: 2,
            }, {
                name: "shadcn/ui",
                star: 2,
            },
        ]
    }, {
        categoryName: "インフラ",
        skillDetailList: [
            {
                name: "AWS Lambda",
                star: 4,
            }, {
                name: "AWS S3",
                star: 4,
            }, {
                name: "Docker",
                star: 4,
            }, {
                name: "AWS APIGateway",
                star: 3,
            }, {
                name: "AWS EC2",
                star: 3,
            }, {
                name: "AWS Batch",
                star: 3,
            }, {
                name: "Vercel",
                star: 3,
            }, {
                name: "AWS EventBridge",
                star: 3,
            }, {
                name: "AWS CloudWatch",
                star: 3,
            }, {
                name: "GitHub Actions",
                star: 3,
            }
        ]
    }, {
        categoryName: "データベース",
        skillDetailList: [
            {
                name: "MySQL",
                star: 4,
            }, {
                name: "PostgreSQL",
                star: 4,
            },
            {
                name: "AWS DynamoDB",
                star: 3,
            }
        ]
    }, {
        categoryName: "その他",
        skillDetailList: [
            {
                name: "GitHub",
                star: 5,
            }, {
                name: "ドメイン駆動開発",
                star: 4,
            }, {
                name: "スクラム開発",
                star: 4,
            }, {
                name: "Swagger",
                star: 4,
            }, {
                name: "RESTful API",
                star: 4,
            }
        ]
    }
]

export default function SkillSet() {
    return (
        <>
        <div className="flex justify-center flex-col gap-8 leading-relaxed">
            {skills.map((skill, i) => {
                return (
                    <div key={i}>
                        <SkillSetDetail categoryName={skill.categoryName} skillDetailList={skill.skillDetailList} />
                    </div>
                )
            })}
        </div>
        </>
    )
}
