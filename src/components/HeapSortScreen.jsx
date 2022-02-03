import React from 'react';
import { swap } from '../helpers/operations';
import ScreenBase from './ScreenBase';

const HeapSortScreen = () => {

    const heapify = async (A, n, i, updateGraphAwait) => {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        if (l < n && A[l] > A[largest]) largest = l;
        if (r < n && A[r] > A[largest]) largest = r;
        if (largest !== i) {
            swap(A, i, largest);
            await updateGraphAwait(A);
            await heapify(A, n, largest, updateGraphAwait);
        }
    }

    const heapSort = async (A, updateGraphAwait) => {
        let n = A.length;
        for (let i = Math.floor(n / 2) - 1; i >= -1; --i) {
            await heapify(A, n, i, updateGraphAwait);
        }

        for (let i = n - 1; i >= 0; --i) {
            swap(A, i, 0);
            await updateGraphAwait(A);
            await heapify(A, i, 0, updateGraphAwait);
        }

    }

    return (
        <ScreenBase
            title="Heap Sort"
            metodoSort={heapSort}
        />
    )
}

export default HeapSortScreen
