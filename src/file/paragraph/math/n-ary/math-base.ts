// http://www.datypic.com/sc/ooxml/e-m_e-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";

@RegisterXmlComponent("MathBase")
export class MathBase extends XmlComponent {
    constructor(children: MathComponent[]) {
        super("m:e");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
