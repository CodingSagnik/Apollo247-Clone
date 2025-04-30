# Pixel-Perfect UI Implementation

This document details how the Apollo247 doctor listing clone precisely matches the original design requirements.

## Font Implementation
The Mont font family was implemented exactly as specified in the requirements:

```css
@font-face {
  font-family: 'Mont';
  src: url('/fonts/Mont-Regular.woff2') format('woff2'),
       url('/fonts/Mont-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Mont';
  src: url('/fonts/Mont-Bold.woff2') format('woff2'),
       url('/fonts/Mont-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

## Color Scheme
The exact color values have been implemented throughout the application:

```css
:root {
  --foreground-rgb: 11, 8, 9; /* #0B0809 */
  --background-rgb: 245, 245, 245; /* #F5F5F5 */
  --primary-blue: 54, 67, 251; /* #3643FB */
  --neutral-grey: 51, 51, 51; /* #333333 */
}
```

These colors are also defined in the Tailwind configuration:

```js
theme: {
  extend: {
    colors: {
      apollo: {
        dark: '#0B0809',
        grey: '#333333',
        blue: '#3643FB',
        light: '#F5F5F5',
      },
    },
  },
}
```

## Precise Measurements
The application adheres to exact measurements as specified:

- Title section: `width: 353px; height: 32px;`
- Doctor card spacing follows the 16px grid system
- Filter sections maintain consistent 24px vertical spacing
- Buttons maintain exact 16px horizontal padding and 12px vertical padding

## Responsive Design
Special attention has been given to the target display size (393 × 852px):

```css
@media (max-width: 393px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  /* Other mobile-specific adjustments */
}
```

A custom breakpoint was added to the Tailwind configuration:

```js
screens: {
  'apollo-mobile': '393px',
},
```

## Component Examples

### Doctor Card Component
The doctor card component replicates the original Apollo247 design with exact spacing, font sizes, and color application:

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden w-full mb-4">
  <div className="flex flex-col md:flex-row">
    {/* Doctor Image and Basic Info */}
    <div className="md:w-1/4 p-4 flex flex-col items-center justify-center bg-apollo-light">
      <div className="relative h-28 w-28 rounded-full overflow-hidden mb-2">
        <Image 
          src={doctor.imageUrl} 
          alt={doctor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100px, 112px"
        />
      </div>
      <h3 className="text-center font-medium text-lg text-apollo-dark">{doctor.name}</h3>
      <p className="text-center text-sm text-apollo-grey">{doctor.specialty}</p>
      <p className="text-center text-sm text-apollo-grey">{doctor.experience} Years Experience</p>
    </div>
    
    {/* Other sections... */}
  </div>
</div>
```

### Filter Sidebar
The filter sidebar precisely matches the layout, spacing, and interaction patterns of the original design:

```jsx
<div className="bg-white rounded-lg shadow-md p-5 w-full max-w-xs">
  <h2 className="text-lg font-bold mb-4 text-apollo-dark">Filters</h2>

  <div className="divide-y divide-gray-200">
    {renderFilterSection('Gender', genderFilters, 'gender')}
    {renderFilterSection('Experience', experienceFilters, 'experience')}
    {/* Other filter sections... */}
  </div>
</div>
```

## Interactive Elements
All interactive elements (buttons, checkboxes, pagination) maintain the exact visual design of Apollo247:

- Button hover states use the appropriate color transitions
- Checkbox components match the original styling
- Focus states provide accessibility while maintaining design consistency
