import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Trabajos recientes 🧑‍💼" />

            <div className="grid md:cols-3 gap-14 mt-4">
                {dataPortfolio.map(({ id, title, image, urlGithub, urlDemo }) => (
                    <div key={id}>
                        <h3 className="text-xl mb-4">{title}</h3>
                        <Image 
                            src={image} 
                            alt="Image" 
                            width={1200} height={1200} className="rounded-2xl w-full" 
                        />

                        <div className="mt-5 flex gap-5">
                            <Link 
                                className={buttonVariants({ variant: "outline" })} 
                                href={ urlGithub }
                                target="_blank"
                            >
                                Github
                            </Link>

                            <Link 
                                className={buttonVariants()} 
                                href={ urlDemo }
                                target="_blank"
                            >
                                Live demo
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Portfolio;