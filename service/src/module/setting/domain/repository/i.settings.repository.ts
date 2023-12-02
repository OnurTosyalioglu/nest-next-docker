import {SettingsEntity} from "../entity/settings.entity";

export interface ISettingsRepository {
	findAll(query: any): Promise<Array<SettingsEntity>>; 
	find(query: any): Promise<SettingsEntity>; 
	findById(query: any): Promise<SettingsEntity>; 
	create(settings: SettingsEntity): Promise<SettingsEntity>; 
	update(settings: SettingsEntity): Promise<SettingsEntity>; 
	removeById(query: any): Promise<boolean>; 
}
