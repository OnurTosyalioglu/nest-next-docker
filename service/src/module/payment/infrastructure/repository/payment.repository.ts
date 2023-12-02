import { Inject, Injectable, NotImplementedException } from "@nestjs/common";
import { PaymentEntity } from "../../domain/entity/payment.entity";
import { IPaymentRepository } from "../../domain/repository/i.payment.repository";
import { PaymentLocalSource } from "../source/payment.local.source";
import { PaymentRemoteSource } from "../source/payment.remote.source";

@Injectable()
export class PaymentRepository implements IPaymentRepository {
  constructor(
    private readonly remote: PaymentRemoteSource,
    private readonly local: PaymentLocalSource,
  ) {}

  async findAll(query: any): Promise<Array<PaymentEntity>> {
    try {
      const result = await this.local.findAll(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async find(query: any): Promise<PaymentEntity> {
    try {
      const result = await this.local.find(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<PaymentEntity> {
    try {
      const result = await this.local.findById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(user: PaymentEntity): Promise<PaymentEntity> {
    try {
      const result = await this.local.create(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(user: PaymentEntity): Promise<PaymentEntity> {
    try {
      const result = await this.local.update(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async removeById(query: any): Promise<boolean> {
    try {
      const result = await this.local.removeById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }
}

