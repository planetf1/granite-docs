// IBM Analytics setup for Mintlify
// Configure this script as a custom JS file in your Mintlify settings

(function() {
  // Only run in production or when explicitly enabled
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('IBM Analytics disabled in development');
    return;
  }

  // Set up IBM Analytics configuration
  window.idaPageIsSPA = true;
  
  // Configure digital data
  window.digitalData = {
    page: {
      category: { 
        primaryCategory: 'PC340'
      },
      pageInfo: { 
        ibm: { 
          siteId: 'granite-developer-enablement'
        }
      }
    }
  };

  // Configure IBM Analytics settings
  window._ibmAnalytics = {
    settings: { 
      name: 'granite-developer-enablement',
      isSpa: true
    }
  };

  // Load IBM Analytics library
  var script = document.createElement('script');
  script.src = 'https://1.www.s81c.com/common/stats/ibm-common.js';
  script.type = 'text/javascript';
  script.defer = true;
  document.head.appendChild(script);

  // Set up automatic pageview tracking for SPA navigation
  var originalPushState = history.pushState;
  var originalReplaceState = history.replaceState;
  
  function trackPageview() {
    // Wait for IBM Analytics to load, then track pageview
    setTimeout(function() {
      if (window.ibmStats && typeof window.ibmStats.pageview === 'function') {
        window.ibmStats.pageview();
      }
    }, 100);
  }

  // Override pushState to track SPA navigation
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    trackPageview();
  };

  // Override replaceState to track SPA navigation
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    trackPageview();
  };

  // Track initial page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageview);
  } else {
    trackPageview();
  }

  // Also track on popstate (back/forward button)
  window.addEventListener('popstate', trackPageview);
})();