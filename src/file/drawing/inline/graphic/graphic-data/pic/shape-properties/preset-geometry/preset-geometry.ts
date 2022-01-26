// http://officeopenxml.com/drwSp-prstGeom.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { AdjustmentValues } from "./adjustment-values/adjustment-values";
import { PresetGeometryAttributes } from "./preset-geometry-attributes";

@RegisterXmlComponent("PresetGeometry")
export class PresetGeometry extends XmlComponent {
    constructor() {
        super("a:prstGeom");

        this.root.push(
            new PresetGeometryAttributes({
                prst: "rect",
            }),
        );

        this.root.push(new AdjustmentValues());
    }
}
