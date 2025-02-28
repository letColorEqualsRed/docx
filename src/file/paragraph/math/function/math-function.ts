// http://www.datypic.com/sc/ooxml/e-m_func-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";
import { MathBase } from "../n-ary";
import { MathFunctionName } from "./math-function-name";
import { MathFunctionProperties } from "./math-function-properties";

export interface IMathFunctionOptions {
    readonly children: MathComponent[];
    readonly name: MathComponent[];
}

@RegisterXmlComponent("MathFunction")
export class MathFunction extends XmlComponent {
    constructor(options: IMathFunctionOptions) {
        super("m:func");

        this.root.push(new MathFunctionProperties());
        this.root.push(new MathFunctionName(options.name));
        this.root.push(new MathBase(options.children));
    }
}
