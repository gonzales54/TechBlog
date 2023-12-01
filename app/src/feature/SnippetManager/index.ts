import { join } from "path";
import { cwd } from "process";

import ManagerClass from "../Manager/manager";

const path = join(cwd(), "src", "contents", "snippets");

const Manager = new ManagerClass(path);

export default Manager;
