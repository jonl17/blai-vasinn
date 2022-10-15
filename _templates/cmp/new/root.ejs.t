---
inject: true
to: src/components/index.ts
append: true
skip_if: <%=h.inflection.classify(name)%>
---
export { default as <%=h.inflection.classify(name)%> } from "./<%=h.inflection.classify(name)%>"