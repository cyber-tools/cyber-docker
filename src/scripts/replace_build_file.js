import fs from "fs";
import path from "path";
import { promisify } from "util";
import { test_build_scripts_file_path, prod_build_scripts_file_path } from "@/configs/commons";

export async function replace_build_file({ IMAGE_NAME }) {
  const test_build_scripts_content = await promisify(fs.readFile)(test_build_scripts_file_path, "utf-8");
  const test_after_replace_content = test_build_scripts_content.replace("TEST_IMAGE_NAME_PLACEHOLDER", `test-${IMAGE_NAME}`);
  await promisify(fs.writeFile)(test_build_scripts_file_path, test_after_replace_content, "utf-8");

  const prod_build_scripts_content = await promisify(fs.readFile)(prod_build_scripts_file_path, "utf-8");
  const prod_after_replace_content = prod_build_scripts_content.replace("PROD_IMAGE_NAME_PLACEHOLDER", `${IMAGE_NAME}`);
  await promisify(fs.writeFile)(prod_build_scripts_file_path, prod_after_replace_content, "utf-8");
};