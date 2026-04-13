import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { registrationSchema, type RegistrationFormData } from '../validation/registrationSchema';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import SubmitButton from '../components/SubmitButton';
import SuccessCard from '../components/SuccessCard';

export default function RegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData | undefined>();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema) as any,
    mode: 'onTouched',
  });

  const passwordValue = watch('password', '');

  const onSubmit = async (data: RegistrationFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmittedData(data);
    reset();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(undefined);
  };

  if (isSubmitted) {
    return <SuccessCard onReset={handleReset} userData={submittedData} />;
  }

  const getFieldStatus = (fieldName: keyof RegistrationFormData) => {
    if (errors[fieldName]) return 'error';
    if (touchedFields[fieldName] && !errors[fieldName]) return 'success';
    return 'default';
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left Side - Pink Background with Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 p-12 flex-col justify-center items-center relative overflow-hidden transition-colors duration-300">
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-lg">
          
          {/* Flower Logo Behind Title */}
          <div className="relative mb-8">
            <img 
              src="/flower.png" 
              alt="Flower logo" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-20 blur-sm"
            />
            <h1 className="relative text-5xl font-bold text-gray-900 leading-tight">
              Welcome to<br />FlowerForm
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Create your account and join our community.<br />
            Simple, secure, and ready in seconds.
          </p>
        </div>
      </div>

      {/* Right Side - White Background with Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 lg:p-12 transition-colors duration-300">
        <div className="w-full max-w-md animate-fade-in">

          {/* Mobile Logo - Simple and Clean */}
          <div className="lg:hidden flex flex-col items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">FlowerForm</h1>
          </div>

          <header className="mb-8 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-sm lg:text-base text-gray-600">
              Fill in your details to get started
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            
            <div className="relative">
              <InputField
                id="fullName"
                label="Full Name"
                placeholder="John Doe"
                registration={register('fullName')}
                error={errors.fullName}
              />
              {getFieldStatus('fullName') === 'success' && (
                <div className="absolute right-3 top-9 text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            <div className="relative">
              <InputField
                id="email"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                registration={register('email')}
                error={errors.email}
              />
              {getFieldStatus('email') === 'success' && (
                <div className="absolute right-3 top-9 text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            <div className="relative">
              <InputField
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 234 567 8900"
                registration={register('phone')}
                error={errors.phone}
              />
              {getFieldStatus('phone') === 'success' && (
                <div className="absolute right-3 top-9 text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            <PasswordField
              id="password"
              label="Password"
              placeholder="Min. 6 characters"
              registration={register('password')}
              error={errors.password}
              value={passwordValue}
            />

            <div className="pt-2">
              <SubmitButton
                isLoading={isSubmitting}
                label="Create Account"
                loadingLabel="Creating your account…"
              />
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
