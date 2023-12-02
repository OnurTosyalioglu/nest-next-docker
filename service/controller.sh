echo "import {
	Body, 
	Controller, 
	Get, 
	Param, 
	Req, 
	Res, 
	Query, 
	Put, 
	Delete, 
	NotImplementedException, 
	Post, 
	HttpStatus,
} from \"@nestjs/common\";
import {Request, Response} from \"express\";
import {$3Service} from \"../../application/service/$2.service\";

@Controller('$2')
export class $3Controller {
	constructor(
		private readonly service: $3Service,
	) {}

	@Get()
	async get(
		@Req() req: any,
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
		@Req() req: any,
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
		@Req() req: any,
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
		@Req() req: any,
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
		@Req() req: any,
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
" > ./src/module/$1/presentation/controller/$2.controller.ts
