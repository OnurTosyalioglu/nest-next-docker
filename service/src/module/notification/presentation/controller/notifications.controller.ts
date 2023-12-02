import {Body, Controller, Delete, Get, HttpStatus, NotImplementedException, Param, Post, Put, Query, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import {NotificationsService} from "../../application/service/notifications.service";
import {NotificationsEntity} from "../../domain/entity/notifications.entity";

@Controller('notifications')
export class NotificationsController {
	constructor(
		private readonly service: NotificationsService,
	) {}

	@Get()
	async get(
		@Req() req: Request,
		@Res() res: Response,
		@Body() body,
		@Param() param,
		@Query() query,
	): Promise<Response> {
		try {
			const result = await this.service.findAll(query)

			return res.status(HttpStatus.OK).json(result)
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	@Get(':id')
	async getById(
		@Req() req: Request,
		@Res() res: Response,
		@Body() body,
		@Param() param,
		@Query() query,
	): Promise<Response> {
		try {
			const result = await this.service.find({ _id: param.id })

			return res.status(HttpStatus.OK).json(result)
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	@Post()
	async post(
		@Req() req: Request,
		@Res() res: Response,
		@Body() body,
		@Param() param,
		@Query() query,
	): Promise<Response> {
		try {
			const result = await this.service.create(body)

			return res.status(HttpStatus.OK).json(result)
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	@Put(':id')
	async put(
		@Req() req: Request,
		@Res() res: Response,
		@Body() body,
		@Param() param,
		@Query() query,
	): Promise<Response> {
		try {
			const result = await this.service.update({ _id: param.id, ...body })

			return res.status(HttpStatus.OK).json(result)
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	@Delete(':id')
	async delete(
		@Req() req: Request,
		@Res() res: Response,
		@Body() body,
		@Param() param,
		@Query() query,
	): Promise<Response> {
		try {
			const result = await this.service.removeById({ _id: param.id })

			return result ? 
				res.status(HttpStatus.OK).json({ message: 'Record successfully deleted' }) :
				res.status(HttpStatus.OK).json({ message: 'Record not found' })
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}
}
