import Link from "next/link";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/container";
import { buttonVariants } from "./ui/button";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m</h3>
                <h1 className="text-4xl font-bold mb-3">Alejandro 👨‍💻</h1>
                <h2 className="text-2xl text-gray-400">Full Stack Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link href="#contact" className={buttonVariants()}>
                            <Mail className="mr-2" /> Contacta conmigo
                        </Link>
                        <Link href="/cv-alejandro.pdf" 
                            className={buttonVariants({ variant: 'secondary' })} target="_blank">
                            <Paperclip className="mr-2" /> Descargar CV
                        </Link>
                    </div>
                </div>
                {/* Ajustamos las clases de la imagen */}
                <Image 
                    className="mt-4 rounded-full mx-auto" // Centrado horizontal
                    src="/me.jpg" 
                    alt="Profile pic" 
                    width={200} 
                    height={200} 
                />
            </div>
        </Container>
    );
}

export default Introduction;
