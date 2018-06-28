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

    static async changePassword(oldpassword: string,newpassword: string,confirmpassword: string) {
        let data = {
            oldpassword,
            newpassword,
            confirmpassword
        };
        console.log(data);
        let res = await Network.post("/account/changepassword", data);
        console.log(res);
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

    static async getUserInfo() {
        let res = await Network.get("/account/getUserInfo");
        return res;
    }

    static async getUserSchedule(page: number = 1, size: number = 10, getAll: boolean = false, from: string = "", to: string = "") {
        let path = `/Schedule/GetUserSchedule?page=${page}&offset=${size}&getAll=${getAll.toString()}&from=${from}&to=${to}`
        console.log(path);
        let res = await Network.get(path);
        return res;
    }
}