// http://www.datypic.com/sc/ooxml/e-m_r-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathText } from "./math-text";

@RegisterXmlComponent("MathRun")
export class MathRun extends XmlComponent {
    constructor(text: string) {
        super("m:r");

        this.root.push(new MathText(text));
    }
}
