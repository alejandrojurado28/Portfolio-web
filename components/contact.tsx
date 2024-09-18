import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
            <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo 👋" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact.map(({ id, icon, title, subtitle, link }) => (
                        <div key={id} className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4">
                            {icon}
                            <p>{title}</p>
                            <p>{subtitle}</p>
                            <Link href={link} target="_blank">
                                Enviar mensaje
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
 
export default Contact;