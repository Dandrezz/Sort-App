import React from 'react';
import ScreenBase from './ScreenBase';

const InserSortScreen = () => {

    const insertSort = async(A,updateGraphAwait) => {
        
        for (let j = 0; j < A.length; j++) {
            let key = A[j];
            let i = j- 1;
            while (i >=0 && A[i] > key) {
                A[i+1] = A[i]
                A[i] = key
                await updateGraphAwait(A);
                i =  i - 1
            }
            A[i+1]=key
            await updateGraphAwait(A);
        }

    }

    return (
        <ScreenBase 
            title="Insert Sort"
            metodoSort={insertSort}
        />
    )
}

export default InserSortScreen
