import path from "path";
import pathExists from "path-exists";
import { readFile, writeFile } from "jsonfile";

import {
  test_build_scripts_file_path,
  test_publish_scripts_file_path,
  prod_build_scripts_file_path,
  prod_publish_scripts_file_path
} from "@/configs/commons";

export async function update_jsonfile() {
  const package_jsonfile_path = path.resolve(process.cwd(), "./package.json");

  if (!await pathExists(package_jsonfile_path)) {
    console.log("不存在package.json");
    return false;
  };

  const package_jsonfile_content = await readFile(package_jsonfile_path);

  package_jsonfile_content.scripts["docker:build:test"] = `sh ${path.relative(process.cwd(), test_build_scripts_file_path)}`;
  package_jsonfile_content.scripts["docker:publish:test"] = `sh ${path.relative(process.cwd(), test_publish_scripts_file_path)}`;

  package_jsonfile_content.scripts["docker:build:prod"] = `sh ${path.relative(process.cwd(), prod_build_scripts_file_path)}`;
  package_jsonfile_content.scripts["docker:publish:prod"] = `sh ${path.relative(process.cwd(), prod_publish_scripts_file_path)}`;

  await writeFile(package_jsonfile_path, package_jsonfile_content, { spaces: 2, EOL: '\r\n' });
  console.log("package.json", "脚本已更新!");
};