# CIPFA Logo

## Logo Location
Place the CIPFA logo files in this directory:
- `cipfa-logo.svg` (preferred)
- `cipfa-logo.png` (fallback)

## Download Instructions
1. Visit https://www.cipfa.org/
2. Right-click on the CIPFA logo in the header
3. Save the image as `cipfa-logo.svg` or `cipfa-logo.png`
4. Place the file in this directory

## Usage
Reference the logo in components using:
```tsx
import Image from 'next/image';
<Image src="/assets/images/logos/cipfa-logo.svg" alt="CIPFA" />
```

Or using the public path:
```tsx
<img src="/assets/images/logos/cipfa-logo.svg" alt="CIPFA" />
```
