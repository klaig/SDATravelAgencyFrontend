# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added



### Changed

-Admin API calls now properly send the authorization header to the backend.
-Fixed all current console errors:
-Two different matDatePickers used the same instance of #picker 
-Simply renamed the pickers to reflect which datePicker it was for
-Changed our reusable UI element (destination auto complete form field) to not use both ngModel and formControl. Made sure it properly emits the value changes using only formControl.

### Removed


