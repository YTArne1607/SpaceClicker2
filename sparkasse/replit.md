# Schatzkasse - Die Sparkasse für Piraten

## Overview
This is a static HTML/CSS/JavaScript website for "Schatzkasse" (Treasure Bank), a pirate-themed parody of a German savings bank (Sparkasse). The website allows users to create mock bank accounts through a verification process using EmailJS.

## Project Structure
- **index.html** - Main landing page with header and background image
- **open-konto.html** - Account opening form (collects name and email)
- **verify.html** - Email verification page
- **style.css** - Shared stylesheet for all pages
- **script.js** - JavaScript utilities (mostly commented out)
- **Images** - Logo and background images

## Technology Stack
- Pure HTML, CSS, and vanilla JavaScript
- EmailJS for email verification and account details delivery
- No build process or dependencies required

## Development Setup
- **Server**: Python's built-in HTTP server serves static files on port 5000
- **Workflow**: Single "Server" workflow configured to run the HTTP server
- **No backend**: Entirely client-side application

## Deployment Configuration
- **Type**: Autoscale (perfect for static sites)
- **Run command**: `python -m http.server 5000`

## Recent Changes (2025-10-01)
- Imported from GitHub
- Configured Python 3.11 module
- Set up HTTP server workflow on port 5000
- Configured autoscale deployment
- Verified all pages load correctly (index, open-konto, verify)

## User Flow
1. User lands on index.html
2. Clicks "Konto eröffnen" button → navigates to open-konto.html
3. Fills in name and email → receives verification code via email
4. Redirected to verify.html after 2 seconds
5. Enters verification code → receives account details via email
6. Redirected back to index.html after 3 seconds
