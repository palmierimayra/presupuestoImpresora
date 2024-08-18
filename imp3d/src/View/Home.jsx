import React, { useState } from 'react';
import styles from "./home.module.css";

export default function Home() {
    const { home, h1 } = styles;

    const [values, setValues] = useState({
        grUsados: '',
        costoKilo: '',
        consumoImp: '',
        horas: '',
        costoLuz: '',
        desgaste: ''
    });

    const [costo, setCosto] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const calculateCosto = () => {
        const grUsados = parseFloat(values.grUsados) || 0;
        const costoKilo = parseFloat(values.costoKilo) || 0;
        const consumoImp = parseFloat(values.consumoImp) || 0;
        const horas = parseFloat(values.horas) || 0;
        const costoLuz = parseFloat(values.costoLuz) || 0;
        const desgaste = parseFloat(values.desgaste) || 0;

        const totalCosto = (grUsados * costoKilo) +
            (consumoImp * horas * costoLuz) * 
            (1 + desgaste / 100);
        setCosto(totalCosto);
    };

    return (
        <div className={home}>
            <h4>COSTO DE MATERIAL</h4>
            <label>Material utilizado (kg): </label>
            <input
                type="number"
                name="grUsados"
                value={values.grUsados}
                onChange={handleChange}
                step="any"
                placeholder="0"
            />
            <label>Costo ($/kg): </label>
            <input
                type="number"
                name="costoKilo"
                value={values.costoKilo}
                onChange={handleChange}
                step="any"
                placeholder="0"
            />
            <p></p>
            <h4>COSTO DE ENERGÍA</h4>
            <label>Consumo de la impresora (kWh): </label>
            <input
                type="number"
                name="consumoImp"
                value={values.consumoImp}
                onChange={handleChange}
                step="any"
                placeholder="0"
            />
            <label>Horas de impresión (hs): </label>
            <input
                type="number"
                name="horas"
                value={values.horas}
                onChange={handleChange}
                step="any"
                placeholder="0"
            />
            <label>Costo del kWh (Luz): </label>
            <input
                type="number"
                name="costoLuz"
                value={values.costoLuz}
                onChange={handleChange}
                step="any"
                placeholder="0"
            />
            <p></p>
            <h4>DESGASTE</h4>
            <label>% considerado: </label>
            <input
                type="number"
                name="desgaste"
                value={values.desgaste}
                onChange={handleChange}
                step="any"
                placeholder="0"
            />
            <div style={{ textAlign: 'center' }}>
                <button
                    className="btn btn-danger btn-sm p-1 m-3"
                    style={{ width: '125px', fontSize: '14px', fontWeight: 'bolder' }}
                    onClick={calculateCosto}
                >
                    CALCULAR COSTO
                </button>
            </div>
            <h3>COSTO TOTAL DE LA PIEZA</h3>
            <h1 className={h1}>$ {costo}</h1>
        </div>
    );
}
