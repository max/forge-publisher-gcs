import {
  type PredefinedAcl,
  type StorageOptions,
  type UploadOptions,
} from "@google-cloud/storage";

export interface PublisherGCSConfig {
  /**
   * Options passed into the `Storage` client constructor.
   * See https://cloud.google.com/nodejs/docs/reference/storage/latest/storage/storage for full reference.
   */
  storageOptions: StorageOptions;
  /**
   * The name of the Google Cloud Storage bucket where artifacts are uploaded.
   */
  bucket?: string;
  /**
   * The key prefix where artifacts are uploaded, e.g., `my/prefix`.
   *
   * Defaults to the application `version` specified in the app's `package.json`.
   */
  folder?: string;
  /**
   * Apply a predefined set of access controls to this object.
   */
  predefinedAcl?: PredefinedAcl;
  /**
   * Whether to make uploaded artifacts public to the internet.
   * Alias for config.predefinedAcl = 'publicRead'.
   */
  public?: boolean;
  /**
   * Whether to make uploaded artifacts private.
   * Alias for config.predefinedAcl = 'private'.
   */
  private?: boolean;
  /**
   * Custom function to provide the key to upload a given file to
   */
  keyResolver?: (fileName: string, platform: string, arch: string) => string;
  /**
   * Custom metadata to apply to the uploaded object.
   */
  metadata?: UploadOptions["metadata"];
}
