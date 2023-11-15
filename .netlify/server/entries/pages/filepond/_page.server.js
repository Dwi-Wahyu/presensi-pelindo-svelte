import { log } from "console";
const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    log(formData.fileToUpload);
  }
};
export {
  actions
};
