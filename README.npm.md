# 🧊 liquid-glass-reactjs

Bring your UI to life with **liquid glass** effects for React — featuring animated shine, smooth blur, and zero CSS required.

---

![demo](https://raw.githubusercontent.com/TahmineRH/Liquid-Glass/main/public/demo-picture.png)

> ✨ Frosted glass + animated shine effect — customizable and fully responsive.

📸 Background image by [@yukato](https://unsplash.com/@yukato) on [Unsplash](https://unsplash.com)
|

---

### 🍵 Usage Example

To use the `GlassDiv` component, import it from the package. You can style it either by passing a `className` or inline `style` props, or both — for example to control border-radius, size, colors, etc. Then place any content inside it to get the liquid glass effect.

```tsx
import React from "react";
import { GlassDiv } from "liquid-glass-reactjs";

export default function Demo() {
  return (
    <div className="h-96 w-96">
      <GlassDiv className="rounded-xl">
        <h2 className="text-2xl"> Hello Glass ✨ </h2>
      </GlassDiv>
    </div>
  );
}
```

---

## 📜 Props Reference

| Prop        | Type                             | Default | Description                                                            |
| ----------- | -------------------------------- | ------- | ---------------------------------------------------------------------- |
| `children`  | `React.ReactNode`                | —       | Any content to render inside the glass container.                      |
| `className` | `string`                         | `""`    | Optional Tailwind or CSS classes applied to the wrapper div.           |
| `style`     | `React.CSSProperties`            | `{}`    | Optional inline styles (e.g., `borderRadius`, `width`, `height`, etc). |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | —       | Any valid HTML div props will be passed to the wrapper.                |

---

## 🔗 Links

🏯 [Project on GitHub](https://github.com/TahmineRH/liquid-glass)
🏮 [Author GitHub](https://github.com/TahmineRH)
