# Carousel Component Data Template
# Template ID: {A1B2C3D4-E5F6-7890-ABCD-EF1234567890}
# Template Name: Carousel Component
# Base Template: Standard Template
# Insert Options: Carousel Component
# Icon: /sitecore/shell/themes/standard/images/16x16/carousel.png

# Template Definition
Template: Carousel Component
  ID: {A1B2C3D4-E5F6-7890-ABCD-EF1234567890}
  Name: Carousel Component
  Base Template: Standard Template
  Insert Options: Carousel Component
  Icon: /sitecore/shell/themes/standard/images/16x16/carousel.png
  Description: Hero carousel component with multiple slides for D-Link products

# Fields Section
Fields:
  # Carousel Settings
  - Field: Autoplay
    ID: {B1B2C3D4-E5F6-7890-ABCD-EF1234567891}
    Type: Checkbox
    Section: Carousel Settings
    Sort Order: 10
    Required: No
    Default Value: True
    Help Text: Enable automatic slide progression

  - Field: Autoplay Delay
    ID: {B1B2C3D4-E5F6-7890-ABCD-EF1234567892}
    Type: Number
    Section: Carousel Settings
    Sort Order: 20
    Required: No
    Default Value: 5000
    Help Text: Delay between slides in milliseconds (default: 5000ms)

  # Slides Section
  - Field: Slides
    ID: {B1B2C3D4-E5F6-7890-ABCD-EF1234567893}
    Type: Treelist
    Section: Slides
    Sort Order: 30
    Required: Yes
    Source: query:./*[@@templatename='Carousel Slide']
    Help Text: Select slides for the carousel

# Carousel Slide Template
Template: Carousel Slide
  ID: {C1B2C3D4-E5F6-7890-ABCD-EF1234567890}
  Name: Carousel Slide
  Base Template: Standard Template
  Insert Options: Carousel Slide
  Icon: /sitecore/shell/themes/standard/images/16x16/slide.png
  Description: Individual slide for carousel component

# Slide Fields
Slide Fields:
  - Field: Heading
    ID: {C1B2C3D4-E5F6-7890-ABCD-EF1234567891}
    Type: Single-Line Text
    Section: Content
    Sort Order: 10
    Required: Yes
    Help Text: Main heading for the slide

  - Field: Subheading
    ID: {C1B2C3D4-E5F6-7890-ABCD-EF1234567892}
    Type: Single-Line Text
    Section: Content
    Sort Order: 20
    Required: No
    Help Text: Secondary heading for the slide

  - Field: Description
    ID: {C1B2C3D4-E5F6-7890-ABCD-EF1234567893}
    Type: Rich Text
    Section: Content
    Sort Order: 30
    Required: No
    Help Text: Detailed description or content for the slide

  - Field: Background Image
    ID: {C1B2C3D4-E5F6-7890-ABCD-EF1234567894}
    Type: Image
    Section: Media
    Sort Order: 40
    Required: No
    Help Text: Background image for the slide

  - Field: Video URL
    ID: {C1B2C3D4-E5F6-7890-ABCD-EF1234567895}
    Type: Single-Line Text
    Section: Media
    Sort Order: 50
    Required: No
    Help Text: URL for background video (overrides background image)

  - Field: CTA Link
    ID: {C1B2C3D4-E5F6-7890-ABCD-EF1234567896}
    Type: General Link
    Section: Call to Action
    Sort Order: 60
    Required: No
    Help Text: Call-to-action link for the slide

# Sample Data Structure
Sample Data:
  Carousel Component:
    Autoplay: True
    Autoplay Delay: 5000
    Slides:
      - Slide 1:
          Heading: "D-Link Wi-Fi 6 Routers"
          Subheading: "Next-Generation Wireless Technology"
          Description: "Experience blazing-fast internet speeds with our latest Wi-Fi 6 routers. Perfect for gaming, streaming, and smart home connectivity."
          Background Image: "/images/hero-wifi6-router.jpg"
          CTA Link: "/products/wifi6-routers"
      
      - Slide 2:
          Heading: "Business Networking Solutions"
          Subheading: "Enterprise-Grade Performance"
          Description: "Scale your business with professional networking equipment designed for reliability and performance."
          Background Image: "/images/hero-business-networking.jpg"
          CTA Link: "/business/solutions"
      
      - Slide 3:
          Heading: "Smart Home Security"
          Subheading: "Protect What Matters Most"
          Description: "Monitor your home with our advanced IP cameras and surveillance systems."
          Video URL: "/videos/security-demo.mp4"
          CTA Link: "/products/security"

# Component Registration
Component Registration:
  Component Name: Carousel
  Component Path: /src/components/ui/carousel.tsx
  Template ID: {A1B2C3D4-E5F6-7890-ABCD-EF1234567890}
  Placeholder: main
  Insert Options: Carousel Component

# Validation Rules
Validation Rules:
  - Autoplay Delay must be between 1000 and 30000 milliseconds
  - At least one slide must be selected
  - Video URL must be a valid URL format when provided
  - Background Image must be a valid image file when provided

# Rendering Parameters
Rendering Parameters:
  - Parameter: Height
    Type: Single-Line Text
    Default Value: "600px"
    Help Text: Height of the carousel in pixels
  
  - Parameter: Show Navigation
    Type: Checkbox
    Default Value: True
    Help Text: Show navigation arrows
  
  - Parameter: Show Dots
    Type: Checkbox
    Default Value: True
    Help Text: Show dot navigation indicators
