    import React from 'react';

    interface LayoutProps {
      children: React.ReactNode;
    }

    const Layout: React.FC<LayoutProps> = ({ children }) => {
      return (
        // Simple layout wrapper for now.
        // In a real app, this might include a fixed header, footer, etc.
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      );
    };

    export default Layout;
    