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

  /**
   * Components — `array`
   *
   *
   */
  components?: Array<SanityKeyedReference<SanityType_pocketInterview>>;
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

/**
 * Pocket interview
 *
 *
 */
export interface SanityType_pocketInterview extends SanityDocument {
  _type: "pocketInterview";

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

  /**
   * Thumbnail text — `text`
   *
   * This text has a limit of 280 characters.
   */
  thumbnailText?: string;

  /**
   * Thumbnail image — `image`
   *
   *
   */
  thumbnailImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * alt — `string`
     *
     *
     */
    alt?: string;
  };
}

export type Documents =
  | SanityType_seo
  | SanityType_mainMenu
  | SanityType_page
  | SanityType_homepage
  | SanityType_about
  | SanityType_pocketInterview;
