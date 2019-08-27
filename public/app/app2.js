import { Person } from "./models/person.js";
import { decorate } from "./utils/decorate.js";
import { logExecutionTime, inspectMethod } from "./models/decorators.js";

const person = new Person("Flávio", "Almeida");

person.speak("Cangaceiro Javascritpt");
