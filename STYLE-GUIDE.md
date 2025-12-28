# 🎨 Guia de Estilo E-Miriti 2026

## 📐 Como Usar o Design System

Este guia mostra como usar os estilos do E-Miriti em novos componentes.

---

## 🎯 Cores

### Cores Primárias

```tsx
// Verde Amazônia (principal)
<button className="bg-amazonia hover:bg-amazonia-hover">
  Botão Principal
</button>

// Laranja Miriti (secundário)
<button className="bg-miriti hover:bg-miriti/90">
  Botão Secundário
</button>

// WhatsApp
<a className="bg-whatsapp hover:bg-whatsapp/90">
  WhatsApp
</a>
```

### Cores de Texto

```tsx
// Texto principal (quase preto)
<p className="text-text-primary">Texto principal</p>

// Texto secundário (cinza médio)
<p className="text-text-secondary">Texto secundário</p>
```

### Backgrounds

```tsx
// Background geral do app
<div className="bg-background">...</div>

// Cards brancos
<div className="bg-card">...</div>

// Verde claro (destaques)
<div className="bg-amazonia-light">...</div>

// Laranja claro
<div className="bg-miriti-light">...</div>
```

---

## 📝 Tipografia

### Fontes

```tsx
// Fonte padrão (Inter) - automática em <body>
<p className="font-sans">Texto padrão</p>

// Fonte secundária (Merriweather Sans)
<p className="font-secondary">Texto humanizado</p>
```

### Tamanhos

```tsx
<h1 className="text-4xl font-bold">Título principal (28px)</h1>
<h2 className="text-3xl font-bold">Título seção (24px)</h2>
<h3 className="text-2xl font-semibold">Título card (22px)</h3>
<h4 className="text-xl font-semibold">Subtítulo (18px)</h4>
<p className="text-base">Texto corpo (15px)</p>
<span className="text-sm">Texto pequeno (13px)</span>
<span className="text-xs">Texto mínimo (11px)</span>
```

### Pesos

```tsx
<p className="font-normal">Regular (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
```

---

## 📦 Componentes Base

### Botões

```tsx
// Botão principal (verde)
<button className="bg-amazonia text-white font-semibold px-6 py-3 rounded-xl hover:bg-amazonia-hover active:scale-95 transition-all">
  Botão Principal
</button>

// Botão secundário (laranja)
<button className="bg-miriti text-white font-semibold px-6 py-3 rounded-xl hover:bg-miriti/90 active:scale-95 transition-all">
  Botão Secundário
</button>

// Botão outline (ghost)
<button className="border-2 border-border bg-transparent text-text-secondary font-medium px-6 py-3 rounded-xl hover:border-amazonia hover:text-amazonia hover:bg-amazonia-light/30 transition-all active:scale-95">
  Botão Outline
</button>

// Botão WhatsApp
<button className="bg-whatsapp text-white font-semibold px-6 py-3 rounded-xl hover:bg-whatsapp/90 active:scale-95 transition-all flex items-center gap-2">
  <WhatsAppIcon /> WhatsApp
</button>
```

### Cards

```tsx
// Card padrão
<div className="bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all p-4">
  Conteúdo do card
</div>

// Card com borda
<div className="bg-card border border-border rounded-lg shadow-card p-4">
  Conteúdo do card
</div>

// Card especial (verde claro)
<div className="bg-amazonia-light rounded-lg p-5">
  Card de destaque
</div>
```

### Badges

```tsx
// Badge verde
<span className="bg-amazonia text-white text-xs font-semibold px-3 py-1.5 rounded-xl">
  Feito à mão
</span>

// Badge verde claro
<span className="bg-amazonia-light text-amazonia text-xs font-medium px-3 py-1.5 rounded-xl">
  Brinquedos de Miriti
</span>

// Badge laranja
<span className="bg-miriti text-white text-xs font-semibold px-3 py-1.5 rounded-xl">
  Arte Tradicional
</span>

// Badge com ícone
<span className="bg-amazonia text-white text-xs font-semibold px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5">
  <IconComponent /> Sustentável
</span>
```

### Inputs

```tsx
// Input padrão
<input
  type="text"
  placeholder="Digite aqui..."
  className="w-full h-11 px-4 rounded-xl bg-background border border-border text-base text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-2 focus:border-amazonia focus:shadow-[0_0_0_3px_rgba(0,168,107,0.1)] transition-all"
/>

// Input com ícone
<div className="relative">
  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
  <input
    type="text"
    placeholder="Buscar..."
    className="w-full h-11 pl-12 pr-4 rounded-xl bg-background border border-border focus:border-amazonia transition-all"
  />
</div>
```

---

## 🎭 Elementos Culturais

### Padrão Amazônico (Background)

```tsx
// Adicionar textura sutil de trançado
<div className='pattern-amazonia bg-amazonia'>Conteúdo com textura</div>
```

### Gradientes

```tsx
// Gradiente verde (hero banners)
<div className="bg-gradient-to-br from-amazonia to-amazonia-hover">
  Hero content
</div>

// Gradiente laranja
<div className="bg-gradient-to-br from-miriti to-miriti-gradient">
  Destaque
</div>

// Instagram gradient
<div style={{ background: 'linear-gradient(135deg, #E1306C, #FD1D1D, #F77737)' }}>
  Instagram button
</div>
```

### Bordas Especiais

```tsx
// Borda com gradiente (artesãos)
<img
  className='w-30 h-30 rounded-full'
  style={{
    border: '3px solid transparent',
    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00A86B, #FF6B35)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  }}
/>
```

---

## ✨ Animações

### Hover Effects

```tsx
// Hover com scale
<div className="transition-transform hover:scale-105 active:scale-95">
  Conteúdo
</div>

// Hover com shadow
<div className="shadow-card hover:shadow-card-hover transition-shadow">
  Card
</div>

// Ícone com movimento
<button className="group">
  <span>Ver mais</span>
  <ArrowRight className="transition-transform group-hover:translate-x-1" />
</button>
```

### Loading States

```tsx
// Skeleton com shimmer
<div className="h-40 bg-gray-200 rounded-lg skeleton-shimmer" />

// Spinner customizado
<div className="w-10 h-10 border-4 border-amazonia-light border-t-amazonia rounded-full animate-spin" />
```

### Transições de Página

```tsx
// Fade in ao carregar
<div className="animate-fade-in">
  Conteúdo da página
</div>

// Slide up
<div className="animate-slide-up">
  Conteúdo
</div>
```

---

## 📏 Layout

### Container Principal

```tsx
// Container padrão (90% da largura)
<section className='mx-auto w-[90%] pb-6 pt-2'>Conteúdo</section>
```

### Grid de Produtos

```tsx
// 2 colunas no mobile
<div className='grid grid-cols-2 gap-4'>
  <ProductCard />
  <ProductCard />
</div>
```

### Lista Vertical

```tsx
// Para artesãos
<div className='flex flex-col gap-4'>
  <ArtisanCard />
  <ArtisanCard />
</div>
```

### Espaçamento

```tsx
// Entre seções
<section className="pb-6 pt-2">...</section>

// Entre elementos
<div className="space-y-3">...</div>
<div className="space-x-2">...</div>

// Padding interno
<div className="p-4">Normal</div>
<div className="p-5">Médio</div>
<div className="px-6 py-3">Customizado</div>
```

---

## 🎯 Padrões de UI

### Hero Banner

```tsx
<div className='shadow-card-hover relative overflow-hidden rounded-lg'>
  <img src='banner.jpg' className='h-full w-full object-cover' />

  {/* Overlay */}
  <div className='from-amazonia/90 to-amazonia-hover/80 pattern-amazonia absolute inset-0 bg-gradient-to-r' />

  {/* Badge */}
  <div className='text-amazonia absolute left-3 top-3 rounded-xl bg-white/95 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm'>
    Badge
  </div>

  {/* Conteúdo */}
  <div className='absolute inset-0 flex flex-col justify-center px-6'>
    <h2 className='mb-2 text-3xl font-bold text-white'>Título</h2>
    <p className='mb-4 text-sm text-white/90'>Descrição</p>
    <button className='text-amazonia rounded-xl bg-white px-6 py-3 font-semibold'>CTA</button>
  </div>
</div>
```

### Modal/Drawer

```tsx
<Drawer.Root open={isOpen} onOpenChange={setOpen}>
  <Drawer.Portal>
    <Drawer.Overlay className='fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm' />
    <Drawer.Content className='bg-background fixed left-0 right-0 top-10 z-[999] flex h-full flex-col rounded-t-3xl outline-none'>
      {/* Header com drag indicators */}
      <div className='bg-background/95 sticky top-0 z-10 flex items-center justify-center pb-4 pt-2 backdrop-blur-sm'>
        <div className='flex gap-1.5'>
          <span className='h-1 w-5 rounded-full bg-gray-300' />
          <span className='h-1 w-5 rounded-full bg-gray-300' />
        </div>
      </div>

      {/* Botão fechar */}
      <button className='bg-text-primary/10 hover:bg-text-primary/20 absolute right-4 top-8 z-20 flex h-9 w-9 items-center justify-center rounded-full transition-colors'>
        <X size={18} />
      </button>

      {/* Conteúdo */}
      <div className='overflow-y-auto px-4'>...</div>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```

### Lista de Contatos

```tsx
<div className='flex flex-col gap-3'>
  <a
    href='https://wa.me/'
    className='bg-whatsapp flex h-12 items-center justify-center gap-2 rounded-xl font-semibold text-white'
  >
    <WhatsAppIcon /> WhatsApp
  </a>
  <a
    href='mailto:'
    className='flex h-12 items-center justify-center gap-2 rounded-xl bg-[#007BFF] font-semibold text-white'
  >
    <EmailIcon /> Email
  </a>
  <a
    href='https://instagram.com'
    className='flex h-12 items-center justify-center gap-2 rounded-xl font-semibold text-white'
    style={{ background: 'linear-gradient(135deg, #E1306C, #FD1D1D, #F77737)' }}
  >
    <InstagramIcon /> Instagram
  </a>
</div>
```

---

## ♿ Acessibilidade

### Touch Targets

```tsx
// Todos os botões têm mínimo 44x44px automaticamente
// Aplicado via global.css para button, a
```

### Contraste

```tsx
// Texto primário em fundo claro: #1A202C em #FFFFFF (passa WCAG AA)
// Texto secundário: #718096 em #FFFFFF (passa WCAG AA)
// Botões verde: #00A86B com texto branco (passa WCAG AAA)
```

### Focus States

```tsx
// Input com focus ring
<input className="focus:border-2 focus:border-amazonia focus:shadow-[0_0_0_3px_rgba(0,168,107,0.1)]" />

// Botão com focus
<button className="focus:outline-none focus:ring-2 focus:ring-amazonia focus:ring-offset-2">
  Botão
</button>
```

---

## 📱 Responsividade

### Mobile First

```tsx
// Base (mobile)
<div className="grid grid-cols-2 gap-4">

// Tablet
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

// Desktop
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
```

### Container com Max Width

```tsx
// Para desktop
<div className='mx-auto max-w-7xl px-4'>Conteúdo limitado</div>
```

---

## 🔍 Exemplos Completos

### Card de Produto Completo

```tsx
<div className='bg-card shadow-card hover:shadow-card-hover group relative overflow-hidden rounded-lg transition-all duration-200 hover:scale-[1.02]'>
  {/* Badge */}
  <div className='bg-amazonia/95 absolute right-3 top-3 z-10 rounded-xl px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm'>
    Feito em Abaetetuba
  </div>

  {/* Imagem */}
  <div className='overflow-hidden rounded-t-lg'>
    <img
      src='produto.jpg'
      alt='Produto'
      className='h-[180px] w-full object-cover transition-transform duration-200 group-hover:scale-105'
    />
  </div>

  {/* Conteúdo */}
  <div className='space-y-3 p-4'>
    <div>
      <h3 className='text-text-primary truncate text-lg font-semibold'>Nome do Produto</h3>
      <p className='font-secondary text-text-secondary mt-0.5 text-sm'>Nome do Artesão</p>
    </div>

    <button className='bg-miriti hover:bg-miriti/90 group/btn flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all active:scale-95'>
      Ver mais
      <ArrowRight size={16} className='transition-transform group-hover/btn:translate-x-1' />
    </button>
  </div>
</div>
```

---

_Este guia deve ser consultado ao criar novos componentes para manter a consistência visual._
