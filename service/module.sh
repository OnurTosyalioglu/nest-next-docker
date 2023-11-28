mkdir -p src/module/
mkdir -p src/module/$1/presentation/
mkdir -p src/module/$1/presentation/controller
mkdir -p src/module/$1/presentation/pipe
mkdir -p src/module/$1/presentation/middleware

mkdir -p src/module/$1/application/
mkdir -p src/module/$1/application/service
mkdir -p src/module/$1/application/dto
mkdir -p src/module/$1/application/usecase

mkdir -p src/module/$1/domain/
mkdir -p src/module/$1/domain/event
mkdir -p src/module/$1/domain/entity
mkdir -p src/module/$1/domain/valueobject
mkdir -p src/module/$1/domain/repository

mkdir -p src/module/$1/infrastructure/
mkdir -p src/module/$1/infrastructure/queue
mkdir -p src/module/$1/infrastructure/repository
mkdir -p src/module/$1/infrastructure/source
mkdir -p src/module/$1/infrastructure/dao
