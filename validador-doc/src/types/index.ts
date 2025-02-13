export interface CNPJ {
  /**
   * Verifica se o CNPJ é válido.
   * @param cnpj
   */
  isValid(cnpj: string): boolean;
}

export interface ValidadorDocAPI {
  CNPJ: CNPJ;
}
