import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { NonVisualPropertiesAttributes } from "./non-visual-properties-attributes";

@RegisterXmlComponent("NonVisualProperties")
export class NonVisualProperties extends XmlComponent {
    constructor() {
        super("pic:cNvPr");

        this.root.push(
            new NonVisualPropertiesAttributes({
                id: 0,
                name: "",
                descr: "",
            }),
        );
    }
}
