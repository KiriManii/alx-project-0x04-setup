    import React from 'react';

    interface ButtonProps {
      buttonLabel: string;
      buttonBackgroundColor: string;
      onClick?: () => void; // Optional click handler
    }

    const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor, onClick }) => {
      // Tailwind CSS classes for dynamic background color and consistent styling.
      const bgColorClass = `bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600`;

      return (
        <button
          onClick={onClick}
          className={`${bgColorClass} text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${buttonBackgroundColor}-500 focus:ring-opacity-75`}
        >
          {buttonLabel}
        </button>
      );
    };

    export default Button;
    