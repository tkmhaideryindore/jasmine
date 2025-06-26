// Configuration - Keep this file secure and don't expose in production
const CONFIG = {
  // Base64 encoded Google Sheets URL to make it less obvious in browser inspector
  SHEET_URL: 'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMW5LNHFELTdvOWtJSHpOZjVISjNyeExiRVNuWExpcE04VEdJQVl2ak9iZmcvZXhwb3J0P2Zvcm1hdD1jc3YmZ2lkPTA='
};

// Decode function
function getSheetUrl() {
  return atob(CONFIG.SHEET_URL);
}
