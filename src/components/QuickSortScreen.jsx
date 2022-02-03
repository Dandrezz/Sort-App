import React from 'react'
import { swap } from '../helpers/operations';
import ScreenBase from './ScreenBase'

const QuickSortScreen = () => {

    const quicksort = async (A, low, high, updateGraphAwait) => {

        if (low < high) {
            const pi = await partition(A, low, high, updateGraphAwait);
            await quicksort(A, low, pi - 1, updateGraphAwait);
            await quicksort(A, pi + 1, high, updateGraphAwait);
        }

    }

    const partition = async (A, low, high, updateGraphAwait) => {
        const pivot = A[high];
        let i = (low - 1);
        for (let j = low; j <= high - 1; j++) {
            if (A[j] < pivot) {
                i++;
                swap(A, i, j);
                await updateGraphAwait(A);
            }
        }
        swap(A, i + 1, high);
        await updateGraphAwait(A);
        return (i + 1);
    }

    const quicksortEjecucion = async(A, updateGraphAwait) => {
        await quicksort(A, 0, A.length-1, updateGraphAwait);
    }

    return (
        <ScreenBase
            title="Quick Sort"
            metodoSort={quicksortEjecucion}
        />
    )
}

export default QuickSortScreen
