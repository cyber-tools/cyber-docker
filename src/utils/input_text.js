import colors from "colors";
import prompt from "prompt";
import { promisify } from "util";


export async function input_text({ required, description, message }) {
  try {
    prompt.message = undefined;
    prompt.delimiter = ":";
    prompt.start();
    const { input_text } = await promisify(prompt.get)([{
      required: required,
      name: "input_text",
      message: colors.red(message),
      description: colors.white(description)
    }]);
    return input_text;
  } catch (error) {
    if (error.message === "canceled") {
      process.exit(0);
    };
    throw error;
  };
};