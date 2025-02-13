import { CNPJ } from "./cnpj";
import { ValidadorDocAPI } from "./types/index";

const getValidadorDocImpl = (): ValidadorDocAPI => ({
  CNPJ: new CNPJ(),
});

(function (global: any) {
  var namespace = global["VALIDADOR_DOC_CUSTOM_NAMESPACE"] || "ValidadorDoc";
  if (global[namespace]) {
    console.warn(
      '[validador-doc] Encontrado outro objeto global chamado "ValidadorDoc". Defina ou atualize VALIDADOR_DOC_CUSTOM_NAMESPACE para um valor exclusivo.'
    );
    return;
  }
  global[namespace] = {};
  global[namespace].get = getValidadorDocImpl;
})(typeof window !== "undefined" ? window : globalThis);

export const useValidadorDoc = getValidadorDocImpl;
