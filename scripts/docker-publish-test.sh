SHELL_FOLDER="$(cd "$(dirname "$0")";pwd)";
PROJECT_FOLDER="$(cd $SHELL_FOLDER; cd ../../; pwd)";

IMAGE_NAME="test-my-first-project";
TAGD_PROJECT_NAME="18058173171/test-my-first-project";

docker rmi -f $PROJECT_NAME;
docker rmi -f $PROJECT_NAME $TAGD_PROJECT_NAME;
docker build -t $PROJECT_NAME .;
docker tag $PROJECT_NAME "$TAGD_PROJECT_NAME:latest";
docker push $TAGD_PROJECT_NAME;