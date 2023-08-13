export const isValidArray = (arr: any[], checkIfArrayHasItems: any) => {
    const isArray = arr && Array.isArray(arr);
    const hasItems = checkIfArrayHasItems ? isArray && arr.length > 0 : true;

    return Boolean(isArray && hasItems) ? "Heyy Boolean" : "No way !!!";
}