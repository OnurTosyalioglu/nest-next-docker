import {Injectable} from "@nestjs/common";
import * as Iyzipay from 'iyzipay'
import { config } from '../../../../config/iyzipay.config'

@Injectable()
export class IyzipayService {
	iyzipay: any;

	constructor() {
		this.iyzipay = new Iyzipay(config.credentials)
	}

	async subscriptionProductCreate(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionProduct.create(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionProductUpdate(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionProduct.update(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionProductDelete(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionProduct.delete(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionProductRetrieve(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionProduct.retrieve(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionProductRetrieveList(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionProduct.retrieveList(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionPricingPlanCreate(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionPricingPlan.create(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionPricingPlanUpdate(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionPricingPlan.update(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionPricingPlanDelete(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionPricingPlan.delete(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionPricingPlanRetrieve(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionPricingPlan.retrieve(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionPricingPlanRetrieveList(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionPricingPlan.retrieveList(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCustomerCreate(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCustomer.create(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCustomerUpdate(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCustomer.update(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCustomerRetrieve(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCustomer.retrieve(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCustomerRetrieveList(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCustomer.retrieveList(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCardUpdate (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCard.update(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCardUpdateWithSubscriptionReferenceCode (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCard.updateWithSubscriptionReferenceCode(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionPaymentRetry (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscription.retry(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCancel (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscription.cancel(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionActivate (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscription.activate(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionUpgrade (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscription.upgrade(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionRetrieve (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscription.retrieve(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionSearch(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscription.search(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCheckoutFormInitialize (request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCheckoutForm.initialize(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionCheckoutFormRetrieve(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionCheckoutForm.retrieve(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}

	async subscriptionExistingCustomerInitialize(request: any): Promise<any> {
		return new Promise ((resolve, reject) => {   
			this.iyzipay.subscriptionExistingCustomer.initialize(request, (err: any, result: any) => {  
				if (err) {
					reject(err)
				}
				resolve(result)
			})
		})
	}
}
