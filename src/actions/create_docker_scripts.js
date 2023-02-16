import fs from "fs";
import { green } from "colors";
import { promisify } from "util";
import pathExists from "path-exists";
// import {Argument,Option} from "commander";

import { docker_scripts_folder, target_docker_scripts_folder } from "@/configs/commons";

import { replace_build_file } from "@/scripts/replace_build_file";
import { replace_publish_file } from "@/scripts/replace_publish_file";
import { update_jsonfile } from "@/scripts/update_jsonfile";

import { input_text } from "@/utils/input_text";

// export const test_command_argument=new Argument("<actions>","动作类型描述").choices(["init","info"]);
// export const test_command_option=new Option("-t,--test_option <string>").default("test_option_value");

export async function create_docker_scripts() {
  /** 创建构筑和发布脚本 **/
  if (await pathExists(target_docker_scripts_folder)) {
    console.log(target_docker_scripts_folder, green("已经存在,不需要进行复制"));
    process.exit(0);
  };

  const REGISTRY = await input_text({ required: true, description: "请输入要发布的镜像源", message: "镜像源必须填写!" });
  const IMAGE_NAME = await input_text({ required: true, description: "请输入项目名称", message: "项目名称必须填写!" });

  await promisify(fs.cp)(docker_scripts_folder, target_docker_scripts_folder, { recursive: true });
  await replace_build_file({ IMAGE_NAME });
  await replace_publish_file({ REGISTRY, IMAGE_NAME });
  console.log(target_docker_scripts_folder, green("创建成功!"));
  await update_jsonfile();
};