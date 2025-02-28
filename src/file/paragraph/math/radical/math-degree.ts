// http://www.datypic.com/sc/ooxml/e-m_deg-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { MathComponent } from "../math-component";

@RegisterXmlComponent("MathDegree")
export class MathDegree extends XmlComponent {
    constructor(children?: MathComponent[]) {
        super("m:deg");

        if (!!children) {
            for (const child of children) {
                this.root.push(child);
            }
        }
    }
}
