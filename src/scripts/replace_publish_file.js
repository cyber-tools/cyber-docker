import fs from "fs";
import path from "path";
import { promisify } from "util";
import { test_publish_scripts_file_path, prod_publish_scripts_file_path } from "@/configs/commons";

export async function replace_publish_file({ REGISTRY, IMAGE_NAME }) {
  const test_publish_scripts_content = await promisify(fs.readFile)(test_publish_scripts_file_path, "utf-8");
  const after_replace_test_content = test_publish_scripts_content
    .replace("TEST_IMAGE_NAME_PLACEHOLDER", `test-${IMAGE_NAME}`)
    .replace("REGISTRY/TEST_IMAGE_NAME_PLACEHOLDER", `${REGISTRY}/test-${IMAGE_NAME}`);
  await promisify(fs.writeFile)(test_publish_scripts_file_path, after_replace_test_content, "utf-8");

  const prod_publish_scripts_content = await promisify(fs.readFile)(prod_publish_scripts_file_path, "utf-8");
  const after_replace_prod_content = prod_publish_scripts_content
    .replace("PROD_IMAGE_NAME_PLACEHOLDER", `prod-${IMAGE_NAME}`)
    .replace("REGISTRY/PROD_IMAGE_NAME_PLACEHOLDER", `${REGISTRY}/${IMAGE_NAME}`);
  await promisify(fs.writeFile)(prod_publish_scripts_file_path, after_replace_prod_content, "utf-8");
};