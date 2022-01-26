import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { PicLocksAttributes } from "./pic-locks-attributes";

@RegisterXmlComponent("PicLocks")
export class PicLocks extends XmlComponent {
    constructor() {
        super("a:picLocks");
        this.root.push(
            new PicLocksAttributes({
                noChangeAspect: 1,
                noChangeArrowheads: 1,
            }),
        );
    }
}
