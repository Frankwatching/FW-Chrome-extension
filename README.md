# Frankwatching Chrome Extension

A Chrome Extension designed to enhance and automate the Frankwatching email editor experience within **ActiveCampaign** and **Act-On Software**.  
It injects custom html and styles into the campaign editor pages to extend functionality, improve usability, and streamline content management.

---

## 🚀 Features

- Automatically loads custom scripts (`LoadCanvas.js`, `Append.js`, `DefineIndexStyle.js`, `content.js`) inside ActiveCampaign and Act-On editors.
- Adds additional layout and style options for templates.
- Enables clipboard copying (`clipboardWrite` permission).
- Integrates seamlessly with the Frankwatching campaign workflow.
- Provides background functionality via a service worker (`browser.js`).
- Custom styling through `main.css`.

---

## 🧩 Project Structure

| File | Description |
|------|--------------|
| **manifest.json** | Defines the extension configuration, permissions, and content scripts. |
| **LoadCanvas.js** | Initializes or injects core DOM functionality into the editor. |
| **Append.js** | Handles dynamic DOM additions, elements, or UI controls. |
| **DefineIndexStyle.js** | Manages styles or template indexing logic. |
| **content.js** | Main logic for interacting with the editor and content. |
| **main.css** | Contains extension-specific UI styles. |
| **browser.js** | Background service worker managing persistent tasks. |
| **ActOnPlusIcon.png** | Extension toolbar icon. |

---

## ⚙️ Installation (Developer Mode)

1. **Clone or download** this repository.
2. Open **Google Chrome** and go to  
   `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right).
4. Click **"Load unpacked"**.
5. Select the project folder containing the `manifest.json`.
6. The **Frankwatching Extension** icon should appear in your toolbar.
7. The extension is also installable from Chrome Web Store. You need a @frankwatching account to do so.

---

## 🌐 Permissions Explained

| Permission | Purpose |
|-------------|----------|
| `clipboardWrite` | Allows copying content (e.g., HTML from the editor) to the clipboard. |
| `scripting` | Enables the extension to inject and execute scripts on supported domains. |
| `activeTab` | Allows the extension to interact with the active tab when triggered. |

---

## 🔗 Host Permissions

The extension is active on the following domains:

- `https://frankwatching2.activehosted.com/campaign/template/*`
- `https://frankwatching2.activehosted.com/campaign/editor/*`
- `*://*.actonsoftware.com/app/classic/if/_compose/*`
- `*://*.actonsoftware.com/app/content/emails/*`

---

## 🧠 Notes for Developers

- The extension uses **Manifest V3**, so background logic runs in a **service worker** (`browser.js`).
- If clipboard functionality fails, ensure Chrome permissions are granted and the page is HTTPS.
- Content scripts are automatically injected on matched URLs.
- Use the Chrome Developer Console (`Ctrl+Shift+I`) to debug script injection or DOM interaction errors.

---

## 🧩 Common Debugging Tips

- **CORS Errors:** If fetching external content (e.g., from WordPress or APIs), ensure the API supports CORS or use a proxy.
- **Clipboard Errors:** Clipboard API requires HTTPS and user interaction (e.g., a button click).
- **Uncaught (in promise)** errors: Wrap all asynchronous functions in `try/catch` for safe error handling.

---

## 🏷️ Version History

| Version | Changes |
|----------|----------|
| **v3.4.8** | Mailblue changes. |
| **v3.4.7** | Mailblue changes. |
| **v3.4.6** | fix timing issues. |
| **v3.4.5** | fixes due to cors errors. |
| **v3.4.4** | Stable release with improved clipboard handling and compatibility with ActiveCampaign/Act-On editors. |
| **v3.4.3** | Added CORS handling and style refinements. |
| **v3.4.2** | Code cleanup and performance improvements. |

---

## 📄 License

© Frankwatching — Internal Tool  
For internal and authorized team use only.
