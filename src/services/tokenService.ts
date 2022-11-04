import { responseToJSONHandler } from "../utils/responsUtil";
import HTTPService from "./HTTPService";

export default class TokenService {
    static async createToken(email: string, password: string) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/jwt/create/", {
            email, password
        })
            .then(responseToJSONHandler)
    }

    static async verifyToken(token: string) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/jwt/verify/", {
            token
        })
            .then(responseToJSONHandler)
    }

    static async updateAccessToken(token: string) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/jwt/refresh/", {
            refresh: token
        })
            .then(responseToJSONHandler)
    }
}