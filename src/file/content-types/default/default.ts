import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { DefaultAttributes } from "./default-attributes";

@RegisterXmlComponent("Default")
export class Default extends XmlComponent {
    constructor(contentType: string, extension?: string) {
        super("Default");

        this.root.push(
            new DefaultAttributes({
                contentType: contentType,
                extension: extension,
            }),
        );
    }
}
