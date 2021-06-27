# memo, useMemo
Antes de fazer renderização, faz comparação se as propriedades e estados são iguais

# memo
Quando usar:
  1. Pure Functional Components
  2. Renders too often
  3. Re-renders with same props
  4. Medium to big sizes

# useMemo
Quando usar:
  1. Evitar re-cálculos complexos
  2. Resolver problemas de igualdade referêncial

# useCallback
  Quando usar:
  1. Resolver problemas de igualdade referêncial

# memo, useMemo, useCallback

Shallow Compare -> Comparação rasa

if(oldTitle === newTitle) {
  // Não renderiza
  return false
} else {
  // Entra no fluxo de renderização
  return true
}