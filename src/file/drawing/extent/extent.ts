import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { ExtentAttributes } from "./extent-attributes";

@RegisterXmlComponent("Extent")
export class Extent extends XmlComponent {
    private readonly attributes: ExtentAttributes;

    constructor(x: number, y: number) {
        super("wp:extent");

        this.attributes = new ExtentAttributes({
            cx: x,
            cy: y,
        });

        this.root.push(this.attributes);
    }
}
