import { IMediaData, IMediaDataTransformation } from "file/media";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

import { GraphicData } from "./graphic-data";

class GraphicAttributes extends XmlAttributeComponent<{
    readonly a: string;
}> {
    protected readonly xmlKeys = {
        a: "xmlns:a",
    };
}

@RegisterXmlComponent("Graphic")
export class Graphic extends XmlComponent {
    private readonly data: GraphicData;

    constructor(mediaData: IMediaData, transform: IMediaDataTransformation) {
        super("a:graphic");
        this.root.push(
            new GraphicAttributes({
                a: "http://schemas.openxmlformats.org/drawingml/2006/main",
            }),
        );

        this.data = new GraphicData(mediaData, transform);

        this.root.push(this.data);
    }
}
