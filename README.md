# BearBit - Helper

Browser extension (Chrome, Edge) for "[Bearbit.org](https://bearbit.org/)" website that make your life easier

## Overview

<img src="README/ss+.png" alt="Extension UI" width="250"/>

## Features

- **Auto Thanks** - Automatically thank torrents
- **Screenshot Preview** - Display image previews in torrent listings
- **Screenshot Preview Popup** - Click to view full-size images
- **Smart URL Detection** - Supports multiple image hosting services:
  - imgbb.ws (auto-converts viewer links to direct image URLs)
- **Enhanced NSFW Blur** - Blur inappropriate content with special handling for category 908
- **Image Cache** - Cache screenshots for faster loading (7-day expiration)
- **Download+ Button** - Enhanced download functionality

## Recent Updates

- ✅ Fixed screenshot display for URLs with whitespace/newlines
- ✅ Added support for imgbb.ws and pic.in.th short URLs
- ✅ Improved NSFW blur logic with persistent blur for category 908
- ✅ Enhanced URL cleaning and validation
- ✅ Multiple server fallback for better image loading reliability

## Installation

### For Developers
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the extension
4. Load the `dist` folder as an unpacked extension in Chrome/Edge

### Build Commands
```bash
npm run dev          # Development build with webpack
npm run build        # Production build (minified)
npm run lint         # ESLint check
npm run format       # Prettier formatting
```

### Loading Extension in Browser
1. Open Chrome/Edge and go to `chrome://extensions/` or `edge://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `dist` folder
4. Visit [bearbit.org](https://bearbit.org) to see the extension in action

## Usage

The extension automatically enhances bearbit.org with:
- Screenshot previews appear in a new column
- Click any screenshot to view full-size
- Use the extension popup to toggle features on/off
- NSFW content is automatically blurred (with special handling for category 908)

## Disclaimer

This project/extension is not affiliated with or endorsed by [Bearbit.org](https://bearbit.org/) in any way. It is created solely to enhance the usability of the mentioned website. The developer does not intend to infringe on any rights of the original website and assumes no responsibility for any consequences resulting from the use of this extension.
