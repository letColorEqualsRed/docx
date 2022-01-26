// http://www.datypic.com/sc/ooxml/e-m_oMath-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "./math-component";

export interface IMathOptions {
    readonly children: MathComponent[];
}

@RegisterXmlComponent("Math")
export class Math extends XmlComponent {
    constructor(options: IMathOptions) {
        super("m:oMath");

        for (const child of options.children) {
            this.root.push(child);
        }
    }
}
