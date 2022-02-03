import React from 'react';
import {
    Link
} from "react-router-dom";
const HomeScreen = () => {
    return (
        <div className="flex h-screen home-screen">
            <div className="m-auto grid gap-4 grid-cols-3">
                <Link to="/heapsort" className="boton-verde w-40 h-40 p-1 flex ">
                    <div className="m-auto font-bold text-xl">
                        HeapSort
                    </div>
                </Link>
                <Link to="/quicksort" className="boton-azul w-40 h-40 p-1 flex">
                    <div className="m-auto font-bold text-xl">
                        QuickSort
                    </div>
                </Link>
                <Link to="/insertsort" className="boton-gris w-40 h-40 p-1 flex">
                    <div className="m-auto font-bold text-xl">
                        InsertSort
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomeScreen;
