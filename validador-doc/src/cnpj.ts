export class CNPJ implements CNPJ {
  private readonly tamanhoDV = 2;
  private readonly regexCNPJ = /^([A-Z\d]){12}(\d){2}$/;
  private readonly regexMask = /[./-]/g;
  private readonly baseUnicode = "0".charCodeAt(0);
  private readonly weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  private ensureValidFormat(cnpj: string) {
    const raw = this.unmask(cnpj);
    if (!this.regexCNPJ.test(raw)) {
      throw new Error();
    }
  }

  isValid(cnpj: string) {
    try {
      this.ensureValidFormat(cnpj);
      const current = cnpj.slice(-this.tamanhoDV);
      const expected = this.calculaDV(cnpj);
      return current === expected && expected.length === 2;
    } catch (e: any) {
      return false;
    }
  }

  private calculaDV(cnpj: string) {
    try {
      this.ensureValidFormat(cnpj);
      const raw = this.unmask(cnpj.slice(0, -this.tamanhoDV));
      let sumDv1 = 0;
      let sumDv2 = 0;
      for (let i = 0; i < raw.length; i++) {
        const numEquivalent = raw.charCodeAt(i) - this.baseUnicode;
        sumDv1 += numEquivalent * this.weights[i + 1];
        sumDv2 += numEquivalent * this.weights[i];
      }
      const dv1 = sumDv1 % 11 < 2 ? 0 : 11 - (sumDv1 % 11);
      sumDv2 += dv1 * this.weights[raw.length];
      const dv2 = sumDv2 % 11 < 2 ? 0 : 11 - (sumDv2 % 11);
      return `${dv1}${dv2}`;
    } catch {
      return "";
    }
  }

  private unmask(cnpj: string) {
    return cnpj.replace(this.regexMask, "");
  }
}
