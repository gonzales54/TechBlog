import { join } from "path";
import { cwd } from "process";

import ManagerClass from "./manager";

const path = join(cwd(), "src", "contents", "articles");

const Manager = new ManagerClass(path);

export default Manager;
