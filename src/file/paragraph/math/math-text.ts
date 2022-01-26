import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("MathText")
export class MathText extends XmlComponent {
    constructor(text: string) {
        super("m:t");

        this.root.push(text);
    }
}
