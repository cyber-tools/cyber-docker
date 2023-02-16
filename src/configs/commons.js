import path from "path";
import { program } from "commander";

program.option("-c,--config <string>", "配置文件路径", "./.defaultrc.js");

export const custmer_runtime_config_path = path.join(process.cwd(), program.opts().config);
export const default_runtime_config_path = path.resolve(__dirname, "../configs/default_runtime_config.js");


export const docker_scripts_folder = path.resolve(__dirname, "../../statics/scripts/");

export const target_docker_scripts_folder = path.resolve(process.cwd(), "./docker/");

export const test_build_scripts_file_path = path.resolve(target_docker_scripts_folder, "./docker-build-test.sh");
export const prod_build_scripts_file_path = path.resolve(target_docker_scripts_folder, "./docker-build-prod.sh");

export const test_publish_scripts_file_path = path.resolve(target_docker_scripts_folder, "./docker-publish-test.sh");
export const prod_publish_scripts_file_path = path.resolve(target_docker_scripts_folder, "./docker-publish-prod.sh");

