export interface Schema {
  /**
   * The name of the project.
   */
  name: string;

  /**
   * The directory of the project.
   */
  directory?: string;

  /**
   * Run npm install at init.
   */
  skipInstall?: boolean;

  /**
   * Initialize git.
   */
  skipGit?: boolean;

  /**
   * Make an initial commit with generated files.
   */
  commit?: boolean;
}
