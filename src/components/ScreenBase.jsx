import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import _ from 'lodash';
import { sleep } from '../helpers/operations';

const initArray = [8, 5, 2, 4, 6, 1, 3, 7];

const ScreenBase = ({metodoSort,title}) => {

    const createGraph = (nextArray) => {
        return {
            labels: nextArray,
            datasets: [
                {
                    label: 'Números',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 2,
                    data: nextArray
                }
            ]
        }
    }
    const [numeroAdd, setNumeroAdd] = useState(0);
    const [listaDeNumeros, setListaDeNumeros] = useState([...initArray]);
    const [barra, setBarra] = useState(createGraph([...listaDeNumeros]));

    const updateGraphAwait = async (A) => {
        setBarra(createGraph(A));
        await sleep(200);
    }

    const updateGraph = (A) => {
        setBarra(createGraph(A));
    }

    const handleClickButton = () => {
        metodoSort([...listaDeNumeros],updateGraphAwait);
    }

    const handleClickClean = () => {
        setListaDeNumeros(initArray);
        updateGraph([...initArray]);
    }

    const handleInputChange = ({ target }) => {
        setNumeroAdd(target.value)
    }

    const handeClickAddNumber = () => {
        setListaDeNumeros([...listaDeNumeros, parseInt(numeroAdd)])
        updateGraph([...listaDeNumeros, parseInt(numeroAdd)]);
    }

    const handleClickDesordenar = () => {
        let listaDesordenada = _.shuffle([...listaDeNumeros]);
        setListaDeNumeros([...listaDesordenada])
        updateGraph([...listaDesordenada]);
    }

    return (
        <div className="text-center m-5">
            <h1 className="text-4xl">{title}</h1>
            <div className="mt-5 ">
                <input
                    className="border-2 p-1"
                    type="number"
                    onChange={handleInputChange}
                    value={numeroAdd}
                />
                &nbsp;
                <button
                    className="p-1.5 boton-verde w-32"
                    type="button"
                    onClick={handeClickAddNumber}
                >
                    Añadir
                </button>
            </div>
            <button
                onClick={handleClickDesordenar}
                type="button"
                className="mt-2 boton-gris p-1.5 w-32"
            >
                Desordenar
            </button>
            <div className="mt-2 w-3/5 mx-auto">
                <Bar
                    data={barra}
                    options={{
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        animation: {
                            duration: 0
                        }
                    }}
                />
            </div>
            <button
                type="button"
                className="mb-5 mt-2 boton-azul p-1.5 w-32"
                onClick={handleClickButton}
            >
                Ordenar
            </button>
            &nbsp;
            <button
                type="button"
                className="mb-5 mt-2 boton-azul p-1.5 w-32"
                onClick={handleClickClean}
            >
                Limpiar
            </button>
        </div>
    )
}

export default ScreenBase;
