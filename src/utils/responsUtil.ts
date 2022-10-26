export const responseToJSONHandler = (res: Response): Promise<JSON> | never => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error(res.statusText)
    }
}