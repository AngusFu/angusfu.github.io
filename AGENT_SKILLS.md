# Agent Skills: Xiaohongshu (小红书) Card Layout Style Guide

> This document defines the layout and typographic rules for generating Xiaohongshu-style card images.
> Use these rules when creating, rendering, or reviewing card content for the Xiaohongshu platform.

---

## 1. Card Dimensions

- Aspect ratio: **3:4** (Xiaohongshu recommended)
- Base size: **1080 x 1440 px**
- Device pixel ratio: **2** (Retina)
- Dynamic max height: **4320 px**
- Content safe height: **~1100 px** (after subtracting header/footer/padding)

---

## 2. Three-Layer Card Architecture

Every card uses three nested layers:

### 2.1 Outer Container (Background Layer)

- Fixed width `1080px`, min-height `1440px`
- Background: theme-specific gradient (typically 135deg or 180deg)
- Padding: `50px` all sides

### 2.2 Inner Card (Frosted Glass Layer)

- Background: `rgba(255, 255, 255, 0.95)` (semi-transparent white)
- Border-radius: `20px`
- Padding: `60px`
- Min-height: `1340px` (container height minus outer padding)
- Box-shadow: `0 8px 32px rgba(0, 0, 0, 0.1)`
- Backdrop-filter: `blur(10px)`

### 2.3 Content Layer (Typography Layer)

- Font-size: `42px`
- Line-height: `1.7`
- Pure Markdown-rendered content

---

## 3. Cover Card Layout

The cover card uses a Flex column layout with distinct structure:

| Element | Style |
|---------|-------|
| Inner Panel | `950 x 1310 px`, border-radius `25px`, background `#F3F3F3`, padding `80px 85px` |
| Emoji | `font-size: 180px`, `line-height: 1.2`, `margin-bottom: 50px` |
| Title | `font-weight: 900`, `font-size: 130px`, `line-height: 1.4`, gradient text fill, `flex: 1` |
| Subtitle | `font-weight: 350`, `font-size: 72px`, `color: #000`, `margin-top: auto` (pinned to bottom) |

---

## 4. Typography

### 4.1 Font Stack

```
'Noto Sans SC', 'Source Han Sans CN', 'PingFang SC', 'Microsoft YaHei', sans-serif
```

Loaded weights: 300, 400, 500, 700, 900.

Monospace (for code/terminal):
```
'SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', monospace
```

### 4.2 Font Size Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Cover Emoji | 180px | -- | 1.2 |
| Cover Title | 130px | 900 | 1.4 |
| Cover Subtitle | 72px | 350 | 1.4 |
| H1 | 72px | 700 | 1.3 |
| H2 | 56px | 600 | 1.4 |
| H3 | 48px | 600 | -- |
| Body | 42px | 400 | 1.7 |
| Inline Code | 38px | -- | -- |
| Code Block | 36px | -- | 1.5 |
| Tags | 34px | 500 | -- |
| Page Number | 36px | 500 | -- |

---

## 5. Spacing

### 5.1 Margins

| Element | Margin |
|---------|--------|
| Paragraph | bottom `35px` |
| H1 | bottom `40px` |
| H2 | top `50px`, bottom `25px` |
| H3 | top `40px`, bottom `20px` |
| Lists (ul/ol) | top/bottom `30px` |
| List Item | bottom `20px` |
| Blockquote | top/bottom `35px` |
| Code Block | top/bottom `35px` |
| Image | top/bottom `35px`, centered |
| Horizontal Rule | top/bottom `50px` |

### 5.2 Padding

| Element | Padding |
|---------|---------|
| List indent | left `60px` |
| Blockquote left | `40px` |
| Blockquote vertical | top `25px`, bottom `25px` |
| Code Block | `40px` |
| Inline Code | `6px 16px` |
| Tag pill | `12px 28px` |
| Tag container | top margin `50px`, top padding `30px` |

---

## 6. Color System

### 6.1 Default Theme Colors

| Role | Color |
|------|-------|
| Body text | `#475569` |
| H1 | `#1e293b` |
| H2 | `#334155` |
| H3 | `#475569` |
| Bold | `#1e293b` |
| Italic / Emphasis | `#6366f1` (indigo) |
| Link | `#6366f1` |
| Blockquote text | `#64748b` |
| Inline code foreground | `#6366f1` |
| Inline code background | `#f1f5f9` |
| Code block foreground | `#e2e8f0` |
| Code block background | `#1e293b` |
| Border | `#e2e8f0` |

### 6.2 CSS Variables

```css
:root {
  --primary-color: #ff2442;
  --primary-light: #ff6b81;
  --text-primary: #1e293b;
  --text-secondary: #334155;
  --text-muted: #64748b;
  --text-light: #475569;
  --background-light: #f8fafc;
  --background-gray: #f1f5f9;
  --border-color: #e2e8f0;
  --border-radius: 25px;
  --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### 6.3 Theme Palette (15 themes)

#### V1 Themes (CSS-file based, 8 themes)

| Theme | Style | Gradient | Accent |
|-------|-------|----------|--------|
| default | Minimal gray | `#f3f3f3 -> #f9f9f9` | `#6366f1` indigo |
| playful-geometric | Memphis | `#8B5CF6 -> #F472B6` | purple + pink + amber + mint |
| neo-brutalism | Brutalist | `#FF4757 -> #FECA57` | black + red + yellow |
| botanical | Natural | `#4A7C59 -> #8FBC8F` | forest green |
| professional | Business | `#2563EB -> #3B82F6` | brand blue |
| retro | Vintage | `#D35400 -> #F39C12` | orange-brown |
| terminal | Hacker CLI | `#0D1117 -> #161B22` | terminal green `#39D353` |
| sketch | Hand-drawn | `#555555 -> #888888` | charcoal + marker colors |

#### V2 Themes (inline-style based, 7 themes)

| Key | Name | Gradient | Accent |
|-----|------|----------|--------|
| `purple` | Purple Charm | `#667eea -> #764ba2` | `#6366f1` |
| `xiaohongshu` | XHS Red | `#FF2442 -> #FF6B81` | `#FF2442` |
| `mint` | Fresh Mint | `#43e97b -> #38f9d7` | `#43e97b` |
| `sunset` | Sunset Orange | `#fa709a -> #fee140` | `#fa709a` |
| `ocean` | Deep Ocean | `#4facfe -> #00f2fe` | `#4facfe` |
| `elegant` | Elegant White | `#f5f5f5 -> #e0e0e0` | `#333333` |
| `dark` | Dark Mode | `#1a1a2e -> #16213e` | `#e94560` |

### 6.4 Cover Title Gradient Per V1 Theme

| Theme | Title text gradient |
|-------|---------------------|
| default | `#111827 -> #4B5563` |
| playful-geometric | `#7C3AED -> #F472B6` |
| neo-brutalism | `#000000 -> #FF4757` |
| botanical | `#1F2937 -> #4A7C59` |
| professional | `#1E3A8A -> #2563EB` |
| retro | `#8B4513 -> #D35400` |
| terminal | `#39D353 -> #58A6FF` |
| sketch | `#111827 -> #6B7280` |

### 6.5 Gradient Background Presets

| Class | Direction | Colors |
|-------|-----------|--------|
| `.bg-gradient-1` | 180deg | `#3450E4 -> #D266DA` |
| `.bg-gradient-2` | 180deg | `#f3f3f3 -> #f9f9f9` |
| `.bg-gradient-3` | 135deg | `#f093fb -> #f5576c` |
| `.bg-gradient-4` | 135deg | `#4facfe -> #00f2fe` |
| `.bg-gradient-5` | 135deg | `#43e97b -> #38f9d7` |
| `.bg-gradient-6` | 135deg | `#fa709a -> #fee140` |
| `.bg-gradient-7` | 135deg | `#ff9a9e -> #fecfef` |
| `.bg-gradient-8` | 135deg | `#a8edea -> #fed6e3` |

---

## 7. Component Styles

### 7.1 Blockquote

- Left border: `8px solid [accent-color]`
- Background: theme-specific (light gray, pink, yellow, etc.)
- Padding-left: `40px`
- Border-radius: `0 12px 12px 0` (right-side rounded)
- Font-style: italic

### 7.2 Code Block

- Background: `#1e293b` (dark)
- Text color: `#e2e8f0` (light)
- Padding: `40px`
- Border-radius: `16px`
- Font: monospace at `36px`
- Word-wrap: `break-word` + `white-space: pre-wrap`

### 7.3 Inline Code

- Background: `#f1f5f9`
- Color: accent color (`#6366f1`)
- Padding: `6px 16px`
- Border-radius: `8px`
- Font-size: `38px`

### 7.4 Tags

- Shape: pill (`border-radius: 30px`)
- Background: gradient using theme accent colors
- Text color: white
- Padding: `12px 28px`
- Font-size: `34px`
- Spacing: `10px 15px 10px 0`
- Container separator: `border-top: 2px solid [border-color]`
- Auto-extracted via regex: `/(#[\w\u4e00-\u9fa5]+\s*)+$/`

### 7.5 Images

- `max-width: 100%`
- Border-radius: `16px`
- Box-shadow: `0 4px 20px rgba(0, 0, 0, 0.1)`
- `display: block; margin: 35px auto`

### 7.6 Page Number

- Position: `absolute`, `bottom: 80px`, `right: 80px`
- Font-size: `36px`
- Color: `rgba(255, 255, 255, 0.8)`
- Format: `1/5`

### 7.7 Info Cards (Callouts)

| Type | Background | Border |
|------|------------|--------|
| Info (purple) | `rgba(99, 102, 241, 0.12)` | `rgba(99, 102, 241, 0.2)` |
| Success (green) | `rgba(16, 185, 129, 0.12)` | -- |
| Warning (amber) | `rgba(245, 158, 11, 0.12)` | -- |
| Error (red) | `rgba(239, 68, 68, 0.12)` | -- |

---

## 8. Emoji Usage Rules

| Context | Rule |
|---------|------|
| Cover | Single large emoji at `180px`, placed above title |
| Body paragraphs | **1-2 per paragraph**, light decoration only |
| Headings | Append topic emoji, e.g. `# Notion 📝` |
| List items | Use as category icons: `📊`, `🔗`, `🎨`, `👥` |
| Conclusions | Use `✅` for checkmarks |
| Common set | `🚀 ⚡ 🎯 🔮 📋 🤖 👥 🎨 📊 🔗` |

---

## 9. Content Structure

### 9.1 YAML Front Matter (Cover Metadata)

```yaml
---
emoji: "🚀"          # Single decorative emoji
title: "Main Title"   # Max 15 characters
subtitle: "Subtitle"  # Max 15 characters
---
```

### 9.2 Markdown Body Rules

- Separate cards with `---` (horizontal rule) for manual pagination
- Each card section: **~200 characters** recommended
- Supported elements: H1-H3, paragraphs, bullet/numbered lists, blockquotes, fenced code blocks, images, horizontal rules
- End with 5-10 SEO hashtags: `#tag1 #tag2 #tag3`

### 9.3 Post Title Guidelines

- Max **20 characters**
- Use numbers, questions, exclamation marks to grab attention
- Examples: `"效率翻倍的5个工具！"`, `"震惊！原来应该这样做"`

### 9.4 Body Writing Guidelines

- Clear formatting, distinct paragraphs
- Short sentences and short paragraphs
- Emoji: 1-2 per paragraph, never overuse
- End with 5-10 SEO topic hashtags

---

## 10. Pagination Strategies

### 10.1 Four Modes

| Mode | Behavior | Best For |
|------|----------|----------|
| `separator` | Manual split at `---` | Precise content control |
| `auto-fit` | CSS scale-down to fit single card | Short, single-page content |
| `auto-split` | Measure height, auto-split into pages | Long-form content |
| `dynamic` | Variable card height (1440-4320px) | Medium content (< 550 chars) |

### 10.2 V2 Smart Pagination Height Estimates

| Element Type | Estimated Height |
|--------------|-----------------|
| `# H1` | 130px |
| `## H2` | 110px |
| `### H3` | 90px |
| Code fence line | 80px |
| List item | 85px |
| Blockquote | 100px |
| Image | 300px |
| Regular text | `ceil(charCount / 28) * 42 * 1.7 + 35` px |

Split priority: headings first, then paragraph boundaries.

---

## 11. Theme-Specific Styling Highlights

### Playful Geometric (Memphis)
- Hard shadows: `box-shadow: 6px 6px 0 #1e293b`
- Thick borders: `3px solid #1e293b`
- Dot-grid background pattern
- H1: purple background, white text, asymmetric border-radius `0 28px 0 28px`
- Bold text: yellow highlight sticker effect
- HR: rainbow repeating gradient stripe

### Neo-Brutalism
- 4-5px solid black borders everywhere
- 6-10px hard black shadows
- H1: yellow background, `text-transform: uppercase`
- Code blocks: black background, red shadow `box-shadow: 10px 10px 0 #ff4757`

### Terminal
- All-monospace typography
- H1::before `'# '`, H2::before `'## '`, H3::before `'### '` (Markdown-style prefixes)
- Blockquote::before `'> '`
- Colors: green `#39D353`, yellow `#F0E68C`, blue `#58A6FF`, purple `#A371F7`

### Sketch (Hand-drawn)
- Grid-line background paper effect
- H1: wavy red underline
- Blockquote: yellow sticky note with slight rotation (`transform: rotate(-0.5deg)`)
- Images: slight rotation (`transform: rotate(0.5deg)`)
- Inline code: dashed border `2px dashed #999`
- Tags: slight rotation (`transform: rotate(-1deg)`)

### Retro (Vintage)
- H1: double border bottom `4px double #d35400`
- Links: wavy underline `text-decoration-style: wavy`
- HR: dashed pattern
- Code font: `'Courier New', Courier, monospace`

---

## Summary

The core design principles are:

1. **3:4 fixed ratio** matching Xiaohongshu's recommended image dimensions
2. **Three-layer architecture**: gradient background, frosted-glass card, clean typography
3. **Magazine-scale typography**: 42px body text, generous line-height 1.7
4. **Spacious whitespace**: 50px outer padding, 60px inner padding, 35-50px element margins
5. **Theme-driven gradients**: 15 themes from minimal to expressive
6. **Restrained emoji**: large 180px display on cover, 1-2 small contextual emoji per paragraph
7. **Markdown-first authoring**: YAML front matter for cover, auto-tag extraction, multiple pagination strategies
