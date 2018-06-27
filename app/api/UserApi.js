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

    static async getUserSchedule(page: number = 1, size: number = 10, getAll: boolean = false, from: string = "", to: string = "") {
        let path = `/Schedule/GetUserSchedule?page=${page}&offset=${size}&getAll=${getAll.toString()}&from=${from}&to=${to}`
        console.log(path);
        let res = await Network.get(path);
        return res;
    }
}