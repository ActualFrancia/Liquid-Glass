# 🧊 liquid-glass-reactjs

Bring your UI to life with **liquid glass** effects for React — featuring animated shine, smooth blur, and zero CSS required.

---

![demo](https://raw.githubusercontent.com/TahmineRH/Liquid-Glass/main/public/demo-picture.png)

> ✨ Frosted glass + animated shine effect — customizable and fully responsive.

📸 Background image by [@yukato](https://unsplash.com/@yukato) on [Unsplash](https://unsplash.com)

---

## 📦 Installation

```bash
npm i liquid-glass-reactjs
```

Or using yarn:

```bash
yarn add liquid-glass-reactjs
```

🔗 [View on npm](https://www.npmjs.com/package/liquid-glass-reactjs)

---

## 🚀 Usage Examples

### Basic Glass Effect

```tsx
import React from "react";
import { GlassDiv } from "liquid-glass-reactjs";

export default function Demo() {
  return (
    <div className="h-96 w-96">
      <GlassDiv className="rounded-xl">
        <h2 className="text-2xl">Hello Glass ✨</h2>
      </GlassDiv>
    </div>
  );
}
```

### Dark Glass Variant

```tsx
import React from "react";
import { DarkGlassDiv } from "liquid-glass-reactjs";

export default function Demo() {
  return (
    <div className="h-96 w-96">
      <DarkGlassDiv className="rounded-xl">
        <h2 className="text-2xl text-white">Dark Glass 🌙</h2>
      </DarkGlassDiv>
    </div>
  );
}
```

### Tinted Glass with Custom Color

```tsx
import React from "react";
import { TintedGlassDiv } from "liquid-glass-reactjs";

export default function Demo() {
  return (
    <div className="h-96 w-96">
      <TintedGlassDiv 
        className="rounded-xl" 
        tint="rgba(255, 0, 255, 0.1)"
      >
        <h2 className="text-2xl">Tinted Glass 🌈</h2>
      </TintedGlassDiv>
    </div>
  );
}
```

### Custom Filter Component

```tsx
import React from "react";
import { Filter } from "liquid-glass-reactjs";

export default function CustomGlass() {
  return (
    <div className="h-96 w-96">
      <Filter />
      <div className="liquid-glass rounded-xl">
        <h2 className="text-2xl">Custom Glass 🎨</h2>
      </div>
    </div>
  );
}
```

---

## 📜 Available Components

| Component | Description |
|-----------|-------------|
| `GlassDiv` | Standard glass effect with light theme |
| `DarkGlassDiv` | Glass effect with dark theme |
| `TintedGlassDiv` | Glass effect with customizable tint color |
| `Filter` | SVG filter component for custom glass effects |

---

## 🔧 Props Reference

### GlassDiv & DarkGlassDiv Props

| Prop        | Type                             | Default | Description                                                            |
| ----------- | -------------------------------- | ------- | ---------------------------------------------------------------------- |
| `children`  | `React.ReactNode`                | —       | Any content to render inside the glass container.                      |
| `className` | `string`                         | `""`    | Optional CSS classes applied to the wrapper div.                      |
| `style`     | `React.CSSProperties`            | `{}`    | Optional inline styles (e.g., `borderRadius`, `width`, `height`, etc). |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | —       | Any valid HTML div props will be passed to the wrapper.                |

### TintedGlassDiv Props

| Prop        | Type                             | Default | Description                                                            |
| ----------- | -------------------------------- | ------- | ---------------------------------------------------------------------- |
| `children`  | `React.ReactNode`                | —       | Any content to render inside the glass container.                      |
| `className` | `string`                         | `""`    | Optional CSS classes applied to the wrapper div.                      |
| `style`     | `React.CSSProperties`            | `{}`    | Optional inline styles (e.g., `borderRadius`, `width`, `height`, etc). |
| `tint`      | `string`                         | —       | Custom tint color (e.g., `"rgba(255, 0, 255, 0.1)"`).                |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | —       | Any valid HTML div props will be passed to the wrapper.                |

---

## 🔗 Links

🏯 [Project on GitHub](https://github.com/TahmineRH/liquid-glass)
