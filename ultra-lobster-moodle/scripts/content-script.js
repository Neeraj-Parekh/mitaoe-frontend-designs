// Content Script for Ultra Lobster Moodle Extension

(function() {
  'use strict';

  class UltraLobsterContentScript {
    constructor() {
      this.isEnabled = true;
      this.animations = new Map();
      this.init();
    }

    init() {
      console.log('Ultra Lobster: Content script initialized');
      
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.enhance());
      } else {
        this.enhance();
      }

      // Listen for theme changes
      document.addEventListener('ultraLobsterThemeChanged', (e) => {
        this.onThemeChanged(e.detail.theme);
      });

      // Listen for dynamic content changes
      this.observeChanges();
    }

    enhance() {
      if (!this.isEnabled || !this.isMoodleSite()) return;

      console.log('Ultra Lobster: Enhancing Moodle interface');
      
      // Add Ultra Lobster class to body
      document.body.classList.add('ultra-lobster-enhanced');
      
      // Enhance various components
      this.enhanceNavigation();
      this.enhanceCourseContent();
      this.enhanceBlocks();
      this.enhanceForms();
      this.enhanceTables();
      this.enhanceModals();
      this.addLoadingAnimations();
      this.improveAccessibility();
      
      // Add smooth scroll behavior
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    isMoodleSite() {
      return window.location.hostname === 'moodle.mitaoe.ac.in' ||
             document.body.classList.contains('format-topics') ||
             document.body.classList.contains('format-weeks') ||
             document.querySelector('#page-wrapper') !== null;
    }

    enhanceNavigation() {
      // Enhance navbar
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.add('ultra-enhanced-navbar');
      }

      // Enhance breadcrumbs
      const breadcrumbs = document.querySelectorAll('.breadcrumb');
      breadcrumbs.forEach(breadcrumb => {
        breadcrumb.classList.add('ultra-enhanced-breadcrumb');
      });

      // Enhance navigation links
      const navLinks = document.querySelectorAll('.navbar a, .nav-link');
      navLinks.forEach(link => {
        link.addEventListener('mouseenter', this.createHoverEffect);
        link.addEventListener('mouseleave', this.removeHoverEffect);
      });
    }

    enhanceCourseContent() {
      // Enhance course sections
      const sections = document.querySelectorAll('.course-content .section');
      sections.forEach((section, index) => {
        section.classList.add('ultra-enhanced-section');
        
        // Add stagger animation
        section.style.animationDelay = `${index * 0.1}s`;
      });

      // Enhance activities
      const activities = document.querySelectorAll('.activity');
      activities.forEach(activity => {
        activity.classList.add('ultra-enhanced-activity');
        
        // Add click effect
        activity.addEventListener('click', this.createClickEffect);
      });
    }

    enhanceBlocks() {
      const blocks = document.querySelectorAll('.block');
      blocks.forEach((block, index) => {
        block.classList.add('ultra-enhanced-block');
        
        // Add stagger animation
        block.style.animationDelay = `${index * 0.05}s`;
        
        // Enhance block headers
        const header = block.querySelector('.header');
        if (header) {
          header.classList.add('ultra-enhanced-block-header');
        }
      });
    }

    enhanceForms() {
      // Enhance form inputs
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.classList.add('ultra-enhanced-input');
        
        // Add focus animations
        input.addEventListener('focus', () => {
          input.classList.add('ultra-focused');
        });
        
        input.addEventListener('blur', () => {
          input.classList.remove('ultra-focused');
        });
      });

      // Enhance buttons
      const buttons = document.querySelectorAll('.btn, button, input[type="submit"]');
      buttons.forEach(button => {
        button.classList.add('ultra-enhanced-button');
        
        // Add click ripple effect
        button.addEventListener('click', this.createRippleEffect);
      });
    }

    enhanceTables() {
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        table.classList.add('ultra-enhanced-table');
        
        // Add hover effects to rows
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          row.addEventListener('mouseenter', () => {
            row.classList.add('ultra-hovered');
          });
          
          row.addEventListener('mouseleave', () => {
            row.classList.remove('ultra-hovered');
          });
        });
      });
    }

    enhanceModals() {
      // Enhance existing modals
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        modal.classList.add('ultra-enhanced-modal');
      });

      // Watch for new modals
      const modalObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.classList.contains('modal')) {
              node.classList.add('ultra-enhanced-modal');
            }
          });
        });
      });

      modalObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    addLoadingAnimations() {
      // Add loading states to content areas
      const contentAreas = document.querySelectorAll('.course-content, .block-region');
      contentAreas.forEach(area => {
        // Add initial loading animation
        area.classList.add('ultra-loading');
        
        // Remove loading after content is visible
        setTimeout(() => {
          area.classList.remove('ultra-loading');
          area.classList.add('ultra-loaded');
        }, 300);
      });
    }

    improveAccessibility() {
      // Improve focus visibility
      const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
          element.classList.add('ultra-focus-visible');
        });
        
        element.addEventListener('blur', () => {
          element.classList.remove('ultra-focus-visible');
        });
      });

      // Add skip links for keyboard navigation
      this.addSkipLinks();
    }

    addSkipLinks() {
      if (document.querySelector('.ultra-skip-links')) return;

      const skipLinks = document.createElement('div');
      skipLinks.className = 'ultra-skip-links';
      skipLinks.innerHTML = `
        <a href="#page-content" class="ultra-skip-link">Skip to main content</a>
        <a href="#block-region-side-pre" class="ultra-skip-link">Skip to sidebar</a>
      `;
      
      document.body.insertBefore(skipLinks, document.body.firstChild);
    }

    observeChanges() {
      const observer = new MutationObserver(mutations => {
        let shouldEnhance = false;
        
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
              // Check if new content needs enhancement
              if (node.classList.contains('section') ||
                  node.classList.contains('block') ||
                  node.classList.contains('activity')) {
                shouldEnhance = true;
              }
            }
          });
        });
        
        if (shouldEnhance) {
          // Debounce enhancements
          clearTimeout(this.enhanceTimeout);
          this.enhanceTimeout = setTimeout(() => this.enhance(), 100);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    createHoverEffect(event) {
      event.currentTarget.classList.add('ultra-hover-effect');
    }

    removeHoverEffect(event) {
      event.currentTarget.classList.remove('ultra-hover-effect');
    }

    createClickEffect(event) {
      const element = event.currentTarget;
      element.classList.add('ultra-click-effect');
      
      setTimeout(() => {
        element.classList.remove('ultra-click-effect');
      }, 150);
    }

    createRippleEffect(event) {
      const button = event.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: scale(0);
        animation: ultra-ripple 0.6s linear;
        pointer-events: none;
      `;
      
      ripple.classList.add('ultra-ripple');
      
      if (getComputedStyle(button).position === 'static') {
        button.style.position = 'relative';
      }
      
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    }

    onThemeChanged(theme) {
      console.log(`Ultra Lobster: Theme changed to ${theme}`);
      
      // Re-enhance elements for new theme
      this.enhance();
      
      // Trigger theme-specific enhancements
      document.body.classList.remove('ultra-theme-light', 'ultra-theme-dark', 'ultra-theme-gummy', 'ultra-theme-brutal', 'ultra-theme-soft');
      document.body.classList.add(`ultra-theme-${theme}`);
    }

    toggle() {
      this.isEnabled = !this.isEnabled;
      
      if (this.isEnabled) {
        this.enhance();
      } else {
        document.body.classList.remove('ultra-lobster-enhanced');
      }
    }
  }

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ultra-ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .ultra-enhanced-section {
      animation: slideInUp 0.6s ease-out both;
    }
    
    .ultra-enhanced-block {
      animation: fadeInScale 0.4s ease-out both;
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .ultra-skip-links {
      position: fixed;
      top: -100px;
      left: 0;
      z-index: 10000;
    }
    
    .ultra-skip-link {
      display: block;
      padding: 8px 16px;
      background: #000;
      color: #fff;
      text-decoration: none;
      transition: top 0.3s;
    }
    
    .ultra-skip-link:focus {
      top: 0;
    }
    
    .ultra-focus-visible {
      outline: 2px solid var(--ultra-accent-color);
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);

  // Initialize the content script
  new UltraLobsterContentScript();
})();