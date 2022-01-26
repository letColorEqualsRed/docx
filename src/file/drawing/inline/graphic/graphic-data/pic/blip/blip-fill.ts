import { IMediaData } from "file/media";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { Blip } from "./blip";
import { SourceRectangle } from "./source-rectangle";
import { Stretch } from "./stretch";

@RegisterXmlComponent("BlipFill")
export class BlipFill extends XmlComponent {
    constructor(mediaData: IMediaData) {
        super("pic:blipFill");

        this.root.push(new Blip(mediaData));
        this.root.push(new SourceRectangle());
        this.root.push(new Stretch());
    }
}
