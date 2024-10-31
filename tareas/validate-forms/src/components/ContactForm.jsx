import React from "react";
import { useForms } from "../hooks/useForm";


const valorDefecto = {
    nombre: "",
    email: "",
    tel: "",
    informacion: "",
    extra: "",
};

const validaciones = () => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
    let regexComments = /^.{1,255}$/;

    let erroresFormulario = {}

    if (!form.nombre.trim()) {
        erroresFormulario.nombre = "no puedes dejar este campo vacio"
    }
    if (!form.email.trim()) {
        erroresFormulario.email = "no puedes dejar este campo vacio"
    } else if (!regexEmail.test(form.nombre.trim())) {
        erroresFormulario.email = "no reconoce el correo"
    }
    if (!form.tel.trim()) {
        erroresFormulario.tel = "no puedes dejar este campo vacio"
    }
    if (!form.informacion.trim()) {
        erroresFormulario.informacion = "no puedes dejar este campo vacio"
    }
    if (!form.extra.trim()) {
        erroresFormulario.extra = "no puedes dejar este campo vacio"
    } else if (!regexComments.test(form.extra.trim())) {
        erroresFormulario.extra = "este campo debe tener min 1 caracter y max 255"
    }

    return erroresFormulario

}

const ContactForm = () => {
    const { form, errores, cargado, manejadorCambios, maejadorSalidaInput, enviarFormulario } = useForms(valorDefecto, validaciones)
}


return (
    <>
        <h1>Formulario de contacto</h1>
        <form onSubmit={enviarFormulario}>
            <p>nombre</p>
            <input
                type="text"
                name="nombre"
                placeholder="Escribe Aquí tu nombre"
                required
                value={form.nombre}
                onChange={manejadorCambios}
                onBlur={maejadorSalidaInput}
            />
            {errores.nombre && <p className="p-error">{errores.nombre}</p>}
            <p>email</p>
            <input
                type="email"
                name="email"
                placeholder="Escribe Aquí tu email"
                required
                value={form.email}
                onChange={manejadorCambios}
                onBlur={maejadorSalidaInput}
            />
            {errores.email && <p className="p-error">{errores.email}</p>}
            <p>number</p>
            <input
                type="number"
                name="tel"
                placeholder="Escribe Aquí tu número de contacto"
                required
                value={form.tel}
                onChange={manejadorCambios}
                onBlur={maejadorSalidaInput}
            />
            {errores.email && <p className="p-error">{errores.email}</p>}
            <p>informacion</p>
            <input
                type="text"
                name="informacion"
                placeholder="Escribe Aquí qué habilidades puedes aportarnos"
                required
                value={form.informacion}
                onChange={manejadorCambios}
                onBlur={maejadorSalidaInput}
            />
            {errores.informacion && <p className="p-error">{errores.informacion}</p>}
            <p>extra</p>
            <tarea
                name="extra"
                placeholder="Escribe Aquí"
                required
                cols={30}
                rows={5}
                value={form.extra}
                onChange={manejadorCambios}
                onBlur={maejadorSalidaInput}
            />
            {errores.extra && <p className="p-error">{errores.extra}</p>}
            <input type="submit" value="subir" disabled={cargado} className={cargado ? 'deshabilitado' : ''}/>
        </form>
        {cargado &&  <Loader/>}
    </>
);
export default ContactForm;
