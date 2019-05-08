export interface Schema {
  /**
   * The name of the effect.
   */
  name: string;

  /**
   * HTTP method for the effect.
   */
  method: string;

  /**
   * HTTP path for the effect.
   */
  path: string;

  /**
   * Wether route combination needs to be created along the effect.
   */
  createRouteCombination: boolean;

  /**
   * Append the effect to a specific route combination.
   */
  routeCombinationPath?: string;

  /**
   * The path to create the effect.
   */
  directory?: string;
}
