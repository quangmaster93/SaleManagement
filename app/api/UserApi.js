import Network from "./Network";

export class UserApi {
    static async getToken(userName: string, password: string) {
        let data = {
            username: userName,
            password: password
        };

        let res = await Network.post("/oauth2/token", data);

        return res;
    }
    static async resetPassword(email: string) {
        let data = {
            email
        };
        console.log(data);
        let res = await Network.post("/account/resetpassword", data);

        return res;
    }
}