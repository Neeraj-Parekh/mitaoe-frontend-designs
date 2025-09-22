# Ultra Lobster for Moodle 🦞

Transform your Moodle LMS experience with the Ultra Lobster theme - a modern, card-based UI with multiple stunning variants inspired by the popular Obsidian theme.

## Features

✨ **5 Beautiful Theme Variants**
- **Light**: Clean and bright with subtle gradients
- **Dark**: Modern dark theme with vibrant accents
- **Gummy**: Playful orange-themed design with extra rounded elements
- **Brutal**: Bold, high-contrast design with sharp edges
- **Soft**: Gentle, translucent design with soft colors

🎨 **Modern Design Elements**
- Card-based layouts with smooth hover effects
- Rounded corners and modern typography
- Smooth animations and transitions
- Enhanced accessibility features
- Improved form controls and buttons

🚀 **Performance Optimized**
- Lightweight CSS and JavaScript
- Non-intrusive content scripts
- Minimal performance impact
- Compatible with existing Moodle functionality

## Installation

### Method 1: Load as Unpacked Extension (Development)

1. **Download the Extension**
   - Clone or download this repository
   - Navigate to the `ultra-lobster-moodle` folder

2. **Open Chrome Extensions**
   - Open Google Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)

3. **Load the Extension**
   - Click "Load unpacked"
   - Select the `ultra-lobster-moodle` folder
   - The extension should now appear in your extensions list

4. **Activate on Moodle**
   - Visit [moodle.mitaoe.ac.in](https://moodle.mitaoe.ac.in)
   - Click the Ultra Lobster icon in your Chrome toolbar
   - Select your preferred theme variant

### Method 2: Chrome Web Store (Coming Soon)

The extension will be available on the Chrome Web Store for easy installation.

## Usage

1. **Access Settings**
   - Click the Ultra Lobster icon (🦞) in your Chrome toolbar
   - The popup will show current settings and theme options

2. **Choose Your Theme**
   - Select from 5 available theme variants
   - Changes apply instantly on Moodle pages

3. **Customize Settings**
   - Toggle animations on/off
   - Enable/disable enhanced typography
   - Control card hover effects

4. **Reset if Needed**
   - Use "Reset Settings" to return to defaults
   - All preferences are saved automatically

## Theme Variants

### Light Theme
Perfect for daytime use with clean, bright colors and subtle gradients.

### Dark Theme
Ideal for low-light environments with modern dark backgrounds and vibrant accents.

### Gummy Theme
Playful and warm with orange-based colors and extra rounded, bouncy elements.

### Brutal Theme
Bold and minimalist with high contrast, sharp edges, and no-nonsense design.

### Soft Theme
Gentle and translucent with soft colors and enhanced blur effects.

## Compatibility

- **Browser**: Google Chrome 88+ (Manifest V3)
- **Moodle**: Compatible with Moodle 3.9+ running on moodle.mitaoe.ac.in
- **Performance**: Minimal impact on page load times
- **Accessibility**: Enhanced keyboard navigation and screen reader support

## Technical Details

### Architecture
- **Manifest V3** for modern Chrome extension standards
- **Content Scripts** for non-intrusive DOM manipulation
- **CSS Custom Properties** for dynamic theming
- **Chrome Storage API** for settings persistence

### File Structure
```
ultra-lobster-moodle/
├── manifest.json              # Extension configuration
├── styles/
│   ├── base.css              # Core styling foundation
│   ├── components.css        # Component-specific styles
│   └── themes/               # Theme variant files
│       ├── light.css
│       ├── dark.css
│       ├── gummy.css
│       ├── brutal.css
│       └── soft.css
├── scripts/
│   ├── theme-manager.js      # Theme switching logic
│   └── content-script.js     # DOM enhancement script
├── popup/
│   ├── popup.html           # Settings popup interface
│   ├── popup.css            # Popup styling
│   └── popup.js             # Popup functionality
└── icons/                   # Extension icons
```

### Privacy & Security
- **No Data Collection**: The extension doesn't collect or transmit user data
- **Local Storage Only**: All settings are stored locally using Chrome's storage API
- **Minimal Permissions**: Only requests necessary permissions for Moodle integration
- **Content Script Isolation**: Runs in isolated environment without page script access

## Development

### Prerequisites
- Google Chrome 88+
- Basic understanding of Chrome extension development
- Text editor or IDE

### Local Development
1. Clone the repository
2. Make your changes to the source files
3. Load the extension in Chrome (Developer mode)
4. Test changes on moodle.mitaoe.ac.in
5. Reload the extension after changes

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Test thoroughly on Moodle
5. Submit a pull request

## Troubleshooting

### Extension Not Working
- Ensure you're on moodle.mitaoe.ac.in
- Check that the extension is enabled in Chrome
- Try refreshing the Moodle page
- Reload the extension in Chrome extensions page

### Theme Not Applying
- Verify the extension icon shows as active
- Try switching to a different theme variant
- Check browser console for any error messages
- Reset settings if issues persist

### Performance Issues
- Disable animations if needed
- Clear browser cache and cookies
- Check for conflicts with other extensions
- Report persistent issues via feedback

## Support

- **Email**: Submit feedback through the extension popup
- **Issues**: Report bugs via GitHub issues
- **Updates**: Extension updates automatically via Chrome

## Credits

- Inspired by the Ultra Lobster theme for Obsidian
- Built with modern web technologies
- Designed for the MITAOE Moodle community

## License

This project is open source and available under the MIT License.

---

**Made with ❤️ for the MITAOE community**

Transform your Moodle experience today! 🎓✨