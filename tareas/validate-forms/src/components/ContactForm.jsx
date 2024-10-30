import React from "react";
import { useForms } from "../hooks/useForm";


const valorDefecto = {
    nombre: "",
    email: "",
    tel: "",
    informacion: "",
    extra: "",

}


const ContactForm = () => {
    const { form, manejadorCambios } = useForms(valorDefecto)

    const enviarFormulario = () => {
        console.log("enviando Formulario... ");

        return (
            <>
                <h1>Formulario de contacto</h1>
                <form onSubmit={enviarFormulario}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Escribe Aquí tu nombre"
                        required
                        value={form.nombre}
                        onChange={manejadorCambios}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Escribe Aquí tu email"
                        required
                        value={form.email}
                        onChange={manejadorCambios}
                    />
                    <input
                        type="number"
                        name="tel"
                        placeholder="Escribe Aquí tu número de contacto"
                        required
                        value={form.tel}
                        onChange={manejadorCambios}
                    />
                    <input
                        type="text"
                        name="informacion"
                        placeholder="Escribe Aquí qué habilidades puedes aportarnos"
                        required
                        value={form.informacion}
                        onChange={manejadorCambios}
                    />
                    <tarea
                        name="extra"
                        placeholder="Escribe Aquí"
                        required
                        cols={30}
                        rows={5}
                        value={form.extra}
                        onChange={manejadorCambios}
                    />
                    <input type="submit" value="subir" />
                </form>
            </>
        );
    };

    export default ContactForm;
