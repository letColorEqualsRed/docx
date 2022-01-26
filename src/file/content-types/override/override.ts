import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { OverrideAttributes } from "./override-attributes";

@RegisterXmlComponent("Override")
export class Override extends XmlComponent {
    constructor(contentType: string, partName?: string) {
        super("Override");

        this.root.push(
            new OverrideAttributes({
                contentType: contentType,
                partName: partName,
            }),
        );
    }
}
