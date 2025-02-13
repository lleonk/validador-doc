# ✅ Validador Doc

Este pacote fornece validação para números de documentos.

## 📦 Instalação

```bash
npm install validador-doc
```

## 🚀 Uso

Exemplo de validação de CNPJ em um projeto `Vue`:

```javascript
import { useValidadorDoc } from "validador-doc";

const { CNPJ } = useValidadorDoc();
const cnpj = "12.345.678/0001-95";
const isValid = cnpjValidator.isValid(cnpj);
```

## 🌐 Uso no Browser

Adicione o script diretamente ao seu HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/validador-doc/dist/index.global.js"></script>
```

Ou para uma versão específica:

```html
<script src="https://cdn.jsdelivr.net/npm/validador-doc@0.0.3/dist/index.global.js"></script>
```

Exemplo de uso:

```html
<input type="text" id="cnpj" placeholder="Digite o CNPJ" />
<button onclick="validarCnpj()">Validar</button>

<script>
  const { CNPJ } = ValidadorDoc.get();

  function validarCnpj() {
    const valor = document.getElementById("cnpj").value;
    alert(CNPJ.isValid(valor) ? "✅ CNPJ válido!" : "❌ CNPJ inválido!");
  }
</script>
```

## 📄 API

### **`CNPJ`**

#### `isValid(cnpj: string): boolean`

Verifica se o CNPJ é válido.

- **cnpj** (string): O CNPJ a ser validado.
- **Retorno**: `true` se o CNPJ for válido, `false` caso contrário.

## License

MIT
