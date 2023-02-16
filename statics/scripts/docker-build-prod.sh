SHELL_FOLDER="$(cd "$(dirname "$0")";pwd)";
PROJECT_FOLDER="$(cd $SHELL_FOLDER; cd ../../; pwd)";

IMAGE_NAME="PROD_IMAGE_NAME_PLACEHOLDER";

docker rmi -f $IMAGE_NAME;
docker build -t $IMAGE_NAME .;
