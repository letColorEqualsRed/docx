// http://www.datypic.com/sc/ooxml/e-m_radPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { MathDegreeHide } from "./math-degree-hide";

@RegisterXmlComponent("MathRadicalProperties")
export class MathRadicalProperties extends XmlComponent {
    constructor(hasDegree: boolean) {
        super("m:radPr");

        if (!hasDegree) {
            this.root.push(new MathDegreeHide());
        }
    }
}
