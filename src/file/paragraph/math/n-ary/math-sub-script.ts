// http://www.datypic.com/sc/ooxml/e-m_sub-3.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";

@RegisterXmlComponent("MathSubScriptElement")
export class MathSubScriptElement extends XmlComponent {
    constructor(children: MathComponent[]) {
        super("m:sub");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
