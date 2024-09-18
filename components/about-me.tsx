import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mí" subtitle="Conóceme" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="mt-1 h-[200px]">
                            {dataSlider.map(({ id, url }) => (
                                <CarouselItem key={id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={url} 
                                            alt="Image" 
                                            width={250} 
                                            height={400} 
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    {/* <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map(({ id, icon, name, description }) => (
                            <div key={id} className="border border-white-10 rounded-xl p-4 shadow-md
                            shadow-slate-100 dark:bg-slate-800">
                                {icon}
                                <p className="my-2">{name}</p>
                                <p className="text-gray-400">{description}</p>
                            </div>
                        ))}
                    </div> */}
                    <p className="my-8">
                        Después de terminar mis estudios del Ciclo Formativo de
                        Grado Superior de Desarrollo de Aplicaciones Web, afronto
                        una nueva etapa en la que deseo introducirme en el mundo
                        laboral y poner a prueba mis conocimientos y habilidades
                        adquiridos en el sector del desarrollo web. Espero así poder
                        aprender de futuros compañeros además de seguir
                        formándome para superarme y ser cada día mejor,
                        deseando así en un futuro poder influir sobre futuras
                        personas y compañeros que iré encontrando por el camino.
                        Soy una persona que le gusta ponerse objetivos tanto a corto
                        como a largo plazo, proponerme retos y proyectos para así,
                        adquirir disciplina y constancia siendo cada día mejor y
                        aprendiendo siempre algo nuevo
                    </p>

                    {/* <Button>
                        <Phone size={20} className="mr-2" />Hablamos
                    </Button> */}
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;