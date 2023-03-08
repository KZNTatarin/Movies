export const generateRandomId = (maxNumber) => {
    const randomId = Math.floor(Math.random() * maxNumber);
    return randomId;
}