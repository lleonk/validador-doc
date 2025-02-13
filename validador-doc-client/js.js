const { CNPJ } = _ValidadorDoc.get();

function ValidarCnpj() {
  const v = document.getElementById("cnpj").value;
  alert(CNPJ.isValid(v));
}
