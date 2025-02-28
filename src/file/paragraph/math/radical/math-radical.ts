// http://www.datypic.com/sc/ooxml/e-m_rad-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";
import { MathBase } from "../n-ary";
import { MathDegree } from "./math-degree";
import { MathRadicalProperties } from "./math-radical-properties";

export interface IMathRadicalOptions {
    readonly children: MathComponent[];
    readonly degree?: MathComponent[];
}

@RegisterXmlComponent("MathRadical")
export class MathRadical extends XmlComponent {
    constructor(options: IMathRadicalOptions) {
        super("m:rad");

        this.root.push(new MathRadicalProperties(!!options.degree));
        this.root.push(new MathDegree(options.degree));
        this.root.push(new MathBase(options.children));
    }
}
