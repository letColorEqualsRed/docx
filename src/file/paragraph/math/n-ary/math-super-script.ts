// http://www.datypic.com/sc/ooxml/e-m_sup-3.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";

@RegisterXmlComponent("MathSuperScriptElement")
export class MathSuperScriptElement extends XmlComponent {
    constructor(children: MathComponent[]) {
        super("m:sup");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
