import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";

@RegisterXmlComponent("MathNumerator")
export class MathNumerator extends XmlComponent {
    constructor(children: MathComponent[]) {
        super("m:num");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
