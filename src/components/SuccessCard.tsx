import { useState } from 'react';
import type { RegistrationFormData } from '../validation/registrationSchema';

interface SuccessCardProps {
  onReset: () => void;
  userData?: RegistrationFormData;
}

export default function SuccessCard({ onReset, userData }: SuccessCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md mx-auto transition-colors duration-300">
        
        {!showPreview ? (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto shadow-lg animate-bounce-once">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome aboard! 🎉</h2>
              <p className="text-sm text-gray-500 mt-2">
                Your account has been created successfully.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => setShowPreview(true)}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-sm font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Preview Your Details
              </button>

              <button
                onClick={onReset}
                className="w-full border-2 border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-600 text-sm font-medium py-3 rounded-lg transition-all duration-200"
              >
                Register Another Account
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Account Details</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close preview"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {userData && (
              <div className="space-y-3">
                <DetailRow label="Full Name" value={userData.fullName} icon="👤" />
                <DetailRow label="Email" value={userData.email} icon="📧" />
                <DetailRow label="Phone" value={userData.phone} icon="📱" />
                <DetailRow label="Password" value="••••••••" icon="🔒" />
              </div>
            )}

            <div className="pt-4 space-y-2">
              <button
                onClick={() => setShowPreview(false)}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-sm font-semibold py-3 rounded-lg transition-all duration-200"
              >
                Back to Success
              </button>
              <button
                onClick={onReset}
                className="w-full text-sm text-gray-600 hover:text-pink-600 hover:underline transition-colors"
              >
                Register another account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 transition-colors duration-300">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
          <p className="text-sm font-semibold text-gray-900 mt-1 break-words">{value}</p>
        </div>
      </div>
    </div>
  );
}
