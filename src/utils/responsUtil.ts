export const responseToJSONHandler = (res: Response) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error(res.statusText)
    }
}