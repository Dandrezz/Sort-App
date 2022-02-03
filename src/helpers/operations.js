export const swap = (A, i, j) => {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}