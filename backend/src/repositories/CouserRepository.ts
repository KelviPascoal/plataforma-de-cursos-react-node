import { CouserModel } from "../models/CouserModel"

export const CouserRepository = {
    async findAll() {
        const cousers = await CouserModel.find().sort('name');
        return cousers;
    },

    async findOneCouser(id: string) {
        const couser = await CouserModel.findOne({_id: id});
        return couser;
    },

    async create(couserCreate: any) {
        const couserCreated = await CouserModel.create(couserCreate);
        return couserCreated;
    },

    async update(couserUpdate: any, id: string) {
        const couserUpdated = await CouserModel.findOneAndUpdate({_id: id}, couserUpdate);
        return couserUpdated;
    },

    async switchOff(id: string) {
        await CouserModel.deleteOne({_id: id});
    }
}