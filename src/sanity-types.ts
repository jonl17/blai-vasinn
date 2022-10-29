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
export interface SanityType_seo extends SanityDocument {
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
export interface SanityType_mainMenu extends SanityDocument {
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
       * Page — `reference`
       *
       *
       */
      page?: SanityReference<SanityType_homepage | SanityType_page>;
    }>
  >;
}

/**
 * Page
 *
 *
 */
export interface SanityType_page extends SanityDocument {
  _type: "page";

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
}

/**
 * Homepage
 *
 *
 */
export interface SanityType_homepage extends SanityDocument {
  _type: "homepage";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;
}

/**
 * About
 *
 *
 */
export interface SanityType_about extends SanityDocument {
  _type: "about";

  /**
   * Text — `array`
   *
   *
   */
  text?: Array<SanityKeyed<SanityBlock>>;
}

export type Documents =
  | SanityType_seo
  | SanityType_mainMenu
  | SanityType_page
  | SanityType_homepage
  | SanityType_about;
