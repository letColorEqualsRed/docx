import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

class FillRectangle extends XmlComponent {
    constructor() {
        super("a:fillRect");
    }
}

@RegisterXmlComponent("Stretch")
export class Stretch extends XmlComponent {
    constructor() {
        super("a:stretch");
        this.root.push(new FillRectangle());
    }
}
