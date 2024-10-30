import { useState } from "react";

export const useForms = () => {
    const [form, setForm] = useState(ValorDefecto);

    const manejadorCambios = (element) => {
        const { name, value } = element.target;
        setForm({
            ...form,
            [name]: value
        })

        console.log(form)
    };

    return {
        form,
        manejadorCambios
    };


};