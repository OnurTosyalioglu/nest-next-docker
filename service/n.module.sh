echo "import {Module} from \"@nestjs/common\";
import {MongooseModule} from \"@nestjs/mongoose\";
import {$3Service} from \"./application/service/$2.service\";
import {$3, $3Scheme} from \"./infrastructure/dao/$2.dao\";
import {$3Repository} from \"./infrastructure/repository/$2.repository\";
import {$3LocalSource} from \"./infrastructure/source/$2.local.source\";
import {$3RemoteSource} from \"./infrastructure/source/$2.remote.source\";
import {$3Controller} from \"./presentation/controller/$2.controller\";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: $3.name,
				schema: $3Scheme,
			}
		]),
	],
	exports: [
		MongooseModule.forFeature([
			{
				name: $3.name,
				schema: $3Scheme,
			}
		]),
		$3Service,
		$3Repository,
		$3LocalSource,
		$3RemoteSource,
	],
	providers: [
		$3Service,
		$3Repository,
		$3LocalSource,
		$3RemoteSource,
	],
	controllers: [
		$3Controller,
	],
})
export class $3Module {}
" > ./src/module/$1/$2.module.ts
