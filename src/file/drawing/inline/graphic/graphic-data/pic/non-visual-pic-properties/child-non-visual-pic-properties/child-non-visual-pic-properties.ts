import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { PicLocks } from "./pic-locks/pic-locks";

@RegisterXmlComponent("ChildNonVisualProperties")
export class ChildNonVisualProperties extends XmlComponent {
    constructor() {
        super("pic:cNvPicPr");

        this.root.push(new PicLocks());
    }
}
