// http://www.datypic.com/sc/ooxml/e-m_radPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("MathFunctionProperties")
export class MathFunctionProperties extends XmlComponent {
    constructor() {
        super("m:funcPr");
    }
}
