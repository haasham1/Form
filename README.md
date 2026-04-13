# FlowerForm - User Registration Application

A modern, fully-featured user registration form built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in form validation, state management, and user experience design.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd form-task

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📋 Features

### Core Features
- ✅ **User Registration Form** with 4 fields (Full Name, Email, Phone, Password)
- ✅ **Real-time Form Validation** using Yup schema validation
- ✅ **Password Strength Meter** with visual feedback
- ✅ **Show/Hide Password Toggle** for better UX
- ✅ **Success Checkmarks** on valid field input
- ✅ **Loading States** with animated spinner during submission
- ✅ **Success Page** with user data preview
- ✅ **Responsive Design** - works on mobile, tablet, and desktop
- ✅ **Split-Screen Layout** - branded left side, form on right
- ✅ **Accessibility** - ARIA labels, keyboard navigation, screen reader support

### UX Enhancements
- Inline error messages below each field
- Visual feedback on field focus (pink ring)
- Disabled submit button during form submission
- Form reset after successful submission
- Smooth animations and transitions
- Preview submitted data before final confirmation

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.4** - UI library for building component-based interfaces
- **TypeScript 6.0.2** - Type-safe JavaScript for better developer experience
- **Vite 8.0.4** - Fast build tool and dev server

### Styling
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind v4
- **Custom CSS Animations** - Fade-in and bounce effects

### Form Management
- **React Hook Form 7.72.1** - Performant form library with minimal re-renders
- **Yup 1.7.1** - Schema validation library
- **@hookform/resolvers 5.2.2** - Resolver for integrating Yup with React Hook Form

### State Management
- **React useState Hook** - Local component state for:
  - Form submission status
  - Password visibility toggle
  - Success/preview screen toggle
  - Submitted user data storage

### Development Tools
- **ESLint 9.39.4** - Code linting
- **TypeScript ESLint 8.58.0** - TypeScript-specific linting rules
- **Vite Plugin React 6.0.1** - Fast refresh and JSX support

## 📁 Project Structure

```
form-task/
├── public/
│   ├── favicon.svg          # Custom gradient favicon with checkmark
│   ├── flower.png           # Decorative flower image for branding
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── InputField.tsx           # Reusable text input with validation
│   │   ├── PasswordField.tsx        # Password input with toggle & strength meter
│   │   ├── PasswordToggle.tsx       # Show/hide password button
│   │   ├── PasswordStrengthMeter.tsx # Visual password strength indicator
│   │   ├── SubmitButton.tsx         # Button with loading state
│   │   └── SuccessCard.tsx          # Success message & data preview
│   ├── pages/
│   │   └── RegistrationPage.tsx     # Main registration form page
│   ├── validation/
│   │   └── registrationSchema.ts    # Yup validation schema
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & Tailwind imports
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── postcss.config.js
```

## 🎨 Component Architecture

### 1. **RegistrationPage** (Main Container)
- Manages form state using `useForm` from React Hook Form
- Handles form submission with async simulation
- Conditionally renders form or success screen
- Tracks field validation status for success checkmarks

### 2. **InputField** (Reusable Input Component)
```typescript
Props:
- id: string
- label: string
- type: HTMLInputTypeAttribute
- placeholder: string
- registration: UseFormRegisterReturn
- error: FieldError
```

### 3. **PasswordField** (Enhanced Password Input)
```typescript
Props:
- id: string
- label: string
- placeholder: string
- registration: UseFormRegisterReturn
- error: FieldError
- value: string (for strength meter)
```

### 4. **PasswordStrengthMeter**
- Calculates strength based on:
  - Length (6+ chars, 10+ chars)
  - Mixed case letters
  - Numbers
  - Special characters
- Visual bars: Weak (red) → Fair (orange) → Good (yellow) → Strong (green)

### 5. **SuccessCard**
- Shows success message with animated checkmark
- "Preview Your Details" button to view submitted data
- "Register Another Account" to reset form

## 🔐 Validation Rules

### Full Name
- Required field
- Trimmed whitespace

### Email
- Required field
- Must be valid email format
- Trimmed whitespace

### Phone Number
- Required field
- Regex pattern: `/^\+?[0-9\s\-().]{7,20}$/`
- Accepts international formats with +, spaces, dashes, parentheses

### Password
- Required field
- Minimum 6 characters
- Strength meter provides additional feedback

## 🎯 State Management Approach

### Local State (useState)
```typescript
// Form submission tracking
const [isSubmitted, setIsSubmitted] = useState(false);

// Store submitted data for preview
const [submittedData, setSubmittedData] = useState<RegistrationFormData>();

// Password visibility toggle
const [showPassword, setShowPassword] = useState(false);

// Success card preview toggle
const [showPreview, setShowPreview] = useState(false);
```

### Form State (React Hook Form)
```typescript
const {
  register,        // Register input fields
  handleSubmit,    // Form submission handler
  reset,           // Reset form after submission
  watch,           // Watch password field for strength meter
  formState: {
    errors,        // Validation errors
    isSubmitting,  // Loading state
    touchedFields  // Track touched fields for checkmarks
  }
} = useForm<RegistrationFormData>({
  resolver: yupResolver(registrationSchema),
  mode: 'onTouched'  // Validate on blur
});
```

**Why React Hook Form?**
- Minimal re-renders (uncontrolled components)
- Built-in validation integration
- Excellent TypeScript support
- Small bundle size (~9KB)

**No Redux/Context API needed because:**
- Form state is local to one page
- No need to share state across components
- React Hook Form handles complex form state internally

## 🎨 Design System

### Color Palette
- **Primary**: Pink 500 → Rose 600 (gradient)
- **Background**: Pink 100 → Rose 100 (gradient)
- **Text**: Gray 900 (headings), Gray 600 (body)
- **Success**: Green 500
- **Error**: Red 500
- **Focus Ring**: Pink 500

### Typography
- **Headings**: System UI font stack, bold weight
- **Body**: System UI font stack, regular weight
- **Sizes**: Responsive (text-3xl on desktop, smaller on mobile)

### Spacing
- Form fields: `space-y-5` (1.25rem gap)
- Card padding: `p-8` (2rem)
- Input padding: `px-4 py-2.5`

## 🔄 User Flow

1. **Landing** → User sees split-screen with branding and form
2. **Input** → User fills fields, sees real-time validation
3. **Validation** → Errors appear below fields, success checkmarks on valid input
4. **Submit** → Button shows loading spinner, form disabled
5. **Success** → Animated success screen with checkmark
6. **Preview** → User can view submitted data
7. **Reset** → User can register another account

## 🧪 Testing Scenarios

### Valid Inputs
```
Full Name: John Doe
Email: john@example.com
Phone: +1 234 567 8900
Password: SecurePass123!
```

### Invalid Inputs to Test
- Empty fields → "Field is required"
- Invalid email → "Enter a valid email address"
- Short password → "Password must be at least 6 characters"
- Invalid phone → "Enter a valid phone number"

## 📱 Responsive Breakpoints

- **Mobile**: < 1024px (stacked layout, form only)
- **Desktop**: ≥ 1024px (split-screen layout)

## ♿ Accessibility Features

- Semantic HTML (`<label>`, `<input>`, `<button>`)
- ARIA labels (`aria-label`, `aria-invalid`, `aria-describedby`)
- Keyboard navigation support
- Focus visible states
- Error announcements for screen readers
- Sufficient color contrast ratios

## 🚀 Performance Optimizations

- Vite for fast HMR (Hot Module Replacement)
- React Hook Form reduces re-renders
- Tailwind CSS purges unused styles in production
- Lazy validation (onTouched mode)
- Optimized images (flower.png)

## 📦 Build Output

```bash
npm run build
```

Generates optimized production build in `dist/` folder:
- Minified JavaScript
- Purged CSS (only used Tailwind classes)
- Optimized assets
- Source maps for debugging

## 🤝 Contributing

This is a demo project for educational purposes. Feel free to fork and modify!

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
