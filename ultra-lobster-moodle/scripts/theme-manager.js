// Theme Manager for Ultra Lobster Moodle Extension

class UltraLobsterThemeManager {
  constructor() {
    this.themes = {
      light: 'styles/themes/light.css',
      dark: 'styles/themes/dark.css',
      gummy: 'styles/themes/gummy.css',
      brutal: 'styles/themes/brutal.css',
      soft: 'styles/themes/soft.css'
    };
    
    this.currentTheme = 'light';
    this.init();
  }

  async init() {
    try {
      const result = await chrome.storage.sync.get(['selectedTheme']);
      this.currentTheme = result.selectedTheme || 'light';
      await this.applyTheme(this.currentTheme);
    } catch (error) {
      console.error('Ultra Lobster: Failed to initialize theme manager:', error);
    }
  }

  async applyTheme(themeName) {
    if (!this.themes[themeName]) {
      console.warn(`Ultra Lobster: Theme "${themeName}" not found, using light theme`);
      themeName = 'light';
    }

    try {
      // Remove existing theme stylesheets
      this.removeExistingThemes();
      
      // Add new theme stylesheet
      const themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      themeLink.type = 'text/css';
      themeLink.href = chrome.runtime.getURL(this.themes[themeName]);
      themeLink.id = 'ultra-lobster-theme';
      
      document.head.appendChild(themeLink);
      
      // Store selected theme
      await chrome.storage.sync.set({ selectedTheme: themeName });
      this.currentTheme = themeName;
      
      // Dispatch theme change event
      document.dispatchEvent(new CustomEvent('ultraLobsterThemeChanged', {
        detail: { theme: themeName }
      }));
      
      console.log(`Ultra Lobster: Applied ${themeName} theme`);
    } catch (error) {
      console.error('Ultra Lobster: Failed to apply theme:', error);
    }
  }

  removeExistingThemes() {
    const existingTheme = document.getElementById('ultra-lobster-theme');
    if (existingTheme) {
      existingTheme.remove();
    }
  }

  async switchTheme(themeName) {
    await this.applyTheme(themeName);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  getAvailableThemes() {
    return Object.keys(this.themes);
  }

  getThemeDisplayName(themeName) {
    const displayNames = {
      light: 'Light',
      dark: 'Dark',
      gummy: 'Gummy',
      brutal: 'Brutal',
      soft: 'Soft'
    };
    return displayNames[themeName] || themeName;
  }
}

// Initialize theme manager
const ultraLobsterThemeManager = new UltraLobsterThemeManager();

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.ultraLobsterThemeManager = ultraLobsterThemeManager;
}