import { program } from "commander";
import { name, version } from "@@/package.json";

import { create_docker_scripts } from "@/actions/create_docker_scripts";

program
  .usage(name)
  .version(version)

program
  .command("create", { isDefault: true })
  .description("创建Docker构筑相关的文件和文件夹")
  .action(create_docker_scripts);

program.parse();





