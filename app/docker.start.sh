docker build -t $1-next-app-image .
docker run --rm -p 3000:3000 --name $1-next-app-container $1-next-app-image
docker stop $1-next-app-container
