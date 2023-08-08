export const useMyCustomHook = (url) => {
    const data = url;
    const error = "no error"
    const loading = true
    return { data, error, loading };
}
