export interface Schema {
  /**
   * The name of the component.
   */
  name: string;

  /**
   * HTTP methods
   */
  methods: string[];

  /**
   * The path to create the effect.
   */
  path?: string;
}
