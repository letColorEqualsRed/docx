import { IMediaData, IMediaDataTransformation } from "file/media";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { GraphicDataAttributes } from "./graphic-data-attribute";
import { Pic } from "./pic";

@RegisterXmlComponent("GraphicData")
export class GraphicData extends XmlComponent {
    private readonly pic: Pic;

    constructor(mediaData: IMediaData, transform: IMediaDataTransformation) {
        super("a:graphicData");

        this.root.push(
            new GraphicDataAttributes({
                uri: "http://schemas.openxmlformats.org/drawingml/2006/picture",
            }),
        );

        this.pic = new Pic(mediaData, transform);

        this.root.push(this.pic);
    }
}
