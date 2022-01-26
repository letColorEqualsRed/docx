import { IRunStylePropertiesOptions, RunProperties } from "file/paragraph/run/properties";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("RunPropertiesDefaults")
export class RunPropertiesDefaults extends XmlComponent {
    constructor(options?: IRunStylePropertiesOptions) {
        super("w:rPrDefault");

        this.root.push(new RunProperties(options));
    }
}
