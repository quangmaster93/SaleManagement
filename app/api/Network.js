import { ResponseModel } from "../models/ResponseModel";

export default class Network {
    static endpoint = "https://salerouters.xinkciti.com/api";
    static token="";
    static async get(path, callBack, endpoint) {
        try {
            endpoint = endpoint || Network.endpoint;
            let response = await fetch(endpoint + path, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Network.token}`,
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                let responseJson: ResponseModel = await response.json();
                return responseJson;
            }

            return null;
        } catch (error) {
            console.error(error);
            return null;
        }

    }

    static async post(path, data, callBack, contentType, endpoint) {
        try {
            endpoint = endpoint || Network.endpoint;
            let response = await fetch(endpoint + path, {
                method: "post",
                headers: {
                    "Content-Type": contentType || "application/json",
                    "Authorization": `Bearer ${Network.token}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                let responseJson: ResponseModel = await response.json();
                return responseJson;
            }

            console.log(response.statusText);
            return null;
        } catch (error) {
            console.error(error);
            return null;
        };
    }
}

