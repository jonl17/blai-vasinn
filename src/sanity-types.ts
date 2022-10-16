import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * SEO
 *
 *
 */
export interface Seo extends SanityDocument {
  _type: "seo";

  /**
   * Site title — `string`
   *
   *
   */
  site_title?: string;

  /**
   * Site description — `text`
   *
   *
   */
  site_description?: string;
}

/**
 * Main menu
 *
 *
 */
export interface MainMenu extends SanityDocument {
  _type: "mainMenu";

  /**
   * Name — `string`
   *
   *
   */
  menuName?: string;

  /**
   * Items — `array`
   *
   *
   */
  menuItems?: Array<
    SanityKeyed<{
      /**
       * Label — `string`
       *
       *
       */
      label?: string;
    }>
  >;
}

export type Documents = Seo | MainMenu;
