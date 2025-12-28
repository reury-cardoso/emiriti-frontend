# 🎨 E-Miriti - Redesign 2026

## ✅ Modernização Completa Implementada

Este documento resume todas as mudanças implementadas no redesign do E-Miriti seguindo as tendências de design de 2026 e mantendo forte conexão com a identidade cultural amazônica.

---

## 🎯 Design System Implementado

### **Paleta de Cores**

```css
/* Primárias */
Verde Amazônia: #00A86B (botões, CTAs, destaques)
  - Hover: #2ECC71
  - Shadow: #008F5D
  - Light: #F0FFF4

Laranja Miriti: #FF6B35 (secundário, badges, acentos)
  - Gradient: #FFB84D
  - Light: #FFF5F0

/* Neutros */
Background: #FAFBFC
Cards: #FFFFFF
Texto Primário: #1A202C
Texto Secundário: #718096
Bordas: #E2E8F0

/* Utilitários */
WhatsApp: #25D366
```

### **Tipografia**

- **Fonte Principal**: Inter (400, 500, 600, 700)
- **Fonte Secundária**: Merriweather Sans (400, 500, 600)
- **Tamanhos**: Sistema escalado de 11px a 28px com line-height otimizado
- **Letter-spacing**: -0.01em a -0.02em para títulos

### **Espaçamento**

- **Sistema de Grid**: Base 8px
- **Padding de cards**: 16-24px
- **Espaçamento entre seções**: 32-48px (8/6 em unidades Tailwind)
- **Margens laterais**: 16px (w-[90%] no container)

### **Border Radius**

- **Cards de produto**: 12px (rounded-lg)
- **Botões**: 12px-24px (rounded-xl para principais)
- **Inputs**: 12px (rounded-xl)
- **Fotos de artesãos**: 50% (circular)
- **Badges**: 16px (rounded-xl, estilo pílula)

### **Shadows**

```css
card: '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)'
card-hover: '0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)'
float: '0 12px 40px rgba(0,0,0,0.12)'
amazonia: '0 4px 12px rgba(0,168,107,0.15)'
miriti: '0 4px 12px rgba(255,107,53,0.15)'
top: '0 -2px 12px rgba(0,0,0,0.08)'
```

---

## 🧩 Componentes Redesenhados

### **1. ToyCard (Cards de Produtos)**

✅ **Implementado:**

- Badge "Feito em Abaetetuba" no canto superior direito
- Imagem com hover scale effect (1.05x)
- Border-radius padronizado (12px)
- Botão "Ver mais" com ícone animado
- Modal redesenhado com:
  - Header com drag indicators
  - Botão fechar circular
  - Badge "Feito à mão"
  - Card do artesão integrado
  - Botão WhatsApp com cor oficial
  - Galeria com skeleton loading
  - Footer "Feito com ❤️ em Abaetetuba"

### **2. ProfileCard (Cards de Artesãos)**

✅ **Implementado:**

- Layout horizontal compacto
- Foto com overlay gradiente sutil
- Badge "Brinquedos de Miriti"
- Botão WhatsApp circular
- Botão "Ver perfil completo" estilo ghost
- Perfil modal com:
  - Foto com borda gradiente (verde → laranja)
  - Botões sociais coloridos (WhatsApp, Instagram, Facebook)
  - Grid de produtos com skeleton loading
  - Animações de entrada

### **3. SearchBar**

✅ **Implementado:**

- Estilo pílula completa (rounded-xl)
- Ícone verde quando focado
- Border animado com shadow focus
- Placeholder: "Buscar arte amazônica..."
- Altura padronizada (44px)

### **4. TabBar (Navegação Inferior)**

✅ **Implementado:**

- Ícones preenchidos quando ativos
- Indicador superior (barra verde 3px)
- Backdrop blur effect
- Transição bounce (cubic-bezier)
- Cor amazonia para estado ativo
- Shadow top sutil

### **5. Banners (Hero)**

✅ **Implementado:**

- Hero banner com gradiente verde
- Badge flutuante "Apoie o artesanato local"
- Conteúdo posicionado à esquerda
- Botão "Saiba Mais" branco com hover scale
- Padrão amazônico de fundo (opacidade 5%)
- Banners secundários com hover effects

### **6. Páginas**

#### **Home**

✅ Seções redesenhadas:

- Brinquedos (carousel)
- Mais Populares (grid 2 colunas)
- Artesãos (lista vertical)
- Sobre o Projeto (card com ícone e badge)

#### **Products**

✅ Implementado:

- Seção "Mais Populares" com carousel
- Grid 2 colunas para todos os produtos
- Skeleton loading personalizado
- Infinite scroll com spinner customizado

#### **Artisans**

✅ Implementado:

- Banner específico
- Lista vertical de artesãos
- Skeleton loading para cards
- Infinite scroll

#### **More**

✅ Implementado:

- Card "Sobre o Projeto" estilizado
- Seção "Fale Conosco" com botões coloridos
- Seção "Configurações" com toggles
- Footer com versão do app

---

## 🎭 Elementos Culturais Amazônicos

### **Padrões Sutis**

✅ Classe `.pattern-amazonia` implementada

- Usado em: Hero banners
- Opacidade: 3-5%
- Inspiração: Trançado de palha de miriti

### **Badges Culturais**

✅ Implementados:

- "Feito em Abaetetuba" (verde, 95% opacidade)
- "Feito à mão" (verde claro background)
- "Artesanato Sustentável" (verde com ícone)
- "Arte Tradicional" (laranja)
- "Brinquedos de Miriti" (verde claro)

### **Ícones e Ilustrações**

✅ SVG customizados para:

- Coração (sobre o projeto)
- Folha/camadas (sustentabilidade)
- WhatsApp
- Redes sociais

---

## ✨ Animações e Micro-interações

### **Implementadas:**

```css
/* Timing */
fade-in: 200ms ease-out
slide-up: 200ms ease-out (translateY 16px → 0)
scale-up: 150ms ease-out
shimmer: 1.5s linear infinite

/* Hover Effects */
Cards: scale(1.02) + shadow increase
Botões: scale(1.05) ativo scale(0.95)
Imagens: scale(1.05)
Ícones de botões: translateX(4px)

/* Loading States */
Skeleton screens com shimmer gradiente verde
Spinners com border gradiente (amazonia-light → amazonia)
```

---

## 📱 Responsividade

### **Touch Targets**

✅ Mínimo 44x44px implementado em:

- Todos os botões
- Ícones clicáveis
- Tab bar items

### **Grid System**

✅ Implementado:

- Mobile: 2 colunas para produtos
- Container: w-[90%] (máx 90% da largura)
- Gap: 16px (gap-4)

---

## 🚀 Configuração Técnica

### **Arquivos Modificados:**

1. `tailwind.config.js` - Design system completo
2. `src/styles/global.css` - Estilos base e animações
3. `src/components/ToyCard.tsx` - Card de produtos
4. `src/components/ProfileCard.tsx` - Card de artesãos
5. `src/components/SearchBar.tsx` - Barra de busca
6. `src/components/TabBar.tsx` - Navegação inferior
7. `src/components/Banners.tsx` - Hero banners
8. `src/pages/Home.tsx` - Página inicial
9. `src/pages/Products.tsx` - Página de produtos
10. `src/pages/Artisans.tsx` - Página de artesãos
11. `src/pages/More.tsx` - Página de configurações

### **Dependências:**

- React 18+
- TypeScript
- Tailwind CSS
- Swiper (carousels)
- React Loading Skeleton
- Lucide React (ícones)
- Vaul (drawers)

---

## 📋 Checklist de Implementação

- ✅ Paleta de cores aplicada consistentemente
- ✅ Tipografia Inter + Merriweather Sans implementada
- ✅ Border-radius padronizado (8px, 12px, 16px, 24px)
- ✅ Shadows sutis e estratificadas em 3 níveis
- ✅ Espaçamento baseado em grid 8px
- ✅ Ícones com line-weight 2px
- ✅ Touch targets mínimo 44x44px
- ✅ Badges culturais integrados naturalmente
- ✅ Animações de hover em elementos interativos
- ✅ Contraste WCAG AA adequado
- ✅ Elementos culturais sutis (3-5% opacidade)
- ✅ Gradientes aplicados em hero/CTAs
- ✅ Fotos com tratamento (border-radius, shadows)
- ✅ Hierarquia tipográfica clara
- ✅ WhatsApp button sempre #25D366
- ✅ Skeleton loading personalizado
- ✅ Infinite scroll implementado

---

## 🎯 Tom e Personalidade

O app redesenhado transmite:

✨ **Autenticidade** — Genuinamente amazônico, não genérico  
🌿 **Sustentabilidade** — Design limpo que reflete prática sustentável  
🤝 **Humanização** — Artesãos são protagonistas, não produtos  
🎨 **Criatividade** — Vibrante, mas nunca caótico  
💚 **Acolhimento** — Convidativo, acessível, respeitoso  
🚀 **Modernidade** — 2026, mas sem perder raízes

---

## 📸 Referências Visuais Utilizadas

1. **Identidade Visual de Belém (PA)**: Formas orgânicas, elementos naturais
2. **Identidade de Abaetetuba**: Cores vibrantes, elementos de miriti
3. **Padrões de artesanato amazônico**: Geometria orgânica, cores saturadas

---

## 🔄 Próximos Passos (Opcional)

- [ ] Adicionar dark mode
- [ ] Implementar animações de página (framer-motion)
- [ ] Adicionar mais micro-interações
- [ ] Otimizar imagens (next/image ou similar)
- [ ] Adicionar PWA capabilities
- [ ] Implementar testes de acessibilidade
- [ ] Adicionar analytics

---

**IMPORTANTE**: Cada elemento foi pensado para **valorizar o artesão e sua arte**, nunca só vender um produto. O design é uma ferramenta de preservação cultural digital.

---

_Feito com ❤️ para a comunidade de Abaetetuba_  
_v1.0.0 © 2026 E-Miriti_
