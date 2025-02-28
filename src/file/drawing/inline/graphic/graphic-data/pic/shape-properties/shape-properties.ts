// http://officeopenxml.com/drwSp-SpPr.php
import { IMediaDataTransformation } from "file/media";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { Form } from "./form";
// import { NoFill } from "./no-fill";
// import { Outline } from "./outline/outline";
import { PresetGeometry } from "./preset-geometry/preset-geometry";
import { ShapePropertiesAttributes } from "./shape-properties-attributes";

@RegisterXmlComponent("ShapeProperties")
export class ShapeProperties extends XmlComponent {
    private readonly form: Form;

    constructor(transform: IMediaDataTransformation) {
        super("pic:spPr");

        this.root.push(
            new ShapePropertiesAttributes({
                bwMode: "auto",
            }),
        );

        this.form = new Form(transform);

        this.root.push(this.form);
        this.root.push(new PresetGeometry());
        // this.root.push(new NoFill());
        // this.root.push(new Outline());
    }
}
