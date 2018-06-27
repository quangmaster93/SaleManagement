import Network from "./Network";

export class ScheduleApi {

    static async getScheduleDetail(scheduleId: string) {
        let path = `/Schedule/ScheduleDetail/${scheduleId}`

        let res = await Network.get(path);
        return res;
    }
}