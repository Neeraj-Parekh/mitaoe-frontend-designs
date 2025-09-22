// Popup Script for Ultra Lobster Moodle Extension

class UltraLobsterPopup {
  constructor() {
    this.currentTheme = 'light';
    this.settings = {
      enableAnimations: true,
      enableEnhancedTypography: true,
      enableCardHover: true
    };
    
    this.init();
  }

  async init() {
    await this.loadSettings();
    this.setupEventListeners();
    this.updateUI();
    this.checkMoodleStatus();
  }

  async loadSettings() {
    try {
      const result = await chrome.storage.sync.get(['selectedTheme', 'settings']);
      this.currentTheme = result.selectedTheme || 'light';
      this.settings = { ...this.settings, ...result.settings };
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  }

  async saveSettings() {
    try {
      await chrome.storage.sync.set({
        selectedTheme: this.currentTheme,
        settings: this.settings
      });
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }

  setupEventListeners() {
    // Theme selection
    const themeOptions = document.querySelectorAll('.ultra-theme-option');
    themeOptions.forEach(option => {
      option.addEventListener('click', () => {
        const theme = option.dataset.theme;
        this.selectTheme(theme);
      });
    });

    // Settings toggles
    const enableAnimations = document.getElementById('enableAnimations');
    const enableEnhancedTypography = document.getElementById('enableEnhancedTypography');
    const enableCardHover = document.getElementById('enableCardHover');

    enableAnimations.addEventListener('change', (e) => {
      this.settings.enableAnimations = e.target.checked;
      this.saveSettings();
      this.notifyContentScript('settingsChanged', this.settings);
    });

    enableEnhancedTypography.addEventListener('change', (e) => {
      this.settings.enableEnhancedTypography = e.target.checked;
      this.saveSettings();
      this.notifyContentScript('settingsChanged', this.settings);
    });

    enableCardHover.addEventListener('change', (e) => {
      this.settings.enableCardHover = e.target.checked;
      this.saveSettings();
      this.notifyContentScript('settingsChanged', this.settings);
    });

    // Action buttons
    document.getElementById('resetSettings').addEventListener('click', () => {
      this.resetSettings();
    });

    document.getElementById('openMoodle').addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://moodle.mitaoe.ac.in' });
    });

    // Help and feedback links
    document.getElementById('helpLink').addEventListener('click', (e) => {
      e.preventDefault();
      this.showHelp();
    });

    document.getElementById('feedbackLink').addEventListener('click', (e) => {
      e.preventDefault();
      this.showFeedback();
    });
  }

  async selectTheme(theme) {
    this.currentTheme = theme;
    await this.saveSettings();
    
    // Update UI
    this.updateThemeSelection();
    
    // Notify content script
    this.notifyContentScript('themeChanged', { theme });
    
    // Add selection feedback
    this.showNotification(`${this.getThemeDisplayName(theme)} theme applied!`);
  }

  updateUI() {
    this.updateThemeSelection();
    this.updateSettingsToggles();
  }

  updateThemeSelection() {
    const themeOptions = document.querySelectorAll('.ultra-theme-option');
    themeOptions.forEach(option => {
      const isActive = option.dataset.theme === this.currentTheme;
      option.classList.toggle('active', isActive);
    });
  }

  updateSettingsToggles() {
    document.getElementById('enableAnimations').checked = this.settings.enableAnimations;
    document.getElementById('enableEnhancedTypography').checked = this.settings.enableEnhancedTypography;
    document.getElementById('enableCardHover').checked = this.settings.enableCardHover;
  }

  async resetSettings() {
    this.currentTheme = 'light';
    this.settings = {
      enableAnimations: true,
      enableEnhancedTypography: true,
      enableCardHover: true
    };
    
    await this.saveSettings();
    this.updateUI();
    this.notifyContentScript('themeChanged', { theme: this.currentTheme });
    this.notifyContentScript('settingsChanged', this.settings);
    
    this.showNotification('Settings reset to defaults!');
  }

  async checkMoodleStatus() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const statusIndicator = document.querySelector('.ultra-status-indicator');
      const statusText = document.querySelector('.ultra-status span');
      
      if (tab && tab.url && tab.url.includes('moodle.mitaoe.ac.in')) {
        statusIndicator.classList.add('active');
        statusIndicator.classList.remove('inactive');
        statusText.textContent = 'Active on current tab';
      } else {
        statusIndicator.classList.remove('active');
        statusIndicator.classList.add('inactive');
        statusText.textContent = 'Visit moodle.mitaoe.ac.in to activate';
      }
    } catch (error) {
      console.error('Failed to check Moodle status:', error);
    }
  }

  async notifyContentScript(action, data) {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab && tab.url && tab.url.includes('moodle.mitaoe.ac.in')) {
        await chrome.tabs.sendMessage(tab.id, {
          action,
          data
        });
      }
    } catch (error) {
      // Content script might not be injected yet, which is fine
      console.log('Content script not available:', error.message);
    }
  }

  getThemeDisplayName(theme) {
    const displayNames = {
      light: 'Light',
      dark: 'Dark',
      gummy: 'Gummy',
      brutal: 'Brutal',
      soft: 'Soft'
    };
    return displayNames[theme] || theme;
  }

  showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'ultra-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(16, 185, 129, 0.9);
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      z-index: 1000;
      animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  showHelp() {
    const helpContent = `
      <h3>Ultra Lobster for Moodle</h3>
      <p>Transform your Moodle experience with modern themes and enhanced UI.</p>
      <h4>Features:</h4>
      <ul>
        <li>5 beautiful theme variants</li>
        <li>Card-based design with smooth animations</li>
        <li>Enhanced typography and accessibility</li>
        <li>Customizable settings</li>
      </ul>
      <h4>How to use:</h4>
      <ol>
        <li>Visit moodle.mitaoe.ac.in</li>
        <li>Select your preferred theme</li>
        <li>Customize settings as needed</li>
        <li>Enjoy your enhanced Moodle experience!</li>
      </ol>
    `;
    
    this.showModal('Help', helpContent);
  }

  showFeedback() {
    const feedbackContent = `
      <h3>We'd love your feedback!</h3>
      <p>Help us improve Ultra Lobster for Moodle by sharing your experience.</p>
      <div style="margin: 16px 0;">
        <a href="mailto:feedback@ultralollster.com" style="color: #6366f1; text-decoration: none;">
          📧 Send us an email
        </a>
      </div>
      <p style="font-size: 12px; opacity: 0.8;">
        Your feedback helps us create better experiences for all Moodle users.
      </p>
    `;
    
    this.showModal('Feedback', feedbackContent);
  }

  showModal(title, content) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
      background: white;
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      max-height: 80vh;
      overflow-y: auto;
      color: #333;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    `;
    
    modal.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h2 style="margin: 0; font-size: 18px; font-weight: 600;">${title}</h2>
        <button id="closeModal" style="background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
      </div>
      <div>${content}</div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Close modal functionality
    const closeModal = () => overlay.remove();
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.getElementById('closeModal').addEventListener('click', closeModal);
  }
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize popup when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new UltraLobsterPopup();
});