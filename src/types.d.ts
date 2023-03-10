export interface Guild {
  name: string;
  cover: string;
  issues: Issue;
}

interface Issue {
  [key as string]: IssueData;
}

interface IssueData {
  type: "text" | "imageUrl";
  value: string;
}

interface Media {
  /* The MIME type for the media */
  media_type: string;
  /* The URL link for the media */
  media_url: string;
  /* Alternative text when media can't be rendered */
  alt_tag?: string;
  /* The preview image for the media */
  preview_image_url?: string;
}

interface Attribute {
  /* Field indicating how you would like it to be displayed */
  /* optional if the trait_type is string */
  display_type?: string;
  /* Name of the trait */
  trait_type: string;
  /* Value of the trait */
  value: string | number;
}

interface EssenceMetadata {
  /* ~~ REQUIRED ~~ */
  /* Unique id for the issued item */
  metadata_id: string;

  /* Version of the metadata schema used for the issued item. Only support 1.0.0 for now. */
  version: string;

  /* Id of the application under which the items are being minted. */
  app_id: string;

  /* ~~ OPTIONAL ~~ */
  /* Language of the content as a BCP47 language tag. */
  lang?: string;

  /* Creation time of the item as ISO 8601. */
  issue_date?: string;

  /* The content associated with the item */
  content?: string;

  /* Media refers to any image, video, or any other MIME type attached to the content.
    Limited to max. 10 media objects. */
  media?: Media[];

  /* Field indicating the tags associated with the content. Limited to max. 5 tags. */
  tags?: string[];

  /* ~~ OPENSEA (optional) ~~ */
  /* URL to the image of the item. */
  image?: string;

  /* SVG image data when the image is not passed. Only use this if you're not
    including the image parameter. */
  image_data?: string;

  /* Name of the item. */
  name?: string;

  /* Description of the item. */
  description?: string;

  /* URL to a multi-media attachment for the item. */
  animation_url?: string;

  /* Attributes for the item. */
  attributes?: Attribute[];

  /* URL to the item on your site. */
  external_url?: string;
}

export interface Content {
  title: string;
  body: string;
  author: string; // The ccProfile handle of the author
}

export type PublishResponse = {
  status: Status;
  contentID: string;
  arweaveTxHash: string;
  tsInServer: number;
};

export enum Status {
  SUCCESS,
  INVALID_PARAMS,
  RATE_LIMITED,
  HANDLE_NOT_FOUND,
  CONTENT_NOT_FOUND,
  TARGET_NOT_FOUND,
  NOT_PROFILE_OWNER,
  ALREADY_EXISTED,
  INVALID_MESSAGE,
  INVALID_SIGNATURE,
  MESSAGE_EXPIRED,
  INVALID_SIGNING_KEY,
}
