export interface ISource {
	findAll(query: any): Promise<any>;
	find(query: any): Promise<any>;
	findById(query: any): Promise<any>;
	create(data: any): Promise<any>;
	update(data: any): Promise<any>;
	removeById(query: any): Promise<any>;
}
