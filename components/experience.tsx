import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

const Experience = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title="Experiencia" subtitle="Skills que tengo" />

            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {dataExperience.map(({ id, title, experience }) => (
                    <div key={id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl">{title}</h3>
                        <div className="grid md:grid-col-2 gap-4">
                            {experience.map(({ name, subtitle, value }) => (
                                <div key={name} className="my-4">
                                    <p className="flex gap-2 mb-2">
                                        <BadgeCheck />{name}
                                    </p>
                                    <p className="text-gray-400 mb-2">{subtitle}</p>
                                    <Progress value={value} className="w-[60%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Experience;