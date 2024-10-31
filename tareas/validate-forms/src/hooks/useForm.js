import { useState } from "react";

export const useForms = () => {
    const [form, setForm] = useState(ValorDefecto);
    const [errores, serErrores] = useState({});
    const [cargado, setCargando] = useState(false)


    const manejadorCambios = (element) => {
        const { name, value } = element.target;
        setForm({
            ...form,
            [name]: value
        })

        console.log(form)
    };

    const maejadorSalidaInput = (element) => {
        manejadorCambios(element)
        serErrores(validaciones(form))
    }

    const enviarFormulario = (element) => {
        element.preventDefault();
        serErrores(validaciones(form))

        if (Object.keys(errores).length === 0) {
            setCargando(true)
            try {
                const status = axios.post('/api/falsa/usuario',{
                    body: form
                })
                if (status === 201) {
                    console.log('se ha guardado exitosamente')
                    setCargando(false)
                }else{
                    return
                }
            } catch (error) {
                console.log('ocurrio un error al guardar')
            }
        } else {
            return;
        }
    }


    return {
        form,
        errores,
        cargado,
        manejadorCambios,
        maejadorSalidaInput,
        enviarFormulario
    };
};