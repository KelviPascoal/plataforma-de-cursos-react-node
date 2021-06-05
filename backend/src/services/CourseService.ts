import { CouserRepository } from "../repositories/CouseRepository";

export const CouseService = {
  async findAll() {
    const cousers = await CouserRepository.findAll();
    return cousers;
  },

  async findOneCouser(id: string) {
    const couser = await CouserRepository.findOneCouser(id);
    return couser;
  },

  async create(couserCreate: any) {
    const couserCreated = await CouserRepository.create(couserCreate);
    return couserCreated;
  },

  async update(couserUpdate: any, id: string) {
    const couserUpdated = await CouserRepository.update(couserUpdate, id);
    return couserUpdated;
  },

  async switchOff( id: string) {
    await CouserRepository.switchOff(id);
  },
};
