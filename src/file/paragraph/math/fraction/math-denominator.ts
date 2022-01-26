import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";

@RegisterXmlComponent("MathDenominator")
export class MathDenominator extends XmlComponent {
    constructor(children: MathComponent[]) {
        super("m:den");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
