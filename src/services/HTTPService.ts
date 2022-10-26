const httpHeaders = {
    "Content-Type": "applicattion/json"
}

export default class HTTPService {
    static async get(url: string, headers?: any) {
        return await fetch(url, {
            headers: { ...httpHeaders, ...headers }
        });
    }
}