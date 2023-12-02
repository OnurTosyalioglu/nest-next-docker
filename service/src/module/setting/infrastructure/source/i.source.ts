export interface ISource {
	findAll(query: any): Promise<Array<any>>; 
	find(query: any): Promise<any>; 
	findById(query: any): Promise<any>; 
	create(settings: any): Promise<any>; 
	update(data: any): Promise<any>; 
	removeById(query: any): Promise<boolean>; 
}
